export const initialState = {
  basket: [],
};

// selector
export const subtotal = (cartArray) => {
  return cartArray.reduce((acc, curr) => acc + curr.price, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      const id = action.payload.id;
      const currentBasket = [...state?.basket];
      const newBasket = currentBasket.filter((item) => item.id !== id);
      return { ...state, basket: newBasket };

      // same implementation without id support
      // const index = state.basket.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // let newBasket = [...state.basket];
      // if (index >= 0) {
      //   newBasket.splice(index, 1);
      // } else {
      //   console.warn("item not found");
      // }
      // return { ...state, basket: newBasket };
    default:
      return state;
  }
};
export default reducer;
