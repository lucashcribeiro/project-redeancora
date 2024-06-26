import { Link } from "react-router-dom";
import banner1 from "/public/banner/header-1.png";
import banner2 from "/public/banner/header-2.png";
import banner3 from "/public/banner/header-3.png";
import banner4 from "/public/banner/header-4.png";

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
              src={banner1}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to="/">
            <img
              src={banner2}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to="/">
            <img
              src={banner3}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to="/">
            <img
              src={banner4}
              alt="Logo da Rede ancora"
              className="h-full w-full"
            />
          </Link>
        </swiper-slide>
      </swiper-container>
    </div>
  );
}
