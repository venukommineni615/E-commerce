import React, {  useReducer,  } from 'react'
import CartContext from './CartContext'
// import { AuthContext } from './AuthProvider'
// import {useFetch} from '../custom-hooks/useFetch'

const reducerfun=(state,action)=>{
    switch (action.type) {
        case 'ADD':
            const indexExisted=state.items.findIndex((item)=>{
                return item.title===action.item.title
            })
        //    console.log('add func')
            if(indexExisted===-1){
                console.log("initial",action.item.quantity)
                const newItem={...action.item,quantity:action.item.quantity}
                return {...state,items:[...state.items,newItem], amount:state.amount+action.item.quantity}
            }else{
               
                const updatedItems=[...state.items]
                updatedItems[indexExisted]={...action.item,quantity:updatedItems[indexExisted].quantity+1}
                return {items:[...updatedItems],amount:state.amount+1}
            }
        case 'DELETEALL':
            return {items:[],amount:0}
    
        default:
            return state
    }
}
const CartProvider = (props) => {
    
    const initialState={items:[],amount:0}
    const [cartItems,dispatchCartItems]=useReducer(reducerfun,initialState)
    // const authCtx=useContext(AuthContext)
   
    const addItem=(item)=>{
        console.log("addItem is getting called")
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