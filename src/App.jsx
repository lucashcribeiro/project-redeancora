import React, { useState } from "react";
import Footer from "./components/footer";
import Logo from "./components/logo";
import Modal from "./components/modal";
import Image from "./components/image";
import ButtonHome from "./components/buttonHome";

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);

  function mostraModal() {
    setOpen(!open);
  }

  const mostraCarrinho = () => {
    setOpenCart(!openCart);
  };

  return (
    <section className="bg-bg-preto grid grid-rows-5 h-[100vh]  bg-cover container">
      <Logo />
      <Image />
      <ButtonHome onClick={mostraModal} texto={"toque aqui para começar"} />
      <Modal IsTrue={open} />
      <Footer />
    </section>
  );
}
