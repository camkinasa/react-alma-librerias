import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img id="img" variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>Título: {props.titulo}</Card.Title>
        <Card.Text>Autor: {props.autor}</Card.Text>
        <Card.Text>Precio: ${props.precio}</Card.Text>
        <Link to={`/item/${props.id}`}>
          <Button variant="secondary">Ver sinopsis</Button>
        </Link>
      </Card.Body>
  </Card>
  )
}
export default Item