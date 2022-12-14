import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext} from 'react'
import { CartContext } from '../../Context/CartContext' 

const ItemDetail = ({ id, name, price, stock, description, img, category}) => {

    const {addItem, getProductQuantity} = useContext(CartContext) 

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id,name,price,quantity
        } 
        addItem (productToAdd)
    }
    const quantityAdded = getProductQuantity(id)

    return (
    <article className="CardItem"> 
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                category: {category}
            </p>
            <p className="Info">
                Description: {description}
            </p>
            <p className="Info">
                Price: {price}
            </p>
        </section>
        <footer>
            { stock !==0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />: <p>No hay stock</p>} 
        </footer>

    </article>
    )
}
export default ItemDetail