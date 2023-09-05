import React from "react";
//Reducer will be used to modify the intial state
{/*
In React context, a reducer is a function that is used to manage and update the state stored within the context. It's a common pattern to use a reducer with the useReducer hook when you need to handle complex state logic or manage 
state transitions in a more predictable and centralized manner. 
*/}

export const cartReducer = (state, action)=>{
debugger

switch (action.type){
    
    case 'ADD':
        //     // cartItems is coming from cartContext line 7 const initialState = { cartItems: [] };
        const index = state.cartItems.findIndex( (x)=>{x.id === action.payload.id})
        //! if not found (index ===-1) then push the payload which we are
        //! trying to add, and add the quantity would be 1 in the cartItems
        if(index === -1){
            state.cartItems.push({...action.payload, quantity:1})
        }
        else{
            //! if already present then add the quantity by 1, e.g if it was there and quantity was 1 , so noq
            //! the quantity would be 2
            state.cartItems[index].quantity++;
        }
        return state;
    case 'REMOVE':
        return;
    default: 
        return state;
    }
} 