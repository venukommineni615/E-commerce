import React, { useReducer } from 'react'
import CartContext from './CartContext'

const reducerfun=(state,action)=>{
    switch (action.type) {
        case 'ADD':
            const indexExisted=state.items.findIndex((item)=>{
                return item.title===action.item.title
            })
            console.log(indexExisted)
            if(indexExisted===-1){
                const newItem={...action.item,quantity:1}
                return {...state,items:[...state.items,newItem], amount:state.amount+1}
            }else{
                const updatedItems=[...state.items]
                updatedItems[indexExisted]={...action.item,quantity:updatedItems[indexExisted].quantity+1}
                return {items:[...updatedItems],amount:state.amount+1}
            }
    
        default:
            return state
    }
}
const CartProvider = (props) => {
    const initialState={items:[],amount:0}
    const [cartItems,dispatchCartItems]=useReducer(reducerfun,initialState)
    const addItem=(item)=>{
        dispatchCartItems({type:"ADD",item:item})
    }

  return (
    <CartContext.Provider value={{
        items:cartItems.items,
        amount:cartItems.amount,
        addItem:addItem
    }}
    
    >{props.children}</CartContext.Provider>
  )
}

export default CartProvider