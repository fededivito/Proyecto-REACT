import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from "../asyncMock"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [ loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const asynFunction = categoryId ? getProductsByCategory : getProducts
        
        asynFunction(categoryId)
            .then((response) => {
                setProducts(response);
            })
            .finally(() => {
                setLoading(false)
            });
    }, [categoryId])

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <div>
            <h1>Listado de productos</h1>
            <ItemList products={products}/>
        </div>         
    )
}

export default ItemListContainer