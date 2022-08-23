import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () =>{
    const { cart, removeBook, clear, sumarTotal } = useContext(CartContext)
    console.log(cart)
    return(    
        <Container className="bg-light opacity-75" id="cart">
          <h2>Carrito</h2>
          <Row className="mb-2">
            <Col m={2}><strong>Título</strong></Col>
            <Col m={2}><strong>Cantidad</strong></Col>
            <Col m={2}><strong>Precio por unidad</strong></Col>
            <Col m={2}><strong>Subtotal</strong></Col>
            <Col m={2}></Col>
            <Col m={2}>
              <Button
                className="btn btn-danger"
                onClick={() => clear()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-x-fill mx-2" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z"/>
                </svg>
                Vaciar carrito
              </Button>
            </Col>
          </Row>
          <hr/>
          <Container>
            {cart.length === 0 ? (
              <div>
                <p className="mt-10">¡No hay libros en el carrito!</p>
                <Button as={Link} to="/">
                    Volver al inicio
                </Button>
              </div>
            ) : (
              <>
                {cart.map((book) => (
                  <Row key={book.id} className="mb-1">
                    <Col m={2}>{book.titulo}</Col>
                    <Col m={2}>{`${book.quantity}`}</Col>
                    <Col m={2}>{`$ ${book.precio}`}</Col>
                    <Col m={2}>${book.quantity * book.precio}</Col>
                    <Col m={2}></Col>
                    <Col m={2}>
                      <Button
                        className="btn btn-danger"
                        onClick={() => removeBook(book)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                      </Button>
                    </Col>
                  </Row>
                ))}
                <hr/>
                <Row>
                  <Col m={2}></Col>
                  <Col m={2}></Col>
                  <Col m={2}></Col>
                  <Col m={2}></Col>
                  <Col m={2}><h3>Total: ${sumarTotal(cart)}</h3></Col>
                  <Col m={2}>
                    <Button className="btn btn-success">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check-fill mx-2" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                      </svg>
                      Finalizar compra
                    </Button>
                  </Col>
                </Row>
              </>
            )}
          </Container>
        </Container>
    );
}
export default Cart