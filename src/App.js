import "./App.css";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Product/Product";
import axios from "axios";
import { useEffect, useReducer } from "react";
import ShoppingCartReducer from "./reducers/ShoppingCartReducer";

function App() {
  const [state, dispatch] = useReducer(ShoppingCartReducer, {
    products: [],
    carts: [],
  });

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({ type: "ADD_PRODUCTS", payload: data.products });
  };

  console.log(state);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Product state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
