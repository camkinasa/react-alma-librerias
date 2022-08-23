import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <Card style={{ width: '18rem', height: '36rem'}} className="mt-5 mb-5 bg-light" border="success">
    <Card.Img id="img" variant="top" src={props.img} className="mt-3"/>
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
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