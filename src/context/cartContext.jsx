
import React, { createContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";
// 1- create a context
 export const cartContext = createContext();

 // create an initial state of , basically initialize the initial state
const initialState = { cartItems: [] };

// Create a provider component and export it as well
const cartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer , initialState);
    const addProduct = (payload)=>{
        //payload is an object which has id, title and price of the product
        dispatch({type:'ADD', payload})
        debugger;
    }
// context values will be available to the whole app since we are providing 
// to the cartContext a value prop which will be avaialble in all children  which would 
// be the whole app
    const contextValues = {
        addProduct,
        ...state,
    }
  return (
    <>
      <cartContext.Provider value={contextValues}>
        {/* children is basically the app */}
        {children} 
      </cartContext.Provider>
    </>
  );
};

export default cartContextProvider ;
