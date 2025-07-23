import React from "react";
import {  Row, Col, Button, Card } from "react-bootstrap";
import "../styles/ConnectionsPlatformSection.css";
import heroImage from "../assets/platform/bitly.png"; 
import bitlyLogo from "../assets/platform/bitly-logo.svg"; 

const ConnectionsPlatformSection = () => {
  return (
    <section className="connections-section py-5">
      <div style={{ backgroundColor: "#f9f9f9", width: "100%", padding: "40px" }}>
        <Row className="align-items-center mb-5">
          <Col md={6}>
          
            <img
              src={bitlyLogo}
              alt="Bitly Logo"
              className="bitly-logo mb-3"
              style={{ height: "40px" }}
            />

            <h6 className="text-uppercase text-secondary fw-bold mb-2">
              LINK MANAGEMENT • QR CODES • LANDING PAGES
            </h6>
            <h2 className="fw-bold mb-3">Bitly Connections Platform</h2>
            <p className="text-muted">
              QR Code Generator and Bitly are combining to create an all-in-one Connections Platform. Cultivate seamless audience connections with branded links, customized QR codes, and Landing Pages. We turn every link and scan into a catalyst for connection.
            </p>
            <Button className="btn-learn-more mt-3 px-4 py-2">LEARN MORE</Button>
          </Col>

          <Col md={6} className="text-center">
            <img src={heroImage} alt="Bitly Connections" className="img-fluid" />
          </Col>
        </Row>

        <Row className="g-4">
  {[
    {
      title: "Link Management",
      text: [
        "Shorten URLs at scale",
        "Create custom links",
        "Track campaigns with a single link",
        "Redirect your URLs",
      ],
      icon: "🔗",
    },
    {
      title: "QR Code Generator",
      text: [
        "Design fully-customized QR Codes",
        "Construct built-in landing pages",
        "Track campaigns with a single scan",
        "Employ third-party APIs",
      ],
      icon: "📱",
    },
    {
      title: "Landing Pages",
      text: [
        "Custom URLs for social media",
        "Customizable landing page",
        "Easy-to-manage links",
        "Link and landing page tracking",
      ],
      icon: "📄",
    },
  ].map((box, idx) => (
    <Col md={4} key={idx}>
      <Card className="feature-card p-4 h-100">
        <div className="d-flex align-items-center gap-2 mb-3">
          <div className="fs-3">{box.icon}</div>
          <h5 className="fw-bold m-0 text-primary">{box.title}</h5>
        </div>
        <p className="text-muted mb-3">
          {idx === 0 &&
            "A state-of-the-art solution to make every link a point of connection between your content and your audience."}
          {idx === 1 &&
            "A holistic solution to bridge offline and online marketing, track metrics in real-time, and brand your QR Codes."}
          {idx === 2 &&
            "Bitly Pages helps you create engaging, mobile-optimized landing pages in minutes."}
        </p>
        <ul className="list-unstyled mb-4">
          {box.text.map((item, i) => (
            <li key={i} className="d-flex align-items-center mb-2">
              <span className="check-icon me-2">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button className="btn-signup w-100 mt-auto">SIGN UP NOW</Button>
      </Card>
    </Col>
  ))}
</Row>

     </div>
    </section>
  );
};

export default ConnectionsPlatformSection;
