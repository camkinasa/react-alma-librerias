import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const LibroDetail = (libro) => {
  const [enCarrito, setEncarrito] = useState(false)

  const {addBookToCart} = useContext(CartContext)

  const onAdd = (quantityToAdd) => {

    addBookToCart( { 
        ...libro,
        quantity: quantityToAdd
     } );

    setEncarrito(true);
    console.log(
        ">> Evento recibido del ItemCount! - Cantidad agregada: ",
        quantityToAdd
    );
};

  return (
    <Card border="success" className='opacity-75 mb-5'>
    <Card.Img id="img" variant="top" src={libro.img} className="mt-3" />
      <Card.Body>
        <Card.Title>Título: {libro.titulo}</Card.Title>
        <Card.Text>Autor: {libro.autor}</Card.Text>
        <Card.Text>Precio: ${libro.precio}</Card.Text>
        <Card.Text>Género: {libro.genero}</Card.Text>
        <Card.Text>Sinopsis: {libro.sinopsis}</Card.Text>
        <Card.Text>En stock: {libro.stock}</Card.Text>
        <ItemCount 
          stock={libro.stock} 
          initial={libro.initial}
          onAddItemsToCart={onAdd}
          />
        {enCarrito ? 
              <div className='mt-3 libroDetail'>
                 <Link to="/cart">
                   <button className="btn btn-secondary">Ver en carrito</button>
                 </Link>
                 <Link to="/">
                   <button className="btn btn-secondary ms-3">Seguir comprando</button>
                 </Link>
              </div> 
        : false }
      </Card.Body>
    </Card>
  )
}
export default LibroDetail