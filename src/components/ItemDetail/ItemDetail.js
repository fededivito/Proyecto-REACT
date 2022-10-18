import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../asyncMock'

const ItemDetail = ({ id, name, price, stock, description, img, category, setCart}) => {

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id,name,price,stock,category
        }

    setCart(productToAdd)    
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
                category: {category}
            </p>
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