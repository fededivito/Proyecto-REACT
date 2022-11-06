import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products, setPage }) => {
    return(
            
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} id={prod.id}img={prod.img} name={prod.name} price={prod.price}/>)}
        </div>    
    )
}

export default ItemList