<p align="center">
  <!-- Coloca el logo del cliente en public/logo.png o ajusta la ruta abajo -->
  <img src="./public/logo.png" alt="Logo del cliente" width="120" />
</p>

# The Box CS — Web App (React + TypeScript + Vite)

Aplicación web creada con **React**, **TypeScript** y **Vite**. Este repositorio contiene el código base del proyecto **The Box CS**, con una configuración mínima y rápida para desarrollo moderno en frontend.

> **Nota sobre el logo:** asegúrate de añadir el archivo del logo en `public/logo.png` (puedes cambiar la ruta si prefieres otra ubicación).

---

## 📑 Índice
- [Características](#-características)
- [Requisitos previos](#-requisitos-previos)
- [Arranque rápido](#-arranque-rápido)
- [Scripts disponibles](#-scripts-disponibles)
- [Variables de entorno](#-variables-de-entorno)
- [Estructura de carpetas](#-estructura-de-carpetas)
- [Buenas prácticas y calidad](#-buenas-prácticas-y-calidad)
- [Despliegue](#-despliegue)
- [Contacto](#-contacto)

---

## 🚀 Características
- ⚡️ **Vite** para desarrollo ultra-rápido y build optimizado.
- 🧩 **React 18** con **TypeScript** para tipado estático.
- ✅ Configuración de **ESLint** y reglas recomendadas para TS/React.
- 🔥 HMR (Hot Module Replacement) para recarga instantánea en desarrollo.

---

## 🧰 Requisitos previos
- **Node.js** ≥ 18 (recomendado 20 LTS).
- Gestor de paquetes: **npm**, **pnpm** o **yarn** (usa el que prefieras).

Comprueba tu versión de Node:
```bash
node -v
```

---

## 🏁 Arranque rápido
Clona el repositorio e instala dependencias. Elige **uno** de los gestores de paquetes y usa ese en todo el proyecto.

**Con npm**
```bash
npm install
npm run dev
```

**Con pnpm**
```bash
pnpm install
pnpm dev
```

**Con yarn**
```bash
yarn
yarn dev
```

La app quedará disponible (por defecto) en **http://localhost:5173**.

---

## 📜 Scripts disponibles
En `package.json` encontrarás los scripts más comunes. Equivalencias para cada gestor:

**Desarrollo**
```bash
npm run dev
# o pnpm dev
# o yarn dev
```

**Build de producción**
```bash
npm run build
# o pnpm build
# o yarn build
```

**Previsualizar build**
```bash
npm run preview
# o pnpm preview
# o yarn preview
```

**Linter**
```bash
npm run lint
# o pnpm lint
# o yarn lint
```

> Si usas TypeScript estricto o reglas adicionales, revisa/ajusta `eslint.config.js` y `tsconfig*.json`.

---

## 🔐 Variables de entorno
Si el proyecto necesita variables (APIs, claves públicas, etc.), crea un archivo `.env` en la raíz. Ejemplo:
```env
VITE_API_URL=https://api.ejemplo.com
VITE_FEATURE_FLAG=true
```
> Las variables deben empezar por `VITE_` para ser accesibles en el cliente. Considera añadir un `.env.example` con las claves necesarias (sin valores sensibles).

---

## 🗂️ Estructura de carpetas
_Ejemplo orientativo (puede variar según evolucione el proyecto):_
```
├─ public/
│  ├─ logo.png            # Logo del cliente usado en el README
│  └─ favicon.svg
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ pages/
│  ├─ hooks/
│  ├─ styles/
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html
├─ package.json
├─ tsconfig.app.json
├─ tsconfig.node.json
└─ README.md
```

---

## 🧪 Buenas prácticas y calidad
- Ejecuta `lint` antes de hacer commits para mantener un estilo consistente.
- Usa **TypeScript** de forma estricta cuando sea posible para prevenir errores en tiempo de ejecución.
- Considera añadir **Prettier** y un **pre-commit hook** (por ejemplo con Husky) si el proyecto lo requiere.

---

## ☁️ Despliegue
El proyecto compila a estáticos que puedes servir en cualquier hosting.

- **Vercel** / **Netlify**: selecciona este repo y usa el comando de build `npm run build`. Directorio de salida por defecto de Vite: `dist/`.
- **Servidor propio**: ejecuta `npm run build` y sirve la carpeta `dist/` con Nginx/Apache o un servidor estático.

---

## 📬 Contacto
**AsDev — Adrián Serrano**  
📧 adrian@asdev.es  
Si necesitas ayuda con la configuración o el despliegue, abre un issue o contacta por email.