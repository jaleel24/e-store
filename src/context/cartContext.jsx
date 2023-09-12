
import React, { createContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";
// 1- create a context
 export const cartContext = createContext();
//! get the item from sessionStorage if it is there then parse it into an object and assign it to Storage otherwise assign an empty array as the initial value
 const Storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):[];
 // create an initial state of , basically initialize the initial state
const initialState = { cartItems: Storage };

// Create a provider component and export it as well
const cartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer , initialState);
    
// all the functions or cases defined in reducer we will dispatch it from here so we need functions to dispatch it

// 1-
    const addProduct = (payload)=>{
        //payload is an object which has id, title and price of the product
        dispatch({type:'ADD', payload})
        //  debugger;
        return state.cartItems;
    }
       
// 2-
    const removeProduct= (payload)=>{
    dispatch({type:'REMOVE', payload});
    return state.cartItems;
 
    }
// 3-
const  increaseQuantity= (payload)=>{
    dispatch({type:'INCQTY', payload});
    return state.cartItems;
    }
// 4-
const  decreaseQuantity= (payload)=>{
    dispatch({type:'DECQTY', payload});
    return state.cartItems;
    }
// 5-
const  clearBasket= (payload)=>{
   
    dispatch({type:'CLEAR', payload:undefined});
    return state.cartItems;
    
    }

    const getItems = ()=>{
        return state.cartItems;
    }

// context values will be available to the whole app since we are providing 
// to the cartContext a value prop which will be avaialble in all children  which would 
// be the whole app
    const contextValues = {
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearBasket,
        getItems,
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
