import { useContext } from "react"
import { CartContext } from '../../Context/CartContext'
import { addDoc, collection, getDocs, query, where, writeBatch, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

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


    const createOrder = async () => {
        try {
            const objOrder = {
                buyer: {
                    name: nombre,
                    phone: telefono,
                    email: email
                },
                Items: cart,
                total: total
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 3000)

            } else {
                console.log("stock no disponible")
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
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