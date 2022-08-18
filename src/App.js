import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import CategoriaPage from './pages/CategoriaPage'
import ItemDetailPage from './pages/ItemDetailPage'
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/category/:categoryId' element={<CategoriaPage/>}/>
          <Route path='/item/:idLibro' element={<ItemDetailPage/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </CartContextProvider>
  );
}

export default App;
