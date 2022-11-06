    import { useContext } from 'react'
    import { CartContext } from '../../context/CartContext'

 const Cart = () => {

     const { cart, removeItem, total, clearCart } = useContext(CartContext)

     return(
         <div>
             <h1>CART</h1>
             {
                 cart.map(prod => (
                     <div>
                         {prod.name} - cantiodad: {prod.quantity}
                         <button onClick={() => removeItem(prod.id)}>remover</button>
                     </div>
                 ))
             }

             <div>
                 Precio total: {total}
             </div>

             <button onClick={() => clearCart()}>Limpiar carrito</button>
         </div>
     )
 }

 export default Cart