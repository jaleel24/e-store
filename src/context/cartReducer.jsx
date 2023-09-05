import React from "react";
//Reducer will be used to modify the intial state
{/*
In React context, a reducer is a function that is used to manage and update the state stored within the context. It's a common pattern to use a reducer with the useReducer hook when you need to handle complex state logic or manage 
state transitions in a more predictable and centralized manner. 
*/}

export const cartReducer = (state, action)=>{
debugger

switch( action.type){

    case'ADD':
    // cartItems is coming from cartContext line 7 const initialState = { cartItems: [] };
        const index = state.cartItems.findIndex(x=> x.id === action.payload.id);
        if(index === -1){
            state.cartItems.push({...action.payload, quantity:1})
        }
        else{
            state.cartItems[index].quantity++;
        }
        return state;
    case 'REMOVE':

    default:
        return state;

}

} 