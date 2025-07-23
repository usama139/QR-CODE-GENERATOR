
import React, { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "../styles/QRInfoSection.css";

const QRInfoSection = () => {
  const [activeKey, setActiveKey] = useState("0");

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
   <div className="qr-info-section py-5" style={{ width: "100%" }}>
  <Container fluid style={{ backgroundColor: "rgba(247, 245, 245,0.7)", width: "100%", paddingTop:"30px", }}>
        <h2 className="text-center fw-bold mb-2" style={{ fontSize: "42px" }}>
          I’m new to QR Codes. What should I know?
        </h2>
        <p className="text-center text-muted mb-5" style={{ fontSize: "20px" }}>
          Glad you asked! Here’s a few basics to get you started.
        </p>

        <Row className="align-items-start">
          <Col md={5} className="text-center mb-4 mb-md-0">
            <img
              src={require("../assets/info/hand-qrcodes.png")}
              alt="QR Info Visual"
              className="img-fluid"
              style={{ maxHeight: "600px" }}
            />
          </Col>

          <Col md={7}>
            <Accordion activeKey={activeKey} flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header onClick={() => handleToggle("0")}>
                  What is a QR Code?
                </Accordion.Header>
                <Accordion.Body>
                  QR Code is a two-dimensional version of the barcode, typically
                  made up of black and white pixel patterns. Denso Wave, a
                  Japanese subsidiary of the Toyota supplier Denso, developed
                  them for marking components in order to accelerate logistics
                  processes for their automobile production. Now, it has found
                  its way into mobile marketing with the widespread adoption of
                  smartphones. "QR" stands for "Quick Response", which refers to
                  the instant access to the information hidden in the Code.
                  <br />
                  <a href="#" className="fw-bold text-primary mt-2 d-inline-block">
                    TELL ME MORE
                  </a>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => handleToggle("1")}>
                  What are the benefits of using QR Codes?
                </Accordion.Header>
                <Accordion.Body>
                  QR Codes provide easy access to websites, contact info,
                  downloads, and more without typing or searching. They enhance
                  user convenience and marketing efficiency.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header onClick={() => handleToggle("2")}>
                  How do I scan QR Codes?
                </Accordion.Header>
                <Accordion.Body>
                  Open your smartphone’s camera or a QR code scanning app, point
                  it at the QR Code, and tap the notification that pops up.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default QRInfoSection;
