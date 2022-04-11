import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./ps.png";

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Nav className="me-auto">
              <Nav.Link className="text-white " href="/">
                <img src={logo} width="80" height="50" alt="" /> SALA
              </Nav.Link>

              <Nav.Link href="/atendimento">Atendimento Presencial</Nav.Link>
              <Nav.Link href="/gerencical">Gerencial</Nav.Link>
              <Nav.Link href="#pricing">Perfil</Nav.Link>
              <Nav.Link href="#pricing">Links Úteis</Nav.Link>
            </Nav>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
