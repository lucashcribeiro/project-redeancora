import { useContext, useRef, useEffect } from "react";
import { KeyboardContext } from "./keyboard";

const Input = ({placeholder, value, type, isFocus, onChange, onConfirm, onTrigger }) => {
  const {
    setKeyboardIsOpen,
    handlerInputState,
    handlerInputConfirm,
    handlerInputTrigger,
    handlerKeyboardValue
  } = useContext(KeyboardContext);
  const ref = useRef(null);

  const handlerValue = (value) => {
    if (onChange) onChange(value);
  };

  useEffect(() => {
    if (isFocus && ref) ref.current.focus();
  }, [isFocus]);

  return (
    <input
      placeholder={placeholder}
      ref={ref}
      value={value || ""}
      type={type || "text"}
      onFocus={() => {
        setKeyboardIsOpen(true);
        handlerInputState(handlerValue);
        handlerKeyboardValue(value);

        if (onConfirm) handlerInputConfirm(onConfirm);
        if (onTrigger) handlerInputTrigger(onTrigger);
      }}
      className="border-noen p-3 rounded-md border w-full z-[49] relative mt-1"
    />
  );
};

export default Input;
