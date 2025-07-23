// src/components/PromoBannerSection.js
import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/QRCodeProSection.css";


const QRCodeProSection = () => {
  return (
    <div className="promo-banner2 py-5" style={{ marginTop: "90px" }}>
      <Container className="text-center">
        <h2 className="fw-bold mb-3">
         When in doubt,<span className="text-pink"> go PRO</span>
        </h2>
        <p className="text-muted mb-4">
          All of our Dynamic QR Codes are mistake-proof. Made a typo? Fixed. Link no longer working? Replaced. Old images or files? <br></br>Refreshed.
        </p>
        <Button className="promo-btn px-4 py-2 fw-bold" size="lg">
          CREATE FREE ACCOUNT
        </Button>
      </Container>
    </div>
  );
};

export default QRCodeProSection;
