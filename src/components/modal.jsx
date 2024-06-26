import Button from "./buttonHome";
import { Link, useNavigate } from "react-router-dom";
import Teclado from "./teclado";
import { useState } from "react";

export default function Modal({ IsTrue, mostraModal }) {
  const [modalPlacaText, setModalPlacaText] = useState("");
  const [abrirTeclado, setAbrirTeclado] = useState(false);

  const navigate = useNavigate();

  function handleConfirmPlaca() {
    navigate(`/loja?placa=${modalPlacaText}`);
  }

  if (IsTrue) {
    return (
      <div className="  grid absolute top-0 w-[768px] h-full bg-fundo grid-rows-2">
        <div className="row-start-1 col-span-1 flex items-center justify-center">
          <p className="uppercase text-azul-ancora font-bold Nunito text-2xl">
            escolha como quer buscar
          </p>
        </div>
        <div className="row-start-2">
          <div className="grid grid-cols-2 ">
            <div className="place-items-center">
              <Button
                onClick={() => setAbrirTeclado((abrirTeclado) => !abrirTeclado)}
                texto="com placa"
              />
              <p className="text-azul-ancora px-14">
                A busca por placa assegura que as peças exibidas são específicas
                para o veículo.
              </p>
            </div>
            <div>
              <Link to="/loja">
                <Button texto="sem placa" className="bg-azul-ancora" />
              </Link>
              <p className="text-azul-ancora px-14">
                A busca sem placa oferece uma seleção ampla de peças, adaptável
                a diversos veículos.
              </p>
            </div>
            <div className="rows-start-2"></div>
          </div>
        </div>
        <div
          style={{
            display: abrirTeclado ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255,255,255)",
          }}
        >
          <div className="w-[472px] h-10 relative">
            <svg
              onClick={() => setAbrirTeclado(false)}
              className="absolute right-0 cursor-pointer"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
            </svg>
          </div>
          <p className="bg-gray-300 border-astronaut-blue-900 border-2 w-[472px] h-[40px] p-2 rounded mx-0">
            {modalPlacaText}
          </p>
          <Teclado
            setSearch={setModalPlacaText}
            handleConfirmPlaca={handleConfirmPlaca}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
