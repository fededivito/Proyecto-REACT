import { useState,useEffect, useContext, createContext } from "react"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart ] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart])

    
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
            
        } else {
        
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id ===id)
    }
    
    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter( prod => prod.id !== id)
        setCart(cartWithoutProduct)
    } 

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu
    }

    const getTotal = () => {
        let accu = 0
  
        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })
  
        return accu
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity, getQuantity, clearCart, getProductQuantity}}>
            {children}
        </CartContext.Provider>
    )
}