import React from "react";
import { useCart } from "../../context/cart";

export default function CartHeader({ event, isTrue }) {
  let position = isTrue ? "bottom-56" : "bottom-0"; // Define a posição do header com base em isTrue (true/false) lógica no App.jsx

  const { calculateTotal } = useCart();
  return (
    <>
      <div
        className={`w-[100%] h-16 border bg-azul-ancora flex items-center p-4 cursor-pointer `} //variavel que define a position na tela
        onClick={event}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-11 h-11"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>

            <div className="text-3xl ml-4 text-white">Carrinho de compras</div>
          </div>
          <p className="text-lg uppercase text-white flex items-center justify-center h-[36px] mr-[60px]">
            <span>
              {new Intl.NumberFormat("pt-BR", {
                currency: "BRL",
                style: "currency",
              }).format(calculateTotal())}
            </span>
          </p>
        </div>

        <button className="absolute right-5 top-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
