import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QRInputSection from './QRInputSection';
import QRPreviewPanel from './QRPreviewPanel';
import '../styles/QRGeneratorMain.css';

const QRGeneratorMain = () => {
  return (
    <div className="qr-generator-main py-5">
      <Container>
        <h2 className="text-center mb-4">Free QR Code Generator</h2>
        <Row>
          <Col xs={12} md={8} className="mb-4 mb-md-0 border-md-end">
            <QRInputSection />
          </Col>
          <Col xs={12} md={4}>
            <QRPreviewPanel />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default QRGeneratorMain;
