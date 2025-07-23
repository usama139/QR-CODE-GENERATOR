// src/components/PromoBannerSection.js
import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/QRCodeFeatureSection.css";


const QRCodeFeatureSection = () => {
  return (
    <div className="promo-banner py-5" style={{ marginTop: "90px" }}>
      <Container className="text-center">
        <h2 className="fw-bold mb-3">
         Unlock more cool  <span className="text-pink">QR Code features</span>
        </h2>
        <p className="text-muted mb-4">
          Add your logo in the center of your QR Code, create multiple QR Codes at once, collaborate with your team, and much more.
        </p>
        <Button className="promo-btn px-4 py-2 fw-bold" size="lg">
          CREATE FREE ACCOUNT
        </Button>
      </Container>
    </div>
  );
};

export default QRCodeFeatureSection;
