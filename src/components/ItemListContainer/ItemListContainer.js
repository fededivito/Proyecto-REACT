import { useState, useEffect } from "react"
import { getProducts } from "../asyncMock"
import { Link } from "react-router-dom"
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
            .then(products => {
                setProducts(products)
            }) .finally(() => {
                setLoading(false)
            })
    }, [])

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