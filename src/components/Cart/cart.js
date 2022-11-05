import React from "react"
import { CartContext }from '../../context/CartContext'
import { useContext } from "react"
// import ItemCart from "../ItemCart/ItemCart"


const Cart = () => {
const  { cart } = useContext(CartContext)

console.log(cart, 'llego?' ) 
    


return(
   <div>
    {
        cart.map(prod => (
            <div>{prod.name}</div>
        //    < ItemCart key= {prod.id} titulo={prod.titulo}/>
        ))
        
    }
    
   </div>
   
)

}


export default Cart
