import { useEffect, useState } from "react"
import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail" 
import { useParams } from "react-router-dom"

// const product = {
//          id: '1',
//          name: "Funda premium",
//          price: 4500,
//          stock: 10,
//          description: 'funda tela premium',
//          img: 'https://i.ibb.co/2k1zDdx/funda-premium.webp'
//          }

const ItemDetailContainer = () => {
    const [products, setProducts] = useState({})
    // const { id, name, price, stock, description, img} = products
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(products => {
                setProducts(products)
            })
    }, [])
      
    
    return (
        <>
            <h1>detalle de producto</h1>
            <ItemDetail {...products} />  
        </>
    )
}

export default ItemDetailContainer