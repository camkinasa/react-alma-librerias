import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./CartContainer.css";

const CartContainer = () =>{
  const compra = useContext(CartContext)
    return(    
        <Container className="bg-light opacity-75" id="cart">
          <h2 className="carritoTitle">Carrito</h2>
          <Row className="mb-2">
            <Col m={2}><strong>Título</strong></Col>
            <Col m={2}><strong>Cantidad</strong></Col>
            <Col m={2}><strong>Precio por unidad</strong></Col>
            <Col m={2}><strong>Subtotal</strong></Col>
            <Col m={2}></Col>
            <Col m={2}>
              {compra.cart.length === 0 ? 
                (
                  <Button disabled
                    className="btn btn-danger"
                    onClick={() => compra.clear()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-x-fill mx-2" viewBox="0 0 16 16">
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z"/>
                    </svg>
                    Vaciar carrito
                  </Button>
                ):(
                    <Button
                    className="btn btn-danger"
                    onClick={() => compra.clear()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-x-fill mx-2" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z"/>
                      </svg>
                      Vaciar carrito
                    </Button>
                  )
              }
            </Col>
          </Row>
          <hr/>
          <Container>
            {compra.cart.length === 0 ? (
              <div>
                <p className="mt-10">¡No hay libros en el carrito!</p>
                <Button as={Link} to="/">
                    ¡Ir de compras!
                </Button>
              </div>
            ) : (
                  <>
                    <CartItem {...compra}/>
                    <Row>
                      <Col m={2}>
                        <Button as={Link} to="/" className="btn btn-success">
                          ¡Seguir comprando!
                        </Button>
                      </Col>
                      <Col m={2}></Col>
                      <Col m={2}></Col>
                      <Col m={2}></Col>
                      <Col m={2}><h3>Total: ${compra.sumarTotal(compra.cart)}</h3></Col>
                      <Col m={2}>
                        <Button /* onClick={() => createOrder(compra.cart)} */ as={Link} to="/user" className="btn btn-success">
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
export default CartContainer