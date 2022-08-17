import "./Product.css";

function Product({ state, dispatch }) {
  const { products, carts } = state;
  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.thumbnail} alt="Product" className="product-img" />
          <div className="cart-details">
            <span>{product.title}</span>
            <span>
              <b>${product.price}</b>
            </span>
          </div>

          {carts.some((cp) => cp.id === product.id) ? (
            <button className="btn-danger"
            onClick={()=>dispatch({
                type:'REMOVE_FROM_CART',
                payload:{id:product.id}
            })}
            >Remove From Cart</button>
          ) : (
            <button
              className="btn-primary"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: 1,
                    thumbnail: product.thumbnail,
                  },
                })
              }
            >
              Add To Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
export default Product;
