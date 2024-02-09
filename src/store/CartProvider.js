import React, { useContext, useEffect, useReducer } from 'react'
import CartContext from './CartContext'
import { AuthContext } from './AuthProvider'

const reducerfun=(state,action)=>{
    switch (action.type) {
        case 'ADD':
            const indexExisted=state.items.findIndex((item)=>{
                return item.title===action.item.title
            })
           // console.log(indexExisted)
            if(indexExisted===-1){
                console.log("initial",action.item.quantity)
                const newItem={...action.item,quantity:action.item.quantity}
                return {...state,items:[...state.items,newItem], amount:state.amount+action.item.quantity}
            }else{
                console.log("update")
                const updatedItems=[...state.items]
                updatedItems[indexExisted]={...action.item,quantity:updatedItems[indexExisted].quantity+1}
                return {items:[...updatedItems],amount:state.amount+1}
            }
    
        default:
            return state
    }
}
const CartProvider = (props) => {
    const authCtx=useContext(AuthContext)
    useEffect(()=>{

        async function fetchApi(){
          try{ const res=await fetch(`https://crudcrud.com/api/5c60ec38c2754f399cfd612dfef77af6/${authCtx.email}`,{method:"GET"})
            const data=await res.json()
            for (let i in data){
                dispatchCartItems({type:"ADD",item:{...data[i],id:data[i]._id}})
            }
            console.log("get", data)}catch(error){console.log(error)}
        }
        
        fetchApi()
    },[authCtx.email])
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