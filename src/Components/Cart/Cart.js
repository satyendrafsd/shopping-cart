import "./Cart.css";
import { useEffect, useState } from "react";

function Cart({ state, dispatch }) {
  const { carts } = state;
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(
      carts.reduce(
        (accu, prev) => accu + prev.qty * Number.parseFloat(prev.price),
        0
      )
    );
  }, [carts]);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };

  return (
    <div className="cart-container">
      <h1 style={{ textAlign: "center" }}>Cart</h1>

      {carts.length > 0 ? (
        <>
          <h2>Subtotal = ${subtotal}</h2>
          {carts.map((cart) => (
            <div className="cart" key={cart.id}>
              <img src={cart.thumbnail} alt="product" />
              <div>
                <p>{cart.title}</p>
                <p>
                  <b>{cart.price}</b>
                </p>
              </div>
              <div className="btn-container">
                <button onClick={() => changeQty(cart.id, cart.qty - 1)}>
                  -
                </button>
                <span style={{ padding: "8px" }}>{cart.qty}</span>
                <button onClick={() => changeQty(cart.id, cart.qty + 1)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>Cart is Empty</p>
      )}
    </div>
  );
}
export default Cart;
