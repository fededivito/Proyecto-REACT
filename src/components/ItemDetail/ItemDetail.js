import ItemCount from '../ItemCount/ItemCount'
import { useContext} from 'react'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ id, name, price, stock, description, img, category}) => {

    const {addItem} = useContext(CartContext) 

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id,name,price,quantity
        }
    addItem(productToAdd)  
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