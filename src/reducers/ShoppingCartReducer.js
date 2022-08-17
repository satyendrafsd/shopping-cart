const ShoppingCartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, carts: [...state.carts, action.payload] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.payload.id),
      };

    case "CHANGE_CART_QTY":
      console.log("qty", action.payload.qty);
      return {
        ...state,
        carts: state.carts.filter((cart) =>
          cart.id === action.payload.id
            ? (cart.qty = action.payload.qty)
            : cart.qty
        ),
      };

    default:
      return state;
  }
};

export default ShoppingCartReducer;
