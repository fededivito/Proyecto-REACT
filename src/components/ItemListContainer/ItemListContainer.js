import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from "../asyncMock"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [ loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        const asynFunction = categoryId ? getProductsByCategory : getProducts
        asynFunction(categoryId)
            .then((response) => {
                setProducts(response);
            })
            .finally(() => {
                setLoading(false)
            });
    }, [categoryId])
    // useEffect(() => {
    //     getProducts()
    //         .then(products => {
    //             setProducts(products)
    //         }) .finally(() => {
    //             setLoading(false)
    //         })
    // }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Listado de productos</h1>
            <ItemList products={products}/>
        </div>         
    )
}

export default ItemListContainer