import React, { useState } from "react";
import { FaTimes, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "../styles/Sidebar.css";

const sidebarData = {
  PRODUCT: [
    { title: "PRO FEATURES", desc: "Create QR Codes your audience want to scan" },
    { title: "QR CODE SOLUTIONS", desc: "New here? Get started with the basics" },
    { title: "PRICING", desc: "Select a plan for any budget" },
    { title: "CUSTOMERS", desc: "Learn how the best companies use PRO" },
    { title: "API", desc: "Integrate QR Code creation in your system" },
  ],
  RESOURCES: [
    { title: "TUTORIALS", desc: "Step-by-step QR creation" },
    { title: "DOCS", desc: "API integration documentation" },
  ],
  SUPPORT: [
    { title: "HELP CENTER", desc: "Get help & support" },
    { title: "CONTACT US", desc: "Reach out to our team" },
  ],
  "ABOUT US": [
    { title: "OUR TEAM", desc: "Meet the people behind" },
    { title: "CAREERS", desc: "Work with us" },
  ],
  BLOG: [
    { title: "LATEST POSTS", desc: "Insights, news, and tips" },
  ],
};

const Sidebar = ({ onClose }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleBack = () => setSelectedMenu(null);

  return (
    <div className="sidebar-overlay">
      <div className="sidebar">
        <div className="sidebar-close" onClick={onClose}>
          <FaTimes size={24} />
        </div>
        {!selectedMenu ? (
          <ul className="sidebar-menu">
            {Object.keys(sidebarData).map((item, index) => (
              <li key={index}>
                <a href="#" onClick={() => setSelectedMenu(item)}>
                  {item}
                  <FaChevronRight />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="submenu">
            <div className="submenu-header" onClick={handleBack}>
              <FaChevronLeft style={{ marginRight: "8px" }} />
              <strong>BACK</strong>
            </div>
            <h5 className="submenu-title">{selectedMenu}</h5>
            <ul className="submenu-items">
              {sidebarData[selectedMenu].map((item, index) => (
                <li key={index}>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
