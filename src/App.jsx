import { useState } from "react";
import Modal from "./components/modal";
import logo from "../public/logo.png"

export default function App() {
  const [open, setOpen] = useState(false);

  function mostraModal() {
    setOpen(!open);
  }

  return (
    <>
      <div className="relative w-full h-full bg-[url('../public/app/app-bg.png')] bg-cover">
        <div className="relative z-10 p-12">
          <img
            src={logo}
            alt="brand"
            className="w-1/3 max-w-[260px] mb-7"
          />
          <p className="font-bold text-7xl text-white max-w-[50vw] leading-[1.2em]">
            A maior distribuidora de peças automotivas do Brasil!
          </p>
          <button
            className="bg-vermelho-ancora p-4 text-xl text-white font-bold rounded-xl px-6 mt-6 cursor-pointer w-[420px]"
            onClick={mostraModal}
          >
            Toque para começar
          </button>
        </div>

        <img
          src="../public/app/footer-bg.svg"
          alt="footer"
          className="absolute bottom-0 z-0"
        />
      </div>

      <Modal IsTrue={open} />
    </>
  );
}
