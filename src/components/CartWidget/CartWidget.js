import cart from './assets/cart.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)
    
    const navigate = useNavigate()
    
    return (
        <button to='cart' className='CartWidget' onClick={() => navigate('/cart')}> 
            <img className='CartImg' src={cart} alt='cart-widget'/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget