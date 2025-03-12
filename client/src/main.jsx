import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Register from "./pages/register.jsx";
import Home from "./pages/home.jsx";
import App from "./App.jsx";
import Admin from "./pages/admin.jsx";
import Author from "./pages/author.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "admin", // ✅ Now it's a child of "/home"
        element: <Admin />,
      },
      {
        path: "author", // ✅ Now it's a child of "/home"
        element: <Author />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
    <ToastContainer /> {/*toast is container for notifcaiton */}
  </StrictMode>
);
