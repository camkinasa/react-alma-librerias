import CartWidget from "../CartWidget/CartWidget"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css"
import UserWidget from "../UserWidget/UserWidget";

const NavBar = () => {
    return(
        <>
            <Navbar className="navBarContainer mb-5">
            <Container fluid>
                <Link to="/cart" className="cantidadEnCarrito">
                    <CartWidget/>
                </Link>
                <Navbar.Brand>
                    <NavLink to={"/"} className="almaLibrerias">Alma Librerías</NavLink>
                </Navbar.Brand>
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
{/*                 <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Buscar libro..."
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="light">Buscar</Button>
                </Form> */}
                <Link to="/user" className="logIn">
                    <span className="logIn">Ingresar</span>
                    <UserWidget/>
                </Link>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBar