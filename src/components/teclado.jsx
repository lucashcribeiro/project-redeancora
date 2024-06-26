import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

export default function Teclado(props) {
  const [inputTexto, setInputText] = useState("");
  const tecladoRef = useRef(null);

  const addLetras = (letra) => {
    setInputText(inputTexto + letra);
  };

  const limpar = () => {
    setInputText("");
    props.setSearch("");
  };

  const confirmar = () => {
    if (props.setActiveInput) {
      props.setActiveInput(false);
    }
    if (props.setSearch) {
      props.setSearch(inputTexto);
    }

    if (props.handleConfirmPlaca) {
      props.handleConfirmPlaca();
    }
  };

  useEffect(() => {
    props.setSearch(inputTexto);
  }, [inputTexto]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tecladoRef.current && !tecladoRef.current.contains(event.target)) {
        props.setActiveInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [tecladoRef, props]);

  return (
    <div ref={tecladoRef} className="flex flex-col items-center container">
      <div className="grid grid-cols-10 gap-2 mt-3 justify-items-center">
        {[...Array(10)].map((_, index_numero) => {
          const numero = index_numero;
          return (
            <button
              key={numero}
              onClick={() => addLetras(numero.toString())}
              className="w-10 h-10 text-base bg-astronaut-blue-950 hover:bg-astronaut-blue-800  text-astronaut-blue-20 rounded"
            >
              {numero}
            </button>
          );
        })}

        {"QWERTYUIOPASDFGHJKLÇZXCVBNM-".split("").map((letra) => (
          <button
            key={letra}
            onClick={() => addLetras(letra)}
            className="w-10 h-10 text-base bg-astronaut-blue-950 hover:bg-astronaut-blue-800  text-astronaut-blue-20 rounded"
          >
            {letra}
          </button>
        ))}
      </div>
      <div className="flex mt-5 mb-5 gap-x-5">
        <button
          onClick={limpar}
          className="p-2 w-[100px] text-base bg-red-500 hover:bg-red-600 text-astronaut-blue-20 rounded"
        >
          Limpar
        </button>
        <button
          onClick={() => addLetras(" ")}
          className="w-96 h-10 text-base bg-gray-300 hover:bg-gray-400 text-black rounded"
        ></button>
        <button
          onClick={() => confirmar()}
          className="p-2 w-[100px] text-base bg-green-500 hover:bg-green-600 text-astronaut-blue-20 rounded"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}

Teclado.propTypes = {
  setSearch: PropTypes.func,
  setActiveInput: PropTypes.func,
  setModalPlacaText: PropTypes?.func,
  handleConfirmPlaca: PropTypes?.func,
};
