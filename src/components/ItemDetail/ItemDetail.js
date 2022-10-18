import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../asyncMock'
const ItemDetail = ({ id, name, price, stock, description, img}) => {
    //     const [goToCart, setGoToCart] = useState (false)
    const handleOnAdd = (count) => {
        const productToAdd = {
            id,name,price,stock
        }
    }

    return (
    <article> 
        <header>
            <h2>
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} />
        </picture>
        <section>
            <p>
                Description: {description}
            </p>
            <p>
                Price: {price}
            </p>
        </section>
        <footer>
            <ItemCount onAdd={handleOnAdd} stock={stock}/>
        </footer>

    </article>
    )
}
export default ItemDetail