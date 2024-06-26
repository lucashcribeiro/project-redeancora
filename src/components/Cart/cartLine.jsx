import { useState } from "react";
import { useCart } from "../../context/cart";

export default function cartLine(props) {
  const { addToCart, decrementQuantity, removeFromCart } = useCart();
  const [imgLoading, setImgLoading] = useState(false);

  function formatarDinheiro(value) {
    const dinheiro = value.replace(/\D/g, "");

    return dinheiro / 100;
  }

  function imagemCarregada(value) {
    setImgLoading(true);
  }

  return (
    <>
      <div className="flex w-[98%] gap-8 mb-4">
        <div className="flex gap-4 items-center justify-center">
          <button
            onClick={() => decrementQuantity(props)}
            className="w-[30%] h-[100%] bg-white drop-shadow-2xl rounded shadow-sm flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <div className="w-[30%] text-center text-2xl ">{props.quantity}</div>
          <button
            onClick={() => {
              addToCart(props);
            }}
            className="w-[30%] h-[100%] border-black drop-shadow-2xl bg-azul-ancora rounded-md flex shadow-md items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <div className="text-2xl text-center border flex items-center gap-4 overflow-hidden w-full">
          <div className="flex items-center">
            <img
              className={`${
                imgLoading ? "w-[80px] h-[40px]" : "w-0 h-0"
              } object-contain`}
              src={props.image}
              alt={`${imgLoading ? "Imagem produto" : ""}`}
              onLoad={(value) => imagemCarregada(value)}
            />
            {!imgLoading && (
              <div className="w-[80px] h-[40px] bg-astronaut-blue-600"></div>
            )}

            <div className="w-[300px] py-2">
              <p className="text-[14px] text-start leading-[20px]">
                {props.name}
              </p>
              <p className="text-[12px] text-start">{props.price}</p>
            </div>
          </div>

          <div className="w-[100px] float-right">
            <p>
              {new Intl.NumberFormat("pt-br", {
                currency: "BRL",
                style: "currency",
              }).format(formatarDinheiro(props.price) * props.quantity)}
            </p>
          </div>
        </div>
        <button onClick={() => removeFromCart(props)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="red"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
