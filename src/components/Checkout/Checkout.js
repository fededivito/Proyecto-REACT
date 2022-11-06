import { useContext } from "react"
import { CartContext } from '../../Context/CartContext'
import {addDoc, collection} from 'firebase/firestore'
import { db } from "../../services/firebase"

const Checkout = () => {
    const { cart, total } = useContext(CartContext)

    const createOrder = () => {
        const objOrder ={
            buyer: {
                name: 'federico di vito',
                phone: '1165600221',
                mail: 'fededivito14@gmail.com'
            },
            Items: cart,
            total: total
        }

        const collectionRef = collection(db, 'orders')
        addDoc(collectionRef, objOrder).then(response => {
             
        })
        return (
            <div>
                <h1> Checkout </h1>
                <h2> Formulario </h2>
                <button onClick={createOrder}> Generar orden </button>
            </div>
        )
    }

    return (
        <div>
            <h1> Checkout </h1>
            <h2> Formulario </h2>
            <button onClick={createOrder}> Generar orden </button>
        </div>
    )
}

export default Checkout
