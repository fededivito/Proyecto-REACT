import { useEffect, useState } from "react"
import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail" 
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [products, setProducts] = useState({})
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