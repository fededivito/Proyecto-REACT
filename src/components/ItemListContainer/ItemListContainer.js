import { useState, useEffect } from "react"
import { getProducts } from "../asyncMock"
import { Link } from "react-router-dom"
// const products = [
//     {
//     id: 1,
//     name: "Funda premium",
//     price: 4500,
//     stock: 10,
//     img: 'https://i.ibb.co/2k1zDdx/funda-premium.webp'
//     },
//     {
//     id: 2,
//     name: "Funda cuero automotor",
//     price: 2800,
//     stock: 50,
//     img: 'https://i.ibb.co/qLGvB1P/funda-cuero-automotor.webp'
//     },
//     {
//     id: 3,
//     name: "Cubre auto",
//     price: 10000,
//     stock: 3,
//     img: 'https://i.ibb.co/2krCvmJ/cubre-auto.webp'
//     },
// ]


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
            .then(products => {
                setProducts(products)
            })
    }, [])

    return (
        <div>
            <h1>Listado de productos</h1>
            {products.map(prod => {
            return (
                <div key={prod.id}>
                    <img src={prod.img} alt={prod.name} style={{width: 100}} />
                    <h3>{prod.name}</h3>
                    <p>Price: ${prod.price}</p>  
                    <Link to={`/detail/${prod.id}`}>ver detalle</Link>                  
                </div>
            )
        }) }
        </div>
    )
}

export default ItemListContainer