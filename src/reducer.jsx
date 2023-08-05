export const initialState = {
  basket: [], // Initial state for basket, an empty array
  user: null, // Initial state for user, null as there is no user signed in
};

// Selector function to calculate the total amount of items in the basket
export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

// Reducer function for handling state changes based on dispatched actions
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Adding an item to the basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      // Removing an item from the basket based on its id
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      // Setting the user state when a user signs in or signs out
      return {
        ...state,
        user: action.user,
      };
    default:
      return state; // Default case, return the state as it is
  }
};

export default reducer;
