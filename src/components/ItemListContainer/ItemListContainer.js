import { useState, useEffect } from "react"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [ loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')
        
        getDocs(collectionRef) .then((response) => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { idd: doc.id, ...data}
            })    
             setProducts(productsAdapted);
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