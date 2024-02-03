import { createContext } from "react"
const CartContext=createContext({
    items:[],
    amount:0,
    addItem:()=>{}
})
export default CartContext