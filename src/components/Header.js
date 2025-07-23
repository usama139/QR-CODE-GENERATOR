// src/components/Header.js
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaGripLines } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm p-3" style={{ height: "90px", position: "relative" }}>
      <Container fluid>
        {/* Logo & subtitle */}
        <Navbar.Brand href="#" className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <img
              src="https://www.qr-code-generator.com/wp-content/themes/qr/img2/logo-qr.svg"
              alt="Logo"
              height="30"
              className="me-2"
            />
            <strong>QR Code Generator</strong>
          </div>
          <p
            style={{
              fontSize: "0.6rem",
              color: "black",
              fontWeight: "bold",
              marginLeft: "4.4rem",
              marginBottom: 0,
            }}
          >
            CREATE YOUR QR CODE FOR FREE
          </p>
        </Navbar.Brand>

        {/* Right-side content */}
        <div className="d-flex align-items-center ms-auto me-5 gap-3">
          <Nav.Link
            href="#"
            style={{
              color: "blue",
              borderBottom: "2px solid rgb(102, 209, 242)",
              fontWeight: "500",
            }}
          >
            Login
          </Nav.Link>

          <Button
            variant="primary"
            className="px-4"
            style={{
              borderRadius: "20px",
              backgroundColor: "rgb(73, 196, 234)",
              borderColor: "rgb(73, 196, 234)",
              fontWeight: "500",
              marginRight: "1.3rem",
            }}
          >
            SIGN UP
          </Button>
        </div>

        {/* Drag icon in colored box - right corner absolute */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(244, 245, 245)",
            height: "90px",
            width: "90px",
            
          }}
        >
          <FaGripLines size={22} style={{ cursor: "pointer", color: "rgb(73, 196, 234)"}} />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
