import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Atendimento from "./pages/atendimento/Atendimento";

const Routers = () => {
  return (
    <>
      <Container className="md-3">
        <Routes>
          <Route path="/" element={<Atendimento />} />
          <Route path="/atendimento" element={<Atendimento />} />
        </Routes>
      </Container>
    </>
  );
};

export default Routers;
