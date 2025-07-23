import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  BsGlobe, BsPersonVcard, BsChatLeftText, BsEnvelopeAt, BsWifi, BsCurrencyBitcoin,
  BsTwitter, BsFacebook, BsFilePdf, BsMusicNote, BsPhone, BsImage, BsAppIndicator
} from "react-icons/bs";
import { MdQrCode2 } from "react-icons/md";
import "../styles/QRInputSection.css"; 

const QRInputSection = () => {
  const [selectedType, setSelectedType] = useState("VCARD");

  const qrTypes = [
    { label: "URL", icon: <BsGlobe /> },
    { label: "VCARD", icon: <BsPersonVcard /> },
    { label: "TEXT", icon: <BsChatLeftText /> },
    { label: "E-MAIL", icon: <BsEnvelopeAt /> },
    { label: "SMS", icon: <BsPhone /> }, 
    { label: "WIFI", icon: <BsWifi /> },
    { label: "BITCOIN", icon: <BsCurrencyBitcoin /> },
    { label: "TWITTER", icon: <BsTwitter /> },
    { label: "FACEBOOK", icon: <BsFacebook /> },
    { label: "PDF", icon: <BsFilePdf /> },
    { label: "MP3", icon: <BsMusicNote /> },
    { label: "APP STORES", icon: <BsAppIndicator /> },
    { label: "IMAGES", icon: <BsImage /> },
    { label: "2D BARCODES", icon: <MdQrCode2 /> },
  ];

  const renderFormFields = () => {
    switch (selectedType) {
      case "VCARD":
        return (
          <>
            <h5 className="mb-3">vCard QR Code</h5>
            <div className="row mb-2">
              <div className="col-md-6"><Form.Control placeholder="First name" /></div>
              <div className="col-md-6"><Form.Control placeholder="Last name" /></div>
            </div>
            <Form.Control placeholder="Mobile" className="mb-2" />
            <div className="row mb-2">
              <div className="col-md-6"><Form.Control placeholder="Phone" /></div>
              <div className="col-md-6"><Form.Control placeholder="Fax" /></div>
            </div>
            <Form.Control type="email" placeholder="your@email.com" className="mb-2" />
            <div className="row mb-2">
              <div className="col-md-6"><Form.Control placeholder="Company" /></div>
              <div className="col-md-6"><Form.Control placeholder="Your Job" /></div>
            </div>
            <Form.Control placeholder="Street" className="mb-2" />
            <div className="row mb-2">
              <div className="col-md-8"><Form.Control placeholder="City" /></div>
              <div className="col-md-4"><Form.Control placeholder="ZIP" /></div>
            </div>
            <Form.Control placeholder="State" className="mb-2" />
            <Form.Control placeholder="Country" className="mb-2" />
            <Form.Control placeholder="Website" className="mb-4" />
          </>
        );

      case "TEXT":
        return <Form.Control as="textarea" rows={4} placeholder="Enter your text" />;

      case "URL":
        return <Form.Control type="url" placeholder="https://your-website.com" />;

      case "E-MAIL":
        return (
          <>
            <Form.Control placeholder="Email address" className="mb-2" />
            <Form.Control placeholder="Subject" className="mb-2" />
            <Form.Control as="textarea" placeholder="Message" />
          </>
        );

      case "SMS":
        return (
          <>
            <Form.Control placeholder="Phone Number" className="mb-2" />
            <Form.Control as="textarea" placeholder="Message" />
          </>
        );

      case "WIFI":
        return (
          <>
            <Form.Control placeholder="SSID" className="mb-2" />
            <Form.Control placeholder="Password" className="mb-2" />
            <Form.Select className="mb-2">
              <option value="">Encryption</option>
              <option value="WPA">WPA/WPA2</option>
              <option value="WEP">WEP</option>
              <option value="nopass">None</option>
            </Form.Select>
          </>
        );

      case "BITCOIN":
        return (
          <>
            <Form.Control placeholder="Bitcoin Address" className="mb-2" />
            <Form.Control placeholder="Amount (BTC)" className="mb-2" />
            <Form.Control placeholder="Message" />
          </>
        );

      case "TWITTER":
        return <Form.Control placeholder="Twitter URL or Username" />;

      case "FACEBOOK":
        return <Form.Control placeholder="Facebook Page URL" />;

      case "PDF":
      case "MP3":
      case "IMAGES":
      case "APP STORES":
      case "2D BARCODES":
        return (
          <div className="text-center p-4 rounded" style={{ border: "2px dashed #ccc", backgroundColor: "#fefefe" }}>
            <h5 className="text-muted">Upload your file to generate QR Code</h5>
            <button className="btn btn-outline-primary mt-2">Upload</button>
          </div>
        );

      default:
        return (
          <div className="text-center p-4 rounded" style={{ border: "2px dashed #ccc", backgroundColor: "#fefefe" }}>
            <h5 className="text-muted">Enter your data to generate QR Code</h5>
          </div>
        );
    }
  };

  return (
    <div className="p-4 rounded" style={{ backgroundColor: "white", boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}>
      {/* QR Type Buttons with Hover */}
      <div className="row text-center mb-4">
        {qrTypes.map((type, index) => (
          <div
            key={index}
            className="col-6 col-md-3 mb-3"
            onClick={() => setSelectedType(type.label)}
          >
            <div
              className={`qr-option d-flex align-items-center gap-2 px-2 py-1 rounded ${selectedType === type.label ? 'bg-light border' : ''}`}
            >
              <span style={{ fontSize: "1rem", color: "#5a5a5a" }}>{type.icon}</span>
              <span className="fw-semibold" style={{ fontSize: "0.85rem", color: "#5a5a5a" }}>
                {type.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Input Fields */}
      <div className="mb-3">
        {renderFormFields()}
      </div>

      {/* Generate Button + Scan Tracking */}
      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-success px-4 fw-bold">Generate QR Code</button>
        <Form.Check type="switch" label="Scan tracking" />
      </div>
    </div>
  );
};

export default QRInputSection;
