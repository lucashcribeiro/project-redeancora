import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loja from "./routes/loja/loja";
import { CartProvider } from "./context/cart";
import { register } from "swiper/element/bundle";
import { Checkout } from "./routes/checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/loja",
    element: <Loja />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

register();
