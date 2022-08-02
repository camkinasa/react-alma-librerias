import { useEffect, useState } from "react"
import getFetch from "../../Libros/libros"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Item from "../Item/Item";

const ItemList = () => {
  const [libros, getLibros] = useState([])
  const [loading, setLoading] = useState(true) //Agregar la lógica de esto!!

  useEffect(() =>{
      getFetch
      .then((resp) => getLibros(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Container fluid className="container">
        <Row className="justify-content-md-center">
          {
            loading ? <h2>Cargando...</h2>:
            libros.map( (libro) =>{
            return(
              <Col>
                <Item key={libro.id} titulo={libro.titulo} autor={libro.autor} precio={libro.precio} img={libro.img} stock={libro.stock} initial={libro.initial}/>
              </Col>
            )
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default ItemList