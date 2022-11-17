
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart } from "react-icons/bs";


function MiNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Zoo Kids</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#cat1">Categoría 1</Nav.Link>
            <Nav.Link href="#cat2">Categoría 2</Nav.Link>
            <Nav.Link href="#cat3">Categoría 3</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#registrarse">Registrarse</Nav.Link>
            <Nav.Link href="#carrito"><BsCart /></Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
  );
}

export default MiNavbar;