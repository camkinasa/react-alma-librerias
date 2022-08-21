import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getFetch, getLibroByCategory } from "../../Libros/libros";
import Item from "../Item/Item";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemList = () => {
  const [libros, setLibros] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() =>{
    if(!categoryId){
      getFetch
      .then((resp) => setLibros(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
    } else{
      getLibroByCategory(categoryId)
      .then(items => setLibros(items))
      .finally(() => setLoading(false))
    }
  }, [categoryId])

  return (
    <>
      <Container fluid className="container">
        <Row className="justify-content-md-center col-xs-12">
          {
            loading ? <div><h2>Cargando...</h2><LoadingSpinner/></div>:
            libros.map( (libro) =>{
            return(
              <Col>
                <Item key={libro.id} {...libro}/>
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