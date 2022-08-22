import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const LibroDetail = (libro) => {

  const {addBookToCart} = useContext(CartContext)

  const onAdd = (quantityToAdd) => {

    addBookToCart( { 
        ...libro,
        quantity: quantityToAdd
     } );

    console.log(
        ">> Evento recibido del ItemCount! - Cantidad agregada: ",
        quantityToAdd
    );
};

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img id="img" variant="top" src={libro.img} />
      <Card.Body>
      <Card.Title>ID: {libro.id}</Card.Title>
        <Card.Title>Título: {libro.titulo}</Card.Title>
        <Card.Text>Autor: {libro.autor}</Card.Text>
        <Card.Text>Precio: ${libro.precio}</Card.Text>
        <Card.Text>Género: {libro.genero}</Card.Text>
        <Card.Text>Sinopsis: {libro.sinopsis}</Card.Text>
        <Card.Text>Stock: {libro.stock}</Card.Text>
          <div>
              <Link to="/cart">
                <button className="btn btn-secondary">Ver en carrito</button>
              </Link>
              <Link to="/">
                <button className="btn btn-secondary">Seguir comprando</button>
              </Link>
          </div>
          <ItemCount 
          stock={libro.stock} 
          initial={libro.initial}
          onAddItemsToCart={onAdd}
          />
      </Card.Body>
    </Card>
  )
}
export default LibroDetail