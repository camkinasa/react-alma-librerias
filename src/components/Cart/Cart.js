import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () =>{
    const { cart, removeBook, clear, subtotal } = useContext(CartContext)
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
          </Row>
          <Container>
            {cart == [] ? (
              <div>
                <p>¡No hay libros en el carrito!</p>
                <Button as={Link} to="/">
                    Volver al inicio
                </Button>
              </div>
            ) : (
              <>
                {cart?.map((book) => (
                  <Row key={book.id}>
                    <Col m={3}>
                      {book.titulo} por {book.cantidad}
                    </Col>
                    <Col m={2}>{book.cantidad}</Col>
                    <Col m={2}>{`$ ${book.precio}`}</Col>
                    <Col m={2}>{`$ ${book.cantidad * book.precio}`}</Col>
                    <Col m={1}>
                      <Button
                        className="btn btn-danger"
                        onClick={() => removeBook(book.id)}
                      >
                        Eliminar del carrito
                      </Button>
                    </Col>
                  </Row>
                ))}
              </>
            )}
          </Container>
        </Container>
        <hr />
        {cart == "" ? (
          <></>
        ) : (
          <div>
          <div>Subtotal: ${subtotal}</div>
          <div>
            <Button as={Link} to="/">
              Seguir comprando
            </Button>
            <div>
              <Button className="btn btn-danger" onClick={clear}>
                Vaciar carrito
              </Button>
            </div>
          </div>
        </div>
        )}
      </div>
    );
}
export default Cart