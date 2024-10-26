// src/routes/checkout/index.jsx
import React, { useState, useContext } from "react";
import Qrcode from "../../../public/qr-code.png"
import { Link } from "react-router-dom";
import Input from "../../components/input";

export const Checkout = () => {

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Finalizar Compra
          </h2>
          <div className="mb-4">
          <Input
              placeholder="Nome Completo"
              value={formData.nome}
              onChange={(value) => setFormData({ ...formData, nome: value})}
              onConfirm={() => handleSubmit()}
            />
            {/* <input
              type="text"
              name="nome"
              placeholder="Nome Completo"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={formData.nome}
              onChange={handleChange}
            /> */}
          </div>
          <div className="mb-4">
          <Input
              placeholder="Email"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value})}
              onConfirm={() => handleSubmit()}
            />
            {/* <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={formData.email}
              onChange={handleChange}
            /> */}
          </div>
          <Input
              placeholder="Telefone"
              value={formData.telefone}
              onChange={(value) => setFormData({ ...formData, telefone: value})}
              onConfirm={() => handleSubmit()}
            />
          {/* <div className="mb-6">
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div> */}
          <div className="mt-6 mb-4 flex flex-col items-center">
            <img
              src={Qrcode}
              alt="QR Code"
              className="w-32 h-48 mb-2"
            />
            <p className="text-center text-gray-600">
              Baixe nosso aplicativo e ganhe desconto na sua primeira compra!
            </p>
          </div>
          <Link to='/thanks'>
            <button
              type="submit"
              className="bg-azul-ancora hover:bg-astronaut-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Finalizar Compra
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
