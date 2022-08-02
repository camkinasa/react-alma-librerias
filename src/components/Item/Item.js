import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount';
import libros from "../../Libros/libros"

const Item = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>Título: {props.titulo}</Card.Title>
        <Card.Text>Autor: {props.autor}</Card.Text>
        <Card.Text>Precio: ${props.precio}</Card.Text>
        <Button variant="primary">+ info</Button>
        <ItemCount stock={props.stock} initial={props.initial}/>
      </Card.Body>
  </Card>
  )
}
export default Item