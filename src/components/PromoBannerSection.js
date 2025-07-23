// src/components/PromoBannerSection.js
import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/PromoBannerSection.css";

const PromoBannerSection = () => {
  return (
    <div className="promo-banner1 py-5" style={{ marginBottom: "90px" }}>
      <Container className="text-center">
        <h2 className="fw-bold mb-3">
          Instantly make your <span className="text-pink">materials better</span>
        </h2>
        <p className="text-muted mb-4">
          Add editable and trackable QR Codes on anything you want with full branding and customization features.
        </p>
        <Button className="promo-btn px-4 py-2 fw-bold" size="lg">
          CREATE FREE ACCOUNT
        </Button>
      </Container>
    </div>
  );
};

export default PromoBannerSection;
