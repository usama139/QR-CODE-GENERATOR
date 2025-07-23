import React from "react";
import Header from "./Header";
import QRInputSection from "./QRInputSection";
import QRPreviewPanel from "./QRPreviewPanel";
import { Container, Row, Col } from "react-bootstrap";

const QRGeneratorMain = () => {
  return (
    <>
      <Header />
      <Container fluid className="bg-light py-5">
        <Container className="p-4 rounded bg-white shadow">
          <Row>
            <Col md={8} className="border-end">
              <QRInputSection />
            </Col>
            <Col md={4}>
              <QRPreviewPanel />
            </Col>
          </Row> 
        </Container>
      </Container>
    </>
  );
};

export default QRGeneratorMain;
