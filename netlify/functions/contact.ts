/* eslint-disable @typescript-eslint/no-explicit-any */
// netlify/functions/contact.ts
import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

// ⚠️ Usa envs SIN prefijo VITE_ en funciones
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const MAIL_TO = process.env.MAIL_TO;
const MAIL_FROM = process.env.MAIL_FROM;

const resend = new Resend(RESEND_API_KEY);

export const handler: Handler = async (event) => {
  // Solo POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: false, error: "Method Not Allowed" }),
    };
  }

  // CORS + JSON
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  try {
    // Verifica ENV para evitar 500 opacos
    if (!RESEND_API_KEY || !MAIL_FROM || !MAIL_TO) {
      const miss = [
        !RESEND_API_KEY && "RESEND_API_KEY",
        !MAIL_FROM && "MAIL_FROM",
        !MAIL_TO && "MAIL_TO",
      ].filter(Boolean);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          ok: false,
          error: `Faltan variables de entorno: ${miss.join(", ")}`,
        }),
      };
    }

    const body = JSON.parse(event.body || "{}");
    if (typeof body !== "object") {
      return { statusCode: 400, headers, body: JSON.stringify({ ok: false, error: "Bad Request" }) };
    }

    // Campos esperados
    const name = (body.name || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const phone = (body.phone || "").toString().trim();
    const message = (body.message || "").toString().trim();
    const policy = !!body.policy; // checkbox de privacidad
    const hp = (body.website || "").toString().trim(); // honeypot oculto

    // Si honeypot viene relleno => bot, pero respondemos ok
    if (hp) {
      return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
    }

    // Validación básica
    if (!name || !email || !message || !policy) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ ok: false, error: "Faltan campos obligatorios." }),
      };
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return { statusCode: 400, headers, body: JSON.stringify({ ok: false, error: "Email inválido." }) };
    }

    // HTML del email (estilo limpio y compatible con clientes)
    const html = `
  <!doctype html>
  <html lang="es">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Nuevo mensaje — The Box Castellón</title>
      <!-- preheader (texto corto que algunos clientes muestran junto al asunto) -->
      <style>
        /* algunos clientes ignoran <style>, por eso todo va inline debajo */
      </style>
    </head>
    <body style="margin:0;padding:0;background:#f1f5f9;">
      <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
        Nuevo mensaje desde el formulario de la web theboxcastellon.com
      </div>

      <!-- contenedor -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f1f5f9;padding:24px 12px;">
        <tr>
          <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:620px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
              <!-- cabecera -->
              <tr>
                <td style="background:#065f46;padding:22px 24px;">
                  <h1 style="margin:0;color:#ffffff;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:18px;line-height:1.3;font-weight:700;">
                    Nuevo mensaje — The Box Castellón
                  </h1>
                  <p style="margin:6px 0 0;color:#d1fae5;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:13px;">
                    Enviado desde theboxcastellon.com
                  </p>
                </td>
              </tr>

              <!-- cuerpo -->
              <tr>
                <td style="padding:24px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td style="padding:0 0 14px;">
                        <p style="margin:0 0 8px;color:#0f172a;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:16px;line-height:1.5;">
                          <strong>Nombre:</strong>
                          <span style="color:#334155;">${escapeHtml(name)}</span>
                        </p>
                        <p style="margin:0 0 8px;color:#0f172a;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:16px;line-height:1.5;">
                          <strong>Email:</strong>
                          <span style="color:#334155;">${escapeHtml(email)}</span>
                        </p>
                        <p style="margin:0;color:#0f172a;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:16px;line-height:1.5;">
                          <strong>Teléfono:</strong>
                          <span style="color:#334155;">${escapeHtml(phone || "—")}</span>
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding-top:12px;">
                        <p style="margin:0 0 8px;color:#0f172a;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:16px;line-height:1.5;">
                          <strong>Mensaje:</strong>
                        </p>
                        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px;color:#0f172a;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:15px;line-height:1.6;white-space:pre-wrap;">
                          ${escapeHtml(message)}
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- pie -->
              <tr>
                <td style="padding:16px 24px;border-top:1px solid #e5e7eb;background:#fafafa;">
                  <p style="margin:0;color:#6b7280;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:12px;line-height:1.5;">
                    Este correo se generó automáticamente desde el formulario de contacto.
                  </p>
                </td>
              </tr>
            </table>

            <p style="margin:16px 0 0;color:#94a3b8;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:12px;">
              © The Box Castellón
            </p>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;

    // Envío al box
    const sendToOwner = await resend.emails.send({
      from: MAIL_FROM,
      to: [MAIL_TO],
      replyTo: email, // snake_case según Resend
      subject: `Contacto web — ${name}`,
      html,
    });

    if (sendToOwner.error) {
      console.error("Resend owner error:", sendToOwner.error);
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({
          ok: false,
          error: `Error de envío (propietario): ${sendToOwner.error.message || "desconocido"}`,
        }),
      };
    }

    // Autorespuesta al usuario (opcional)
    const autoReply = await resend.emails.send({
      from: MAIL_FROM,
      to: [email],
      replyTo: MAIL_TO,
      subject: "Hemos recibido tu mensaje",
      html: `
<!doctype html>
<html lang="es">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Hemos recibido tu mensaje — The Box Castellón</title>
  </head>
  <body style="margin:0;padding:0;background:#f1f5f9;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      Hemos recibido tu mensaje. Te contactaremos en breve.
    </div>

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f1f5f9;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:620px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
            <!-- Header -->
            <tr>
              <td style="background:#065f46;padding:22px 24px;">
                <h1 style="margin:0;color:#ffffff;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:18px;line-height:1.3;font-weight:700;">
                  Hemos recibido tu mensaje
                </h1>
                <p style="margin:6px 0 0;color:#d1fae5;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:13px;">
                  Gracias por escribir a The Box Castellón
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 12px;color:#0f172a;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:16px;line-height:1.6;">
                  Hola <strong>${escapeHtml(name)}</strong>,
                </p>
                <p style="margin:0 0 14px;color:#0f172a;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:16px;line-height:1.6;">
                  ¡gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
                </p>

                <!-- Opcional: resumen mínimo -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:8px;">
                  <tr>
                    <td style="padding:0 0 6px;">
                      <p style="margin:0;color:#0f172a;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:15px;">
                        <strong>Tu email:</strong> <span style="color:#334155;">${escapeHtml(email)}</span>
                      </p>
                    </td>
                  </tr>
                  ${phone ? `
                  <tr>
                    <td style="padding:0 0 6px;">
                      <p style="margin:0;color:#0f172a;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:15px;">
                        <strong>Tu teléfono:</strong> <span style="color:#334155;">${escapeHtml(phone)}</span>
                      </p>
                    </td>
                  </tr>` : ``}
                </table>

                <!-- CTA -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:18px;">
                  <tr>
                    <td>
                      <a href="https://www.theboxcastellon.com" target="_blank"
                        style="display:inline-block;background:#065f46;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:10px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:14px;">
                        Visitar web
                      </a>
                    </td>
                    <td width="10"></td>
                    <td>
                      <a href="tel:+34692505865"
                        style="display:inline-block;background:#ffffff;color:#065f46;border:1px solid #065f46;text-decoration:none;padding:12px 18px;border-radius:10px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:14px;">
                        Llamar
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Info -->
                <div style="margin-top:20px;padding:12px;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
                  <p style="margin:0;color:#334155;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:13px;line-height:1.6;">
                    Dirección: C/ José Pascual Viciano 10N — Polígono Industrial La Magdalena, 12004 Castellón
                  </p>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 24px;border-top:1px solid #e5e7eb;background:#fafafa;">
                <p style="margin:0;color:#6b7280;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:12px;line-height:1.5;">
                  Este mensaje es una confirmación automática de recepción. Si no has solicitado contacto, puedes ignorarlo.
                </p>
              </td>
            </tr>
          </table>

          <p style="margin:16px 0 0;color:#94a3b8;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial;font-size:12px;">
            © The Box Castellón
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`
    });

    if (autoReply.error) {
      // No hacemos fail total si falla la autorespuesta: solo avisamos
      console.warn("Resend autoreply warning:", autoReply.error);
    }

    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (err: any) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ ok: false, error: `Internal Server Error: ${err?.message || err}` }),
    };
  }
};

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}