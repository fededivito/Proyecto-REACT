
// import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, price, stock, description, img}) => {
    
    const [goToCart, setGoToCart] = useState (false)

        const onAdd = (count) => {
            console.log ("Compraste", (count), "unidades");
            setGoToCart(true);
        }  
    
    return (
        <div>
            <img src={img} alt={name} style={{width: 100}} />
            <h2>{name}</h2>
            <p>price: ${price}</p>
            <p>description: {description}</p>
            { goToCart
                ? <Link to='/cart'>Terminar Compra</Link>

                :<ItemCount onAdd={onAdd}/>
            }
        </div>
    )
}

export default ItemDetail