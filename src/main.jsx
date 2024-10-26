import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loja from "./routes/loja/loja";
import { CartProvider } from "./context/cart";
import { register } from "swiper/element/bundle";
import { Checkout } from "./routes/checkout";
import Thanks from "./routes/checkout/thanks";

import {
  KeyboardProvider,
  KeyboardContent,
  KeyboardTrigger,
} from "./components/keyboard";

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
  {
    path: "/thanks",
    element: <Thanks />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KeyboardProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>

      <KeyboardContent />
      <KeyboardTrigger />
    </KeyboardProvider>
  </React.StrictMode>
);

register();
