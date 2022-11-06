import './App.css';
import { createContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

export const MyContext = createContext()

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />  
          <Routes>
            <Route path='/' element={<ItemListContainer />} />  
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/contact' element={<h1>CONTACT</h1>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>  

    </div>
  );
}

export default App;
