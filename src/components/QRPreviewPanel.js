import React, { useState } from "react";
import { Button, Collapse, Form } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Dynamic import context
const frameContext = require.context("../assets/frames", false, /\.(png|jpe?g|svg)$/);
const logoContext = require.context("../assets/logos", false, /\.(png|jpe?g|svg)$/);

const QRPreviewPanel = () => {
  const [activeSection, setActiveSection] = useState("frame");

  const [selectedFrame, setSelectedFrame] = useState(0);
  const [selectedShape, setSelectedShape] = useState("square");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedLogo, setSelectedLogo] = useState(null);

  const frameImages = [
    "frame0.png", "frame1.png", "frame2.png", "frame3.png", "frame4.png",
    "frame5.png", "frame6.jpg", "frame7.jpg", "frame8.png", "frame.png"
  ];

  const logoImages = [
    "logo.jpg", "logo11.jpg", "logo2.png"
  ];

  return (
    <div
      className="p-3 rounded"
      style={{
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        minHeight: "600px",
      }}
    >
      {/* QR Code Preview */}
      <div className="text-center mb-3 position-relative">
        <img
          src={frameContext(`./${frameImages[selectedFrame]}`)}
          alt="Selected Frame"
          style={{ width: "180px", height: "180px", objectFit: "contain" }}
        />
        {selectedLogo && (
          <img
            src={logoContext(`./${selectedLogo}`)}
            alt="Logo"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "40px",
              height: "40px",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              background: "#fff",
              padding: "4px",
            }}
          />
        )}
      </div>

      {/* Frame Section */}
      <div className="mb-3">
        <div
          className="d-flex align-items-center justify-content-between px-3 py-2"
          style={{
            backgroundColor: "#00a9f1",
            color: "white",
            fontWeight: "bold",
            borderTopLeftRadius: "6px",
            borderTopRightRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() =>
            setActiveSection(activeSection === "frame" ? "" : "frame")
          }
        >
          <div>
            <span>FRAME</span>
            <span className="badge bg-dark ms-2">NEW!</span>
          </div>
          {activeSection === "frame" ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        <Collapse in={activeSection === "frame"}>
          <div
            className="d-flex flex-wrap p-2"
            style={{
              gap: "10px",
              backgroundColor: "#f9f9f9",
              border: "1px solid #ccc",
              borderTop: "none",
              borderBottomLeftRadius: "6px",
              borderBottomRightRadius: "6px",
            }}
          >
            {frameImages.map((img, i) => (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedFrame(i);
                }}
                style={{
                  width: "51px",
                  height: "55px",
                  border:
                    selectedFrame === i ? "2px solid #00a9f1" : "1px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={frameContext(`./${img}`)}
                  alt={`Frame ${i}`}
                  style={{ width: "90%", height: "90%", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </Collapse>
      </div>

      {/* Shape & Color Section */}
      <div className="mb-2">
        <div
          className="d-flex justify-content-between align-items-center border px-3 py-2 bg-light fw-semibold"
          style={{ cursor: "pointer" }}
          onClick={() =>
            setActiveSection(activeSection === "shape" ? "" : "shape")
          }
        >
          <span>SHAPE & COLOR</span>
          {activeSection === "shape" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <Collapse in={activeSection === "shape"}>
          <div className="mt-2 p-3 border bg-light rounded">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Select Shape</Form.Label>
              <Form.Select
                value={selectedShape}
                onChange={(e) => setSelectedShape(e.target.value)}
              >
                <option value="square">Square</option>
                <option value="circle">Circle</option>
                <option value="rounded">Rounded</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label className="fw-bold">Select Color</Form.Label>
              <Form.Control
                type="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              />
            </Form.Group>
          </div>
        </Collapse>
      </div>

      {/* Logo Selection Section */}
      <div className="mb-3">
        <div
          className="d-flex justify-content-between align-items-center border px-3 py-2 bg-light fw-semibold"
          style={{ cursor: "pointer" }}
          onClick={() =>
            setActiveSection(activeSection === "logo" ? "" : "logo")
          }
        >
          <span>LOGO</span>
          {activeSection === "logo" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <Collapse in={activeSection === "logo"}>
          <div className="mt-2 p-3 border bg-light rounded d-flex flex-wrap gap-2">
            {logoImages.map((logo, i) => (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedLogo(logo);
                }}
                style={{
                  width: "50px",
                  height: "50px",
                  border:
                    selectedLogo === logo
                      ? "2px solid #00a9f1"
                      : "1px solid #ccc",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={logoContext(`./${logo}`)}
                  alt={`Logo ${i}`}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </Collapse>
      </div>

      {/* Download Buttons */}
      <div className="d-flex flex-column gap-2">
        <Button
          variant="success"
          className="fw-bold"
          style={{ backgroundColor: "#b8d200", border: "none" }}
        >
          <MdOutlineFileDownload size={18} className="me-2" />
          DOWNLOAD JPG
        </Button>
        <Button
          variant="outline-success"
          className="fw-bold"
          style={{ borderColor: "#b8d200", color: "#b8d200" }}
        >
          <MdOutlineFileDownload size={18} className="me-2" />
          PRINT QUALITY SVG/EPS
        </Button>
      </div>
    </div>
  );
};

export default QRPreviewPanel;
