import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/FooterSection.css";

// ✅ Import your local images from assets folder
import gdprImg from "../assets/footer/gdpr.png";
import ccpaImg from "../assets/footer/ccpa.png";
import soc2Img from "../assets/footer/soc2.png";

const FooterSection = () => {
  return (
    <footer className="footer-section py-5">
      <Container>
        <Row className="mb-4">
          <Col md={3}>
            <p className="footer-description">
              QR Code Generator lets you create memorable marketing campaigns
              with trackable QR Codes—designed by you.
            </p>
            <p className="footer-made">
              <em>
                Made with <span className="text-danger">❤</span> in Pakistan
              </em>
            </p>
            <div className="social-icons">
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
            </div>
          </Col>

          <Col md={2}>
            <h6 className="footer-heading">PRODUCT</h6>
            <ul className="footer-links">
              <li>PRO Features</li>
              <li>QR Code Solutions</li>
              <li>Pricing</li>
              <li>Customers</li>
              <li>API</li>
              <li>Guides</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className="footer-heading">RESOURCES</h6>
            <ul className="footer-links">
              <li>QR Codes in Marketing</li>
              <li>QR Codes on Materials</li>
              <li>QR Codes for Business</li>
              <li>QR Codes for Education</li>
              <li>QR Codes for Nonprofits</li>
              <li>QR Codes for Personal Use</li>
              <li>QR Codes for Holidays & Occasions</li>
              <li>QR Code Printing Shop</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className="footer-heading">SUPPORT</h6>
            <ul className="footer-links">
              <li>Help Center</li>
            </ul>
            <h6 className="footer-heading mt-3">ABOUT US</h6>
            <ul className="footer-links">
              <li>Bitly Europe</li>
              <li>Partnership Program</li>
              <li>Accessibility Statement</li>
              <li>Accessibility Report</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="footer-heading">FROM OUR BLOG</h6>
            <ul className="footer-blog">
              <li>Data Matrix vs. QR Codes: An Overview of the Differences</li>
              <li>
                The Current State of QR Codes for Marketers (With New 2025 Data)
              </li>
              <li>
                How to Use QR Codes on Resumes (+ Why You Should)
              </li>
              <li>
                5 Ways Teachers Successfully Use QR Codes in the Classroom
              </li>
            </ul>
            <div className="compliance-badges mt-3">
              <img src={gdprImg} alt="GDPR" />
              <img src={ccpaImg} alt="CCPA" />
              <img src={soc2Img} alt="SOC2" />
            </div>
          </Col>
        </Row>

        <hr />

        <p className="footer-bottom-text">
          We strive to make our use of language as inclusive as possible to
          support our commitment to Diversity, Equity, and Inclusion (DE&I). As
          we continue to learn and develop this framework, some of our older
          content may need to be updated.
          <br />
          <a href="#">Read more about our core values</a> here.
        </p>

        <hr />

        <Row className="footer-bottom">
          <Col md={6}>
            <p className="text-muted small mb-0">
              © qr-code-generator.com 2025, ‘QR Code’ is a registered trademark
              of DENSO WAVE INCORPORATED
            </p>
          </Col>
          <Col md={6} className="text-end">
            <a href="#">Terms of Service</a>
            <a href="#">Legal Notice</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <select className="language-select">
              <option>EN</option>
              <option>DE</option>
            </select>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
