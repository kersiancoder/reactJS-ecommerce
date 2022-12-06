
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';


export function MiNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><img width="120px" src="https://zookids.uy/wp-content/uploads/2019/04/logo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link as={Link} to="categoria/1">Bebés</Nav.Link>
            <Nav.Link as={Link} to="categoria/2">Niños</Nav.Link>
            <Nav.Link as={Link} to="categoria/3">Adolescentes</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Registrarse</Nav.Link>
            <Nav.Link as={Link} to="carrito"><CartWidget /> </Nav.Link>
                
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
  );
}