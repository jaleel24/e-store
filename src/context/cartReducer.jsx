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
            // Return a new state object with the updated cartItems immediately after adding.
           console.log("first")
            // return { ...state, cartItems: newCartItems };
            
          } else {
            // If the item is already in the cart, increment its quantity by 1.
            console.log("Second")
            newCartItems[index].quantity++;
           
            // Return a new state object with the updated cartItems immediately after incrementing.
           
          }
          return { ...state, cartItems: newCartItems };
      // For "REMOVE" action:
      case "REMOVE":
        // If the item is in the cart (index is greater than -1), remove it.
        if (index > -1) {
        //   newCartItems.splice(index, 1);
        newCartItems = state.cartItems.filter(x=>x.id !== action.payload.id)
          // Return a new state object with the updated cartItems.
          return { ...state, cartItems: newCartItems };
        }
        // If the item is not in the cart, return the current state.
        return state;
  
      // For "DECQTY" action:
      case "DECQTY":
        // If the item is in the cart (index is greater than -1), decrement its quantity by 1.
        if (index > -1) {
          newCartItems[index].quantity--;
          // Return a new state object with the updated cartItems.
          return { ...state, cartItems: newCartItems };
        }
        // If the item is not in the cart, return the current state.
        return state;
  
      // For "CLEAR" action:
      case "CLEAR":
        // Return a new state object with an empty cartItems array to clear the cart.
        return { ...state, cartItems: [] };
  
      // Default case:
      default:
        // Handle unknown action types by returning the current state.
        return state;
    }
  };
  