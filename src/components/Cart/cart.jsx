import React from "react";
import CartHeader from "./cartHeader";
import CartBg from "./cartBg";
import CartLine from "./cartLine";
import { useCart } from "../../context/cart";
import { Link } from "react-router-dom";

export default function Cart({ event, isTrue }) {
  const { cart } = useCart();
  const headerPosition = isTrue ? "h-[35%]" : "h-[8%]";

  return (
    <>
      <div
        className={`${headerPosition} w-[100%] border-2 absolute left-1/2 bottom-0 transform -translate-x-1/2 `}
      >
        <CartHeader event={event} isTrue={isTrue} />
        <CartBg isTrue={isTrue}>
          {cart.map((item) => (
            <CartLine key={item.id} {...item} />
          ))}
          <div className="flex justify-center items-center">
            <Link to="/checkout">
              <button
                type="submit"
                class="text-white bg-azul-ancora hover:bg-astronaut-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Finalizar Compra
              </button>
            </Link>
          </div>
        </CartBg>
      </div>
    </>
  );
}
