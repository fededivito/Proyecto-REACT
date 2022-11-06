import cart from './assets/cart.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)
    
     return(
           <div className="CartWidget"> 
             <Link className='a' to='/cart'>  <img src={cart} className='CartImg' alt="carrito" /></Link>
      <div className='b'>
             <span className='numero' id='number'>{totalQuantity}</span>
           </div>
         </div>
     );

    //  const navigate = useNavigate()
    
    //  return (
    //      <div to='/cart' className='CartWidget' onClick={() => navigate('/cart')}> 
    //         <div className='a'>     
    //             <img className='CartImg' src={cart} alt='cart-widget'/>
    //         </div>
    //         <div className='b'>
    //             <span className='numero'>{totalQuantity}</span>
    //         </div>
    //     </div>
    //  )
}

export default CartWidget