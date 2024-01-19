//state is the  current state before the update
// action is what we are trying to implement

const reducer = (state, action) => {
    if (action.type === "CLEAR_CART") {
      return { ...state, cart: [] };
    }
  
    if (action.type === "REMOVE") {
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.load),
      };
    }
  
    if (action.type === "INCREASE") {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.load) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    }
  
    if (action.type === "DECREASE") {
      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.load) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, cart: tempCart };
    }
  
    if (action.type === "GET_TOTALS") {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTOTAL = price * amount;
  
          cartTotal.total += itemTOTAL;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
  
      return { ...state, total, amount };
    }
  
    if (action.type === "LOADING") {
      return { ...state, loading: true };
    }
  
    if (action.type === "DISPLAY_iTEM") {
      return { ...state, cart: action.load, loading: false };
    }
  
    return state;
  };
  
  export default reducer;
  