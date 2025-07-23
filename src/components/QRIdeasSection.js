// src/components/QRIdeasSection.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/QRIdeasSection.css"; // Add this line to use custom styling

const qrIdeas = [
  {
    title: "Business Cards",
    image: require("../assets/ideas/business1.jpg"),
  },
  {
    title: "Flyers",
    image: require("../assets/ideas/flyers.jpg"),
  },
  {
    title: "Brochures",
    image: require("../assets/ideas/brochers.jpg"),
  },
];

const QRIdeasSection = () => {
  return (
    <div className="bg-light py-5">
      <Container className="text-center">
      <div
  style={{
    backgroundColor: "rgb(207, 246, 252)",
    border: "1px solid rgba(175, 199, 230, 1)",
    padding: "10px",
    borderRadius: "18px",
    marginBottom: "40px",
    marginTop: "-40px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  {/* NEW badge */}
  <span
    style={{
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "rgba(26, 53, 86, 1)",
      padding: "5px 10px",
      borderRadius: "12px",
      whiteSpace: "nowrap",
    }}
  >
    NEW
  </span>

  {/* Text aligned in 2 lines next to NEW */}
  <div
    style={{
      color: "rgba(26, 53, 86, 1)",
      lineHeight: "1.4",
    }}
  >
    <div>QR Code Generator is committed to protecting your data and earning your trust every day.</div>
    <div >As part of that commitment, we’re SOC 2 compliant.</div>
  </div>
</div>

        <div className="mb-4">
          <span className="badge bg-primary me-2" style={{ fontSize: "1.1rem", backgroundColor: "rgb(66, 126, 199)" }}>PRO TIP</span>
          <span className="fs-4 fw-bold">
            Scroll down to see <span className="text-primary">creative QR Codes ideas</span>
          </span>
        </div>

        <Row className="g-4 justify-content-center" >
          {qrIdeas.map((idea, idx) => (
            <Col key={idx} xs={12} sm={6} md={3}>
              <Card className="h-100 shadow-sm idea-card" style={{ cursor: "pointer" }}>
                <Card.Img
                  variant="top"
                  src={idea.image}
                  className="small-image"
                  alt={idea.title}
                />
                <Card.Body className="text-center" style={{ cursor: "pointer" }}>
                  <Card.Title className="fw-bold">{idea.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {/* View More card */}
          <Col xs={12} sm={6} md={3}>
  <Card className="h-100 shadow-sm d-flex justify-content-center align-items-center text-center p-3 view-more-card" style={{ cursor: "pointer" }}>
    <Card.Body>
      <Card.Title className="fw-bold text-primary">
        Check out more{" "}
        <span className="text-dark">creative QR Code examples</span>
      </Card.Title>
      <Button
        variant="link"
        className="fw-bold text-decoration-none ps-0"
        style={{ paddingTop: "3.5rem" }}
      >
        VIEW MORE &nbsp; &rarr;
      </Button>
    </Card.Body>
  </Card>
</Col>

        </Row>
      </Container>
    </div>
  );
};

export default QRIdeasSection;
