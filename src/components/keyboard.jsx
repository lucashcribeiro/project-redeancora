import { createContext, useContext, useState, useRef } from "react";

export const KeyboardContext = createContext({});

export const KeyboardProvider = ({ children }) => {
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  const [keyboardValue, setKeyboardValue] = useState("");

  const inputState = useRef(null);
  const inputConfirm = useRef(null);
  const inputTrigger = useRef(null);

  const handlerKeyboardValue = (string) => {
    setKeyboardValue(string);
    if (inputState.current) inputState.current(string);
  };

  const handlerInputState = (state) => {
    setKeyboardValue("");
    inputState.current = state;
  };

  const handlerInputConfirm = (onConfirm) => {
    inputConfirm.current = onConfirm;
  };
  const handlerInputTrigger = (onTrigger) => {
    inputTrigger.current = onTrigger;
  };

  return (
    <KeyboardContext.Provider
      value={{
        keyboardIsOpen,
        setKeyboardIsOpen,
        keyboardValue,
        handlerKeyboardValue,
        handlerInputState,
        handlerInputConfirm,
        inputConfirm: inputConfirm.current,
        handlerInputTrigger,
        inputTrigger: inputTrigger.current,
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};

export const KeyboardContent = () => {
  const {
    keyboardIsOpen,
    setKeyboardIsOpen,
    handlerKeyboardValue,
    keyboardValue,
    inputConfirm,
  } = useContext(KeyboardContext);

  const addLetras = (letra) => {
    handlerKeyboardValue(keyboardValue + letra);
  };

  const limpar = () => {
    handlerKeyboardValue("");
  };

  const Keys = ({ string }) => {
    return (
      <div className="flex gap-2 justify-center">
        {string.split("").map((letra) => (
          <button
            id="valid"
            key={letra}
            onClick={() => addLetras(letra)}
            className="w-[70px] h-[70px] text-base bg-astronaut-blue-950 hover:bg-astronaut-blue-800  text-astronaut-blue-20 rounded"
          >
            {letra}
          </button>
        ))}
      </div>
    );
  };

  return (
    keyboardIsOpen && (
      <div className="absolute bottom-0 w-full left-[50%] translate-x-[-50%] z-50 bg-fundo">
        <div className="flex flex-col items-center container relative">
          {/* Keys */}
          <div className="flex flex-col gap-2">
            <Keys string="1234567890" />
            <Keys string="qwertyuiop" />
            <Keys string="asdfghjkl@" />
            <Keys string="zxcvbnm-." />

            <div className="flex mt-5 mb-5 gap-x-5">
              <button
                onClick={() => {
                  setKeyboardIsOpen(false);
                  if (inputConfirm) inputConfirm(keyboardValue);
                }}
                className="p-2 text-lg bg-green-500 hover:bg-green-600 text-astronaut-blue-20 rounded"
              >
                Confirmar
              </button>

              <button
                onClick={() => addLetras(" ")}
                className="w-full h-[65px] text-base bg-gray-300 hover:bg-gray-400 text-black rounded"
              ></button>

              <button
                onClick={() => {
                  handlerKeyboardValue(
                    keyboardValue.substr(0, keyboardValue.length - 1)
                  );
                }}
                className="p-2 text-base bg-red-500 hover:bg-red-600 text-astronaut-blue-20 rounded"
              >
                Apagar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export function KeyboardTrigger() {
  const { keyboardIsOpen, setKeyboardIsOpen, inputTrigger } =
    useContext(KeyboardContext);

  const handlerTrigger = () => {
    setKeyboardIsOpen(false);

    if (inputTrigger) inputTrigger();
  };

  return (
    keyboardIsOpen && (
      <div
        className="trigger absolute z-[49] w-full h-full top-0 left-0"
        onClick={() => handlerTrigger()}
      ></div>
    )
  );
}
