import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () =>{
    const { cart, removeBook, clear } = useContext(CartContext)
    console.log(cart)
    return(    
        <div>
        <div>
          <h2>Carrito</h2>
        </div>
        <Container>
          <Row>
            <Col m={2}>Título</Col>
            <Col m={2}>Cantidad</Col>
            <Col m={2}>Precio por unidad</Col>
            <Col m={2}>Precio total</Col>
            <Col m={2}></Col>
            <Col m={2}>
              <Button
                className="btn btn-danger"
                onClick={() => clear()}
              >
                Vaciar carrito
              </Button>
            </Col>
          </Row>
          <Container>
            {cart.length === 0 ? (
              <div>
                <p>¡No hay libros en el carrito!</p>
                <Button as={Link} to="/">
                    Volver al inicio
                </Button>
              </div>
            ) : (
              <>
                {cart.map((book) => (
                  <Row key={book.id}>
                    <Col m={2}>{book.titulo}</Col>
                    <Col m={2}>{`${book.quantity}`}</Col>
                    <Col m={2}>{`$ ${book.precio}`}</Col>
                    <Col m={2}>${book.quantity * book.precio}</Col>
                    <Col m={2}>
                      <Button
                        className="btn btn-danger"
                        onClick={() => removeBook(book)}
                      >
                        Eliminar del carrito
                      </Button>
                    </Col>
                    <Col m={2}>
                    </Col>
                  </Row>
                ))}
              </>
            )}
          </Container>
        </Container>
      </div>
    );
}
export default Cart