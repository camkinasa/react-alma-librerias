import { Container, Row, Col, Button } from "react-bootstrap";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import { DB } from "../../Libros/APIfirebase";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import swal from "sweetalert"
import "./UserForm.css"

const UserForm = () => {

    const compra = useContext(CartContext)

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('');
    const [emailValidado, setEmailValidado] = useState('')
    const [telefono, setTelefono] = useState('');

    const inputNombre = (e) => {
        setNombre(e.target.value);
      };

    const inputApellido = (e) => {
        setApellido(e.target.value);
      };
     
      const inputEmail = (e) => {
        setEmail(e.target.value);
      };

      const inputEmailValidado = (e) => {
        setEmailValidado(e.target.value);
      };
     
      const inputTelefono = (e) => {
        setTelefono(e.target.value);
      };

      const limpiarFormulario = () =>{
        setNombre("")
        setApellido("")
        setEmail("")
        setEmailValidado("")
        setTelefono("")
      }

     const createOrder = () => { 
      const booksForDB = compra.cart.map(book => ({
        id: book.id,
        title: book.titulo,
        quantity: book.quantity,
        price: book.precio
      }));
  
      let purcharseOrder = {
        buyer: {
            name: `${nombre}`,
            surname: `${apellido}`,
            phone: `${telefono}`,
            email: `${email}`,
        },
        total: compra.sumarTotal(compra.cart),
        items: booksForDB,
        date: serverTimestamp()
      };
      

       const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(DB, "orders"));
        await setDoc(newOrderRef, purcharseOrder);
        return newOrderRef;
      }
    
      createOrderInFirestore(purcharseOrder)
        .then(result => {
          swal({
            title: '¡Compra realizada con éxito!',
            text: 'Se realizó tu orden de compra con el código  ' + result.id,
            icon: 'success',
            button: 'Entendido'
        })
          compra.cart.forEach(async (book) => {
            const bookRef = doc(DB, "libros", book.id);
            await updateDoc(bookRef, {
              stock: increment(-book.quantity)
            });
          });
          compra.clear();
          limpiarFormulario()
        })
        .catch(err => console.log(err));
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if(email === emailValidado){
        createOrder()
    } else{
        alert("Error! Los mails no coinciden!")
    }
  }



  return (
    <Container className="bg-light opacity-75 pt-3 px-5">
            <form>
                <Col>
                    <Row>
                        <label htmlFor="firstName" className="form-label tituloForm mt-3">Nombre/s</label>
                        <input onChange={inputNombre} value={nombre} type="text" className="form-control" id="name" placeholder="Nombre/s" required />
                    </Row>

                    <Row>
                        <label htmlFor="firstName" className="form-label tituloForm mt-3">Apellido/s</label>
                        <input onChange={inputApellido} value={apellido} type="text" className="form-control" id="name" placeholder="Apellido/s" required />
                    </Row>
                    
                    <Row>
                        <label htmlFor="email" className="form-label tituloForm mt-3">E-mail <span className="text-muted"></span></label>
                        <input onChange={inputEmail} value={email} type="email" className="form-control" id="email" placeholder="name@example.com" required />
                    </Row>

                    <Row>
                        <label htmlFor="email2" className="form-label tituloForm mt-3">Repetir E-mail <span className="text-muted"></span></label>
                        <input onChange={inputEmailValidado} value={emailValidado} type="email" className="form-control" id="email2" placeholder="name@example.com" required />
                    </Row>

                    <Row>
                        <label htmlFor="phone" className="form-label tituloForm mt-3">Teléfono</label>
                        <input onChange={inputTelefono} value={telefono} type="number" className="form-control"  id="phone" placeholder="110303456" required />
                    </Row>
                </Col>
                {compra.cart.length === 0 ? (
                    <Button onClick={formSubmit} disabled className="w-100 btn btn-success btn-lg mt-5 mb-5" type="submit">Realizar compra</Button>
                ):(
                    <Button onClick={formSubmit} className="w-100 btn btn-success btn-lg mt-5 mb-5" type="submit">Realizar compra</Button>
                )}
            </form>
    </Container>

  )
}
export default UserForm;