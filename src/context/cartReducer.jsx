// import React from "react";
// //Reducer will be used to modify the intial state
// {
//   /*
// In React context, a reducer is a function that is used to manage and update the state stored within the context. It's a common pattern to use a reducer with the useReducer hook when you need to handle complex state logic or manage 
// state transitions in a more predictable and centralized manner. 
// */
// }

// export const cartReducer = (state, action) => {
//   let index = -1;
//   if (action.payload) {
//     index = state.cartItems.findIndex((x) => {
//       x.id === action.payload.id;
//     });
// }
//     let newItems = [...state.cartItems];
//   switch (action.type) {
//     case "ADD":
//     case "INCQTY":
//       //     // cartItems is coming from cartContext line 7 const initialState = { cartItems: [] };
//       //! if not found (index ===-1) then push the payload which we are
//       //! trying to add, and add the quantity would be 1 in the cartItems
//       if (index === -1) {
//          state.cartItems.push({ ...action.payload, quantity: 1 });
//         // newItems.push({ ...action.payload, quantity: 1 }); // GOOD WAY
//         // debugger
//       } else {
//         //! if already present then add the quantity by 1, e.g if it was there and quantity was 1 , so noq
//         //! the quantity would be 2
//         state.cartItems[index].quantity++;
//       }
//       break;
//     case "REMOVE":
//       if (index > -1) {
//         console.log("hey there 2")
//         //! splice is used to remove item so, remove item at index and remove just 1
//         state.cartItems.splice(index, 1);
       
//       }
//       break;
//     case 'DECQTY':
//         if(index > -1){
//             state.cartItems[index].quantity--;
//         }
//     // case 'INCQTY':
//     //     if (index > -1) {
//     //         state.cartItems[index].quantity++;
//     //       }
//     case "CLEAR":
//         state.cartItems = [];   
//         break;
//     default:
      
//   }
  
//   return state;

// };

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
            return { ...state, cartItems: newCartItems };
          } else {
            // If the item is already in the cart, increment its quantity by 1.
            newCartItems[index].quantity++;
            // Return a new state object with the updated cartItems immediately after incrementing.
            return { ...state, cartItems: newCartItems };
          }
  
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
  