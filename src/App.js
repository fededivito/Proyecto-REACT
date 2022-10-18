import React from 'react'
import './App.css';
import { useState, createContext } from 'react';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Context = createContext(0)

function App() {
  const [cart, setCart ] = useState([])

  const addItem = (productToAdd) => {
    setCart([...cart, productToAdd])
  }

  return (
    <div className="App">
      <Context.Provider value={10}>
        <BrowserRouter>
          <Navbar />  
          <Routes>
            <Route path='/' element={<ItemListContainer />} />  
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/contact' element={<h1>CONTACT</h1>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer setCart={addItem} />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
        </Context.Provider>
    </div>
  );
}

export default App;
