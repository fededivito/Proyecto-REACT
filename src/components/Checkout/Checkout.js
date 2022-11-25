import { useState, useContext } from "react"
import { CartContext } from '../../Context/CartContext'
import {addDoc, collection,getDocs, query, where, documentId, writeBatch} from 'firebase/firestore'
import { db } from "../../services/firebase"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    
    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)

    function CheckoutForm() {
           
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleChange1 = event => {
        return (
            setNombre(event.target.value)
        )
    }

    const handleChange2 = event => {
        return (
            setTelefono(event.target.value)
        )
    }

    const handleChange3 = event => {
        return (
            setEmail(event.target.value)
        )
    }

        try{
        //      const objOrder ={
        //          buyer: {
        //              name: 'federico di vito',
        //              phone: '1165600221',
        //              mail: 'fededivito14@gmail.com'
        //          },
        //          Items: cart,
        //          total: total
        //      }
    
            const batch = writeBatch(db)

            const outOfStock = []

            const collectionRef = collection(db, 'orders')
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
            
            const productsAddedFromFirestore = await getDocs(query(productsRef,where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 3000)
            }
        }catch (error){

        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }
    
    return (
        <div>
            <h1> Checkout </h1>
            <div>
                <h2> Formulario </h2>
                <form>
                    <h3>Nombre</h3>
                    <input onChange={handleChange1}></input>
                    <h3>Telefono</h3>
                    <input onChange={handleChange2}></input>
                    <h3>Email</h3>
                    <input onChange={handleChange3}></input>
                </form>
            </div>
            <button onClick={createOrder}> Finalizar compra </button>
        </div>
    )
}


export default Checkout
