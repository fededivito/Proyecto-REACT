import { useEffect, useState } from "react"
// import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail" 
import { useParams } from "react-router-dom"
import { getDoc,doc } from 'firebase/firestore'
import { db } from "../../services/firebase"

const ItemDetailContainer = ({setCart}) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response =>{
            const data= response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        }) .finally(() =>{
            setLoading(false)
        })
        // getProductById(productId)
        //     .then(response => {
        //         setProducts(response)
        //     }).finally(() =>{
        //         setLoading(false)
        //     })
    }, [productId])
      
    if(loading) {
        return <h1>Cargando...</h1>
    }
    return (
        <div>
            <h1>detalle de producto</h1>
            <ItemDetail {...product} />  
        </div>
    )
}

export default ItemDetailContainer