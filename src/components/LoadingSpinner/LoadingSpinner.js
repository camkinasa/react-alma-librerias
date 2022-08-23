import Spinner from 'react-bootstrap/Spinner';
const LoadingSpinner = () => {
  return (
    <div className='spinner'>
      <Spinner animation="border" variant="danger" />
    </div>
  )
}
export default LoadingSpinner