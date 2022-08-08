import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react'
import { getBookById } from '../../Libros/libros'
import { useParams } from 'react-router-dom'
import LibroDetail from '../LibroDetail/LibroDetail'

const LibroDetailContainer = () => {
  const [libro, setLibro] = useState({})
  const [loading, setLoading] = useState(true)
  const {idLibro} = useParams();
  parseInt(idLibro)

  useEffect(() => {        
    getBookById(idLibro)
    .then(libro => {
        setLibro(libro)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => setLoading(false))
  }, [idLibro])

  return (
    <Container>
      <h1>Detalle del libro</h1>
      {loading ? <h2>Cargando...</h2>:
      <LibroDetail {...libro}/>}
    </Container>
  )
}
export default LibroDetailContainer