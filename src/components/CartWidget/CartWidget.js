import cart from './assets/cart.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)
    
    const quantity = getQuantity()
    
    return (
        <div>
            <img className='cart' src={cart} alt='cart'/>
            {getQuantity}
        </div>
    )
}

export default CartWidget