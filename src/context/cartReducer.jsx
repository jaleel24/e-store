const Storage = (cartItems) => {
  // Use quotes around 'first' if it's a string
  console.log('first');
  localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : [])); //will keep the data locally
  // sessionStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : [])); // will keep the data as long as the session is running meaning same tab if we open a new tab , data will be gone
}

// Define the cartReducer function, which takes two arguments: state and action.
export const cartReducer = (state, action) => {
 
  // Find the index of the item with a matching ID in the cartItems array.
  // If action.payload is undefined, index will be -1.
  const index = state.cartItems.findIndex((x) => x.id === action.payload?.id);

  // Create a shallow copy of the cartItems array.
  let newCartItems = [...state.cartItems];

  // Start a switch statement to handle different action types.
  switch (action.type) {
    // For "ADD" and "INCQTY" actions:
    case "ADD":
    case "INCQTY":
      // If the item is not in the cart (index is -1), add it with a quantity of 1.
      if (index === -1) {
        newCartItems.push({ ...action.payload, quantity: 1 });
      } else {
        // If the item is already in the cart, increment its quantity by 1.
        newCartItems[index].quantity++;
      }
      Storage(newCartItems); // Call the storage function here to save the updated cart
      return { ...state, cartItems: newCartItems };

    // For "REMOVE" action:
    case "REMOVE":
      // If the item is in the cart (index is greater than -1), remove it.
      if (index > -1) {
        newCartItems = state.cartItems.filter(x => x.id !== action.payload.id);
        Storage(newCartItems); // Call the storage function here to save the updated cart
        return { ...state, cartItems: newCartItems };
      }
      // If the item is not in the cart, return the current state.
      return state;

    // For "DECQTY" action:
    case "DECQTY":
      // If the item is in the cart (index is greater than -1), decrement its quantity by 1.
      if (index > -1) {
        if (newCartItems[index].quantity > 1) {
          newCartItems[index].quantity--;
        }
        Storage(newCartItems); // Call the storage function here to save the updated cart
        return { ...state, cartItems: newCartItems };
      }
      // If the item is not in the cart, return the current state.
      return state;

    // For "CLEAR" action:
    case "CLEAR":
      // Return a new state object with an empty cartItems array to clear the cart.
      newCartItems = [];
      Storage(newCartItems); // Call the storage function here to save the updated cart
      return { ...state, cartItems: newCartItems };

    // Default case:
    default:
      // Handle unknown action types by returning the current state.
      return state;
  }
};
