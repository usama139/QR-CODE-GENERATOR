import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaGripLines } from "react-icons/fa";

const Header = ({ onMenuClick }) => {
  return (
    <Navbar
      bg="white"
      expand="lg"
      className="shadow-sm p-3"
      style={{ minHeight: "90px", position: "relative" }}
    >
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <img
              src="https://www.qr-code-generator.com/wp-content/themes/qr/img2/logo-qr.svg"
              alt="Logo"
              height="30"
              className="me-2"
            />
            <strong style={{ fontSize: "1rem" }}>QR Code Generator</strong>
          </div>
          <p
            className="d-none d-md-block"
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

        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <Nav.Link
              href="#"
              className="px-2"
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
                marginRight: "5rem",
              }}
            >
              SIGN UP
            </Button>
          </Nav>
        </Navbar.Collapse>

        {/* Right drag icon */}
       <div
  className="d-flex"
  style={{
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgb(244, 245, 245)",
    height: "90px",
    width: "90px",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1, // to ensure it's on top of Navbar content
  }}
  onClick={onMenuClick}
>
  <FaGripLines size={22} style={{ color: "rgb(73, 196, 234)" }} />
</div>

      </Container>
    </Navbar>
  );
};

export default Header;
