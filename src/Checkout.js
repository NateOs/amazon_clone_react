import React from "react";
import "./checkout.css";
import Header from "./Header";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

export default function Checkout() {
  const [state, dispatch] = useStateValue();
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            {state?.basket?.map((item) => (
              <CheckoutProduct
                price={item.price}
                title={item.title}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}
