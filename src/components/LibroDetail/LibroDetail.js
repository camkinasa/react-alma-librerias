import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import { Link } from "react-router-dom";

const LibroDetail = (libro) => {
  const [enCarrito, setEncarrito] = useState(false)
  
  const añadirAlCarrito = ()=>{
    setEncarrito(true);
  }

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
        {enCarrito ? (
          <div>
              <Link to="/cart">
                <button className="btn btn-secondary">Ver en carrito</button>
              </Link>
              <Link to="/">
                <button className="btn btn-secondary">Seguir comprando</button>
              </Link>
          </div>
        ) : (
          <ItemCount 
          stock={libro.stock} 
          initial={libro.initial}
          añadirAlCarrito={añadirAlCarrito}
          />
        )}

      </Card.Body>
    </Card>
  )
}
export default LibroDetail