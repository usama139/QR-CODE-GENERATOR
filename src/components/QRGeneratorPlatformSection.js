import React from 'react';
import '../styles/QRGeneratorPlatformSection.css';
import generatorImg from '../assets/generator/generator.png'; // Make sure the image path is correct

function QRGeneratorPlatformSection() {
  return (
    <section className="qr-generator-platform">
      <div className="text-content">
        <h2>
          Your <span>all-in-one QR Code</span> marketing platform
        </h2>
        <p>
          Now you can fully customize your QR Codes with your brand colors and company logo,
          get scan statistics, and even edit the content after print.
        </p>
        <div className="buttons">
          <button className="btn-primary">SIGN UP NOW</button>
          <button className="btn-outline">LEARN MORE</button>
        </div>
      </div>
      <div className="image-content">
        <img src={generatorImg} alt="QR Generator Screenshot" />
      </div>
    </section>
  );
}

export default QRGeneratorPlatformSection;
