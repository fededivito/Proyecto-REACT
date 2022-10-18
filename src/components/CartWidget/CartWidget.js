import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img className='cart' src={cart} alt='cart'/>
            {0}
        </div>
    )
}

export default CartWidget