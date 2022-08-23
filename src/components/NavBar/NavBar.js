import CartWidget from "../CartWidget/CartWidget"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
    const { cart } = useContext(CartContext)
    return(
        <>
            <Navbar className="navBarContainer mb-5">
            <Container fluid>
                {cart.length ? 
                    <div>
                        <Link to="/cart">
                            <CartWidget/>
                        </Link>
                        <Navbar.Brand href="#">
                            <NavLink to={"/"}>Alma Librerías</NavLink>
                        </Navbar.Brand>
                    </div>
                    :                 
                    <Navbar.Brand href="#">
                        <NavLink to={"/"}>Alma Librerías</NavLink>
                    </Navbar.Brand>
                }   
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavDropdown title="Género" id="basic-nav-dropdown" className="bg-dark">
                        <NavDropdown.Item className="bg-dark">
                            <Link to="category/autoayuda">Autoayuda</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="bg-dark">
                            <Link to="category/feminismo">Feminismo</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="bg-dark">
                            <Link to="category/thriller-medico">Thriller médico</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Buscar libro..."
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="light">Buscar</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBar