import { Col, Container, Row, Button } from "react-bootstrap";
import "./User.css"

const User = () => {
  return (
    <Container>
        <Row>
            <Col md={{ span: 4 }} className="bg-light opacity-75">
                <h3>¿Ya tenés un usuario? ¡Ingresá!</h3>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="contraseña"/>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span className="mx-2">Recordar mi usuario y contraseña</span>
                </div>
                <Button>Ingresar</Button>
            </Col>  
            <Col md={{ span: 6, offset: 2 }} className="bg-light opacity-75">
                <h3>Crear un nuevo usuario:</h3>
                <div className="mb-3">
                    <label for="name" className="form-label">Nombre/s</label>
                    <input type="text" className="form-control" id="name" placeholder="Nombre/s" />
                </div>
                <div className="mb-3">
                    <label for="surname" className="form-label">Apellido/s</label>
                    <input type="text" className="form-control" id="surname" placeholder="Apellido/s" />
                </div>
                <div className="mb-3">
                    <label for="telefono" className="form-label">Teléfono</label>
                    <input type="number" className="form-control" id="telefono" placeholder="1512345678"/>
                </div>
                <div className="mb-3">
                    <label for="email1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="email2" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" id="email2" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="contraseña"/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Repetir Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="contraseña"/>
                </div>
                <Button className="mb-3">Crear nuevo usuario</Button>
            </Col>
        </Row>
    </Container>
  )
}
export default User