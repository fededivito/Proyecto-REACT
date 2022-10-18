import React from "react"
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ItemCount  = ({stock =0, initial=1, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)

    // const increment = () => {
    //     if (quantity < stock) {
    //     setQuantity (quantity+1)
    //     }
    // }

    // const decrement = () => {
    //     if (quantity > 1){
    //     setQuantity (quantity - 1)
    //     }
    // }

    const increment = () => {
        for (var i=0; i<5; i++) {
        setQuantity (valorPrev => valorPrev + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1){
        setQuantity (quantity - 1)
        }
    }

    return (
        <div>
            <div className="contador">
                <button id="addButton" className="elements" onClick={decrement}> - </button> 
                <h2 className="elements">{quantity}</h2>
                <button id="subsButton"  className="elements" onClick={increment}> + </button>
            </div>
            <div className="botonFinal">
                <button id ="cartButton" className="ui bottom attached button" onClick={() => onAdd (quantity)}>
                <FontAwesomeIcon icon="fa-sharp fa-solid fa-cart-shopping" />
                Agregar al Carrito
                </button>    
            </div>
        </div>
    )
} 

export default ItemCount