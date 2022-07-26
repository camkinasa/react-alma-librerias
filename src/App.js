import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import CategoriaPage from './pages/CategoriaPage'
import ItemDetailPage from './pages/ItemDetailPage'
import CartContainer from './components/Cart/CartContainer';
import CartContextProvider from './context/CartContext';
import Footer from "./components/Footer/Footer"
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/category/:categoryId' element={<CategoriaPage/>}/>
            <Route path='/item/:idLibro' element={<ItemDetailPage/>} />
            <Route path="/cart" element={<CartContainer/>} />
            <Route path="/user" element={<UserPage/>} />
          </Routes>
          <Footer/>
      </CartContextProvider>
    </>
  );
}

export default App;
