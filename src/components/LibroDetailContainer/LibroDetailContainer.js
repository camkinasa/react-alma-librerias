import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react'
import { getBookById } from '../../Libros/libros'
import { useParams } from 'react-router-dom'
import LibroDetail from '../LibroDetail/LibroDetail'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const LibroDetailContainer = () => {
  const [libro, setLibro] = useState({})
  const [loading, setLoading] = useState(true)
  const { idLibro } = useParams();
/*   parseInt(idLibro) */

  useEffect(() => {        
    async function getBookByIdDesdeFirebase(idLibro){
      const bookByIdDesdeFirebase = await getBookById(idLibro)
      setLibro(bookByIdDesdeFirebase)
      setLoading(false)
    }
    getBookByIdDesdeFirebase(idLibro)
  }, [idLibro])

  return (
    <Container>
      <h2 className='mt-5 mb-3'>Detalle del libro</h2>
      {loading ? <div><h2>Cargando...</h2> <LoadingSpinner/></div>:
      <LibroDetail {...libro}/>}
    </Container>
  )
}
export default LibroDetailContainer