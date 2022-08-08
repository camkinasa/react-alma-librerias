import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const LibroDetail = (libro) => {
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
        <ItemCount stock={libro.stock} initial={libro.initial}/>
      </Card.Body>
    </Card>
  )
}
export default LibroDetail