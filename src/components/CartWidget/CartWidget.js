import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img className='cart' src={cart} alt='cart'/>
            <span>0</span>
        </div>
    )
}

export default CartWidget