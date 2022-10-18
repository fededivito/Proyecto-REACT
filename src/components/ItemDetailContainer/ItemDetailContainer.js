import { useEffect, useState } from "react"
import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail" 
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(response => {
                setProducts(response)
            }).finally(() =>{
                setLoading(false)
            })
    }, [productId])
      
    if(loading) {
        return <h1>Cargando...</h1>
    }
    return (
        <div>
            <h1>detalle de producto</h1>
            <ItemDetail {...products} />  
        </div>
    )
}

export default ItemDetailContainer