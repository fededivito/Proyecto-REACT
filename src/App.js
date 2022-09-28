import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer greeting={'Bienvenidos a M3Racing'} />
    </div>
  );
}

export default App;
