import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "./buttonHome";
import Input from "../components/input";

export default function Modal({ IsTrue }) {
  const [modalPlacaText, setModalPlacaText] = useState("");
  const [abrirTeclado, setAbrirTeclado] = useState(false);

  const navigate = useNavigate();

  return (
    IsTrue && (
      <>          
        <div className="absolute w-full h-full top-0 left-0 bg-fundo flex justify-center flex-col items-center z-20">
          <p className="uppercase text-azul-ancora font-bold Nunito text-2xl mb-12">
            Escolha como quer buscar
          </p>

          <div className="w-full flex gap-4">
            <div>
              <Button
                onClick={() => setAbrirTeclado(true)}
                texto="com placa"
              />
              <p className="text-azul-ancora px-14 text-center">
                A busca por placa assegura que as peças exibidas são específicas
                para o veículo.
              </p>
            </div>

            <div>
              <Link to="/loja">
                <Button texto="sem placa" className="bg-azul-ancora" />
              </Link>
              <p className="text-azul-ancora px-14 text-center">
                A busca sem placa oferece uma seleção ampla de peças, adaptável
                a diversos veículos.
              </p>
            </div>
          </div>

          {abrirTeclado && (
            <div className="absolute w-full h-full top-0 left-0 bg-fundo flex items-center justify-center">
              <div className="w-[472px] h-10 relative flex gap-2 items-center">
                <Input 
                  placeholder="Digite a placa do veículo"
                  value={modalPlacaText}
                  isFocus={true}
                  onChange={(value) => setModalPlacaText(value)}
                  onConfirm={(value) => {
                    if (value.length <= 6)
                      return;
                      navigate(`/loja?placa=${value}`);
                  }}
                  onTrigger={() => setAbrirTeclado(false)}
                />
              </div>
            </div>
          )}
        </div>
      </>
    )
  );
}
