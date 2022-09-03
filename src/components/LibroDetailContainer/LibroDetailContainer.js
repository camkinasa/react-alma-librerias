import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react'
import { getBookById } from '../../Libros/libros'
import { useParams } from 'react-router-dom'
import LibroDetail from '../LibroDetail/LibroDetail'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import "./LibroDetailContainer.css"

const LibroDetailContainer = () => {
  const [libro, setLibro] = useState({})
  const [loading, setLoading] = useState(true)
  const { idLibro } = useParams();

  const sinResultados = <div>No hay resultados que coincidan con su búsqueda</div>

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
      {libro ?
        loading ? 
          <div>
            <h2>Cargando...</h2> 
            <LoadingSpinner/>
          </div>
          :
          <LibroDetail {...libro}/>
          :
        <div className='sinResultados'>No hay resultados que coincidan con su búsqueda</div>
      }
    </Container>
  )
}
export default LibroDetailContainer