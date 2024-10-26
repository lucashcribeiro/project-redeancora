import Propaganda from "../../components/brand";
import SideMenu from "../../components/sideMenu";
import SearchBar from "../../components/searchBar";
import ButtonFilter from "../../components/buttonFilter";
import Produto from "../../components/produto";
// import Filter from "../../components/filter";
import { useEffect, useState } from "react";
import { fetchData } from "../../service/api";
// import Teclado from "../../components/teclado";
import Cart from "../../components/Cart/cart";
import { useSearchParams } from "react-router-dom";
import Partners from "../../components/partners";
import Fuse from "fuse.js";


import { Link } from "react-router-dom";

const Loja = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [activeInput, setActiveInput] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [carro, setCarro] = useState({});

  const params = useSearchParams();
  const placa = params[0].get("placa");

  /** 
    Utilizando a lib Fuse.js para nos auxiliar
    https://www.fusejs.io

    !IMPORTANT - toda vez que é re-renderizado a rota atual, é gerado o fuse novamente, isso não é legal mas funciona
    Para corrigir isso é preciso desestruturar a rota para componentes cuja as responsabilidades são separadas    
  */
  const fuse = new Fuse(products, {
    keys: [
      "marca",
      "nomeProduto",
      "informacoesComplementares",
      "codigoReferencia",
      "csa",
      "cna",
    ],
  });
  const filteredProducts =
    search.length > 0 ? fuse.search(search).map((i) => i.item) : [];

  const mostraCarrinho = () => {
    setOpenCart(!openCart);
  };

  async function loadData() {
    try {
      // Caso nao exista valor na placa ele vai retornar por padrao a placa gao3f58 # IF Ternario
      const {
        pageResult: { data, vehicle },
      } = await fetchData(placa || "eud4801");

      setCarro(vehicle);
      setProducts(data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-full relative">
        <div className="w-full">
          <Propaganda />
        </div>

        <div className="flex w-full h-full *:h-full">
          <aside className="w-[30%] flex flex-col">
            <Partners />

            <div style={{ flex: "1 1 0" }} className="h-full overflow-y-auto custom-scroll">
              <SideMenu />
            </div>
          </aside>

          <main className="w-[70%] flex flex-col">
            <header>
              <SearchBar
                activeInput={activeInput}
                setActiveInput={setActiveInput}
                search={search}
                setSearch={setSearch}
              />
              <Link to="/" >
              <ButtonFilter
                texto="Nova Busca"
                className="textInativeButton w-full m-2"
                onClick={() => {
                  setSearch("");
                  setActiveInput(true);
                }}
              ></ButtonFilter>
              </Link>

              <div className="my-3">
                <p className="font-bold">
                  Modelo: <span className="font-normal">{carro.modelo}</span>
                </p>
                <p className="font-bold">
                  Montadora:{" "}
                  <span className="font-normal">{carro.montadora}</span>
                </p>
              </div>
            </header>

            <div
              style={{ flex: "1 1 0" }}
              className="h-full overflow-y-scroll custom-scroll"
            >
              <div className="m-3 grid grid-cols-3 gap-3 pb-3">
                {products.length > 0 &&
                  (search.length > 0 ? filteredProducts : products).map(
                    (product) => <Produto key={product.id} {...product} />
                  )}
              </div>
            </div>
          </main>
        </div>

        <div className="w-full h-[80px] flex-shrink-0">
          {!activeInput && <Cart event={mostraCarrinho} isTrue={openCart} />}
        </div>
      </div>
    </>
  );
};

export default Loja;
