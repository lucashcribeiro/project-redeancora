import CartHeader from "./cartHeader";
import CartBg from "./cartBg";
import CartLine from "./cartLine";
import CartTrigger from "./cartTrigger";
import { useCart } from "../../context/cart";
import { Link } from "react-router-dom";

export default function Cart({ event, isTrue }) {
  const { cart } = useCart();

  return (
    <>
      <div className="w-full absolute bottom-0 z-[50]">
        <CartHeader event={event} isTrue={isTrue} />
        <CartBg isTrue={isTrue}>
          <div className="pt-4">
            {cart.map((item) => (
              <CartLine key={item.id} {...item} />
            ))}
            <div className="flex justify-center items-center">
              <Link to="/checkout">
                <button
                  type="submit"
                  className="text-white bg-azul-ancora hover:bg-astronaut-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4">
                  Finalizar Compra
                </button>
              </Link>
            </div>
          </div>
        </CartBg>
      </div>

      {isTrue && <CartTrigger event={event} />}
    </>
  );
}
