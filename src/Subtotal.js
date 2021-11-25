import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { subtotal } from "./reducer";

export default function Subtotal() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({state?.basket?.length} item(s)):{" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalStore={2}
        value={subtotal(state?.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}
