import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/QRGeneratorMain.css';
import QRGeneratorMain from './components/QRGeneratorMain';
import QRIdeasSection from './components/QRIdeasSection';
import QRInfoSection from './components/QRInfoSection';
import PromoBannerSection from './components/PromoBannerSection';
import QRCodeStepsSection from './components/QRCodeStepsSection';
import QRCodeFeatureSection from './components/QRCodeFeatureSection';
import ConnectionsPlatformSection from './components/ConnectionsPlatformSection';
import QRCodeTypesSection from './components/QRCodeTypesSection';
import QRCodeProSection from './components/QRCodeProSection';
import FAQSection from './components/FAQSection'; 
import QRGeneratorPlatformSection from './components/QRGeneratorPlatformSection';
import FooterSection from './components/FooterSection';
function App() {
  return (
    <>
      <QRGeneratorMain />
      <QRIdeasSection />
      <QRInfoSection />
      <PromoBannerSection />
      <QRCodeStepsSection />
      <QRCodeFeatureSection />
      <ConnectionsPlatformSection />
      <QRCodeTypesSection />
      <QRCodeProSection/>
      <FAQSection />
      <QRGeneratorPlatformSection />
      <FooterSection />
    </>
  );
}

export default App;
