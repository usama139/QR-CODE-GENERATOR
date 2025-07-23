import React, { useState } from 'react';
import '../styles/FAQSection.css';

const faqData = [
  {
    category: 'Basics',
    questions: [
      {
        q: 'What is a QR Code generator?',
        a: `It is a niche tool used to generate different types of QR Codes. Depending on your purpose, 
        you can use our generator to create QR Codes to open a website, view a PDF file, listen to music, 
        watch YouTube videos, store image files, connect to WiFi, and much more.`
      },
      { q: 'Are QR Codes free?', a: 'Yes, most basic QR codes are free to generate.' },
      { q: 'Can I use the generated QR Codes for commercial purposes?', a: 'Yes, they can be used commercially.' },
      { q: 'What kind of information can be stored in a QR Code?', a: 'URLs, text, contact info, etc.' },
      { q: 'Can I track QR Code scans?', a: 'Yes, with dynamic QR codes and analytics.' },
      { q: 'Do QR Codes expire?', a: 'Static ones don’t. Dynamic can be time-bound based on service.' },
      { q: 'What does Static vs Dynamic mean?', a: 'Static = fixed; Dynamic = editable/tracked.' },
      { q: 'How do I manage QR Codes?', a: 'Using a dashboard if the service offers it.' }
    ]
  },
  {
    category: 'Creating & Designing',
    questions: [
      {
        q: 'Can I create different QR Codes for same content?',
        a: `Yes. QR Codes can vary by version, error correction, and masking.`
      },
      { q: 'Can I customize QR Code with my logo?', a: 'Yes, use a customizer to upload logos.' },
      { q: 'Do QR Codes have to be black and white?', a: 'No, you can style them with color.' },
      { q: 'Can a QR Code be edited?', a: 'Only dynamic ones can be updated.' },
      { q: 'How to generate a large batch of QR Codes?', a: 'Use bulk generator tools.' }
    ]
  },
  {
    category: 'Scanning & Printing',
    questions: [
      {
        q: 'What graphic formats do QR Codes support?',
        a: `You can download them in high-resolution JPG format. To download in PNG, SVG, or even EPS, account signup is required. Please take note that if you require the QR Code image in EPS format, we only offer them in black and white without any designs.`
      },
      { q: 'What Shoud I Know Before Printing my QR Code?', a: 'You need to know the right size, the right contrasting colors, and always test it before printing. We’ve compiled a printing guide to help you launch the best marketing campaign and to avoid costly errors.' },
      { q: 'How to read/scan a QR Code?', a: 'If you’re using an iOS device, just open the camera app and hold it over a QR Code until a notification pops up. Same for Android or other mobile devices, except that if nothing happened, you may want to check your settings and see if QR Code scanning is enabled. Otherwise, search for a reliable QR Code reader in your app store, most of them are free!' },
      { q: 'Can a QR Code be edited?', a: 'Only dynamic ones can be updated.' },
      { q: 'How to generate a large batch of QR Codes?', a: 'Use bulk generator tools.' }
    ]
  }
];

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleAnswer = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="faq-section container my-5">
      <h2 className="faq-heading text-center">Frequently asked questions (FAQs)</h2>
      {faqData.map((cat, categoryIndex) => (
        <div key={cat.category} className="faq-category">
          <h5 className="faq-category-title text-center mt-4 mb-3">{cat.category}</h5>
          <div className="faq-box rounded border p-3">
            {cat.questions.map((item, questionIndex) => {
              const key = `${categoryIndex}-${questionIndex}`;
              return (
                <div key={item.q} className="faq-item">
                  <div
                    className="faq-question d-flex justify-content-between align-items-center"
                    onClick={() => toggleAnswer(categoryIndex, questionIndex)}
                  >
                    <strong>{item.q}</strong>
                    <span>{openIndexes[key] ? '▲' : '▼'}</span>
                  </div>
                  {openIndexes[key] && <div className="faq-answer mt-2">{item.a}</div>}
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
