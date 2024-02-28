import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./src/pages/HomePage";
import { ProductsPage } from "./src/pages/ProductsPage";
import { AboutPage } from "./src/pages/AboutPage";
import { ContactPage } from "./src/pages/ContactPage";
import { RegisterPage } from "./src/pages/RegisterPage";
import App from "./src/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            index: true,
            element: <HomePage/>

        },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);
