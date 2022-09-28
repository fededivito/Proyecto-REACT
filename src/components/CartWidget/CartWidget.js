import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img className='cart' src={cart} alt='cart'/>
            10
        </div>
    )
}

export default CartWidget