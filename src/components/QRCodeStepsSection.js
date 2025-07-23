// src/components/QRCodeStepsSection.js
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/QRCodeStepsSection.css';

import step1Image from '../assets/step/step1.png';
import step3Image from '../assets/step/step3.png';

const QRCodeStepsSection = () => {
  const lineRef = useRef(null);

  useEffect(() => {
  const line = lineRef.current;

  const updateLine = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const rawPercent = scrollTop / docHeight;

    // Slow down the progress using easing (quadratic)
    const easedPercent = Math.pow(rawPercent, 0.5); // you can use 0.3 for even slower

    if (line) {
      line.style.background = `linear-gradient(to bottom, #00a9f1 ${easedPercent * 100}%, #e0e0e0 ${easedPercent * 100}%)`;
    }

    requestAnimationFrame(updateLine);
  };

  requestAnimationFrame(updateLine);

  return () => cancelAnimationFrame(updateLine);
}, []);


  return (
    <div className="qr-steps-section py-5">
      <Container>
        <h2 className="text-center fw-bold mb-2">How do I create a free QR Code?</h2>
        <p className="text-center text-muted mb-5">We’ll show you how in just three simple steps</p>

        <div className="position-relative steps-container">
          <div className="step-line" ref={lineRef}></div>

          {/* Step 1 */}
          <Row className="align-items-center mb-5 step-row">
            <Col md={5} className="text-md-end mb-3 mb-md-0">
              <div className="white-box shadow p-3">
                <img src={step1Image} alt="Step 1 Options" className="img-fluid" />
              </div>
            </Col>
            <Col md={2} className="text-center position-relative">
              <div className="step-circle">1</div>
            </Col>
            <Col md={5}>
              <h5 className="fw-bold">Select which type</h5>
              <p className="text-muted small">
                You may choose from URL, vCard, Plain Text, Email, SMS, Twitter, WiFi, and Bitcoin.
                However, these free QR Codes are not editable and trackable.
              </p>
            </Col>
          </Row>

          {/* Step 2 */}
          <Row className="align-items-center mb-5 step-row">
            <Col md={5} className="text-md-end mb-3 mb-md-0">
              <div className="white-box shadow p-3">
                <div className="floating-box">
                  <span className="typing-text">www.your-website.com</span>
                  <p className="text-muted small">(Your QR Code will be generated automatically)</p>
                </div>
              </div>
            </Col>
            <Col md={2} className="text-center position-relative">
              <div className="step-circle">2</div>
            </Col>
            <Col md={5}>
              <h5 className="fw-bold">Fill in the details</h5>
              <p className="text-muted small">
                Enter all the information needed in the fields that appear. This could be a link, contact info, or any other type of info.
                Once you’re done, select “Generate.”
              </p>
            </Col>
          </Row>

          {/* Step 3 */}
          <Row className="align-items-center mb-5 step-row">
            <Col md={5} className="text-md-end mb-3 mb-md-0">
              <div className="white-box shadow p-3">
                <img src={step3Image} alt="Step 3 QR" className="img-fluid" />
              </div>
            </Col>
            <Col md={2} className="text-center position-relative">
              <div className="step-circle">3</div>
            </Col>
            <Col md={5}>
              <h5 className="fw-bold">Download the QR Code</h5>
              <p className="text-muted small">
                Choose colors, logos, and frame styles to attract more scans or just download the default version.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default QRCodeStepsSection;
