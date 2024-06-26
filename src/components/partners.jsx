import { Link } from "react-router-dom";

import bosch from "/public/brands/bosch_1x.png";
import car from "/public/brands/car_1x.png";
import cofap from "/public/brands/cofap_1x.png";
import continental from "/public/brands/continental_1x.png";
import controil from "/public/brands/controil_1x.png";
import loctite from "/public/brands/loctite_1x.png";
import magneti from "/public/brands/magneti_1x.png";
import monroe from "/public/brands/monroe_1x.png";
import truck from "/public/brands/truck_1x.png";

export default function Propaganda() {
  return (
    <div className="col-start-1 col-span-4  items-center">
      <swiper-container
        slides-per-view="1"
        space-between="20"
        scrollbar-clickable="true"
        mousewheel-invert="true"
        loop="true"
        autoplay="true"
      >
        <swiper-slide>
          <Link to="/">
            <img
              src={bosch}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to="/">
            <img
              src={car}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to="/">
            <img
              src={cofap}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to="/">
            <img
              src={continental}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to="/">
            <img
              src={controil}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to="/">
            <img
              src={loctite}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to="/">
            <img
              src={magneti}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to="/">
            <img
              src={monroe}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to="/">
            <img
              src={truck}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
      </swiper-container>
    </div>
  );
}
