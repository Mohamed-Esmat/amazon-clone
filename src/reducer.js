export const initialState = {
  basket: [],
  product: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) => {
  return (
    // basket?.reduce((acc, current)=> acc + current.price , 0)
    basket?.reduce((ac, current) => ac + current.price, 0).toFixed(3)
  );
};

const reducer = (state, action) => {
  // console.log(action.item);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'PRODUCT_DETAILS':
      return {
        ...state,
        product: [action.item],
      };
    case 'REMOVE_FROM_BASKET':
        const index = state.basket.findIndex((basketItem)=> basketItem.id ===action.id);
        let newBasket = [...state.basket];
        if(index >= 0){
            newBasket.splice(index , 1)
        }else {
            console.warn(`cant remove product (id: ${action.id}) as its not in basket`)
        }
        return {
            ...state,
            basket: newBasket
        }
    //   return {
    //     ...state,
    //     basket: state.basket.filter((item) => item.id !== action.id),
    //   };
    default:
      return state;
  }
};

export default reducer;
