import React from "react";
import "./Home.css";
import "./Product.css";
import Header from "./Header";
import Product from "./Product";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            className="home__image"
          />
          <div className="home__row">
            <Product
              title="Duracell - CopperTop AA Alkaline Batteries - long lasting, all-purpose Double A battery for household and business - 24 Count
              Single Use · 24 Count (Pack of 1)"
              image="https://m.media-amazon.com/images/I/71634W89t5L._AC_UL320_.jpg"
              rating={3}
              price={29.99}
            />
            <Product
              title="The lean startup"
              image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
              rating={5}
              price={2.0}
            />
            <Product
              title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Roku Voice Remote with TV"
              image="https://m.media-amazon.com/images/I/71gBY-gGBwL._AC_UL320_.jpg"
              rating={2}
              price={25.99}
            />
          </div>
          <div className="home__row">
            <Product
              title="Fire TV Stick 4K streaming device with Alexa Voice Remote (includes TV controls) | Dolby Vision"
              image="https://m.media-amazon.com/images/I/51CgKGfMelL._AC_UL320_.jpg"
              rating={4}
              price={20.99}
            />
            <Product
              title="Chuckit! Ultra Ball"
              image="https://m.media-amazon.com/images/I/81an+TQ0ouL._AC_SY300_SX300_.jpg"
              rating={5}
              price={29.99}
            />
            <Product
              title="Apple TV"
              image="https://images-na.ssl-images-amazon.com/images/I/31ClCXhTfLL.jpg"
              rating={4}
              price={8.99}
            />
          </div>
          <div className="home__row">{/*  */}</div>
        </div>
      </div>
    </>
  );
}
