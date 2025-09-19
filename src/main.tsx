// src/main.tsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Home } from "./pages/home";
import { Nosotros } from "./pages/nosotros";
import { OldSchoolTraining } from "./pages/old-school-training";
import Precios from "./pages/precios";
import { EntrenamientoPersonal } from "./pages/infinitum/entrenamiento-personal";
import { Nutricion } from "./pages/infinitum/nutricion";
import { Psicologia } from "./pages/infinitum/psicologia";
import { Vocabulario } from "./pages/filosofia/vocabulario";
import { ReglasOldSchool } from "./pages/filosofia/reglas-old-school";
import { ElBox } from "./pages/box/el-box";
/* import { Galeria } from "./pages/box/galeria"; */
import { Contacto } from "./pages/contacto";
import { AvisoLegal } from "./pages/legal/aviso-legal";
import { PoliticaCookies } from "./pages/legal/politica-cookies";
import { PoliticaPrivacidad } from "./pages/legal/politica-privacidad";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HelmetProvider>
        <App />
      </HelmetProvider>
    ), // App contiene <Layout> y <Outlet />
    children: [
      { index: true, element: <Home /> },
      { path: "nosotros", element: <Nosotros /> },
      { path: "old-school-training", element: <OldSchoolTraining /> },
      { path: "precios", element: <Precios /> },
      { path: "contacto", element: <Contacto /> },

      /* INFINITUM */
      { path: "entrenamiento-personal", element: <EntrenamientoPersonal /> },
      { path: "nutricion", element: <Nutricion /> },
      { path: "psicologia", element: <Psicologia /> },

      /* FILOSOFIA */
      { path: "vocabulario", element: <Vocabulario /> },
      { path: "reglas-old-school-training", element: <ReglasOldSchool /> },

      /* BOX */
      { path: "el-box", element: <ElBox /> },
      /*  { path: "galeria", element: <Galeria /> }, */

      /* LEGAL */
      { path: "aviso-legal", element: <AvisoLegal /> },
      { path: "politica-cookies", element: <PoliticaCookies /> },
      { path: "politica-privacidad", element: <PoliticaPrivacidad /> },

      // añade aquí más rutas: 'old-school', 'filosofia', 'box', 'precios', 'contacto', etc.
      { path: "*", element: <Home /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
