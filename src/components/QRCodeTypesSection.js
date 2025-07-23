import React from "react";
import "../styles/QRCodeTypesSection.css";

const qrTypes = [
  { icon: "🌐", title: "URL", desc: "Use this type to open a link to a webpage, contact form, or Youtube." },
  { icon: "📇", title: "vCard", desc: "Use this type to create a digital business card with save to phone feature." },
  { icon: "📄", title: "Plain Text", desc: "Use this type to display text in any language, of up to 300 characters." },
  { icon: "📩", title: "SMS", desc: "Use this type to send a predefined text message to any phone number." },
  { icon: "📧", title: "Email", desc: "Use this type to send an email with a predefined message to any email address." },
  { icon: "📶", title: "WiFi", desc: "Use this type to connect to a WiFi network without typing the password." },
  { icon: "🐦", title: "Twitter", desc: "Use this type to post a tweet, complete with a link and hashtags." },
  { icon: "₿", title: "Bitcoin", desc: "Use this type to request crypto payments from major cryptocurrencies." },
];

const QRCodeTypesSection = () => {
  return (
    <section className="qr-types-section">
      <div className="container">
        <h2 className="qr-types-title">What type of QR Codes can I create for free?</h2>
        <p className="qr-types-subtext">
          We offer these Static QR Codes that are completely free and will never expire. Once generated, it’s yours
          forever but you will not be able to edit the content or track its scans.
        </p>

        <div className="qr-types-grid">
          {qrTypes.map((type, idx) => (
            <div className="qr-type-card" key={idx}>
              <h5><span className="qr-icon">{type.icon}</span> {type.title}</h5>
              <p>{type.desc}</p>
            </div>
          ))}
          <div className="qr-type-card pro-card">
            <div className="pro-label">PRO</div>
            <p className="pro-p">
              Need editable and trackable functionalities instead? Check out our dynamic codes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeTypesSection;
