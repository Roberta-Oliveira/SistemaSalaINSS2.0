import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "../../components/Box";
import { Button, Card } from "react-bootstrap";

const Atendimento = () => {
  return (
    <>
      <br />
      <Card>
        <Card.Header>Atendimento Presencial</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Atendimento;
