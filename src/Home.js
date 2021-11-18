import React from "react";
import "./Home.css";
import "./Product.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
            price={29.99}
          />
          <Product />
          <Product />
        </div>
        <div className="home__row">{/*  */}</div>
      </div>
    </div>
  );
}
