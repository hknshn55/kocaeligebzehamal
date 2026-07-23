import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import About from "./components/About";
import WorkSteps from "./components/WorkSteps";
import ServiceAreas from "./components/ServiceAreas";
import ContactCta from "./components/ContactCta";
import Footer from "./components/Footer";
import MobileActions from "./components/MobileActions";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <WorkSteps />
        <ServiceAreas />
        <ContactCta />
      </main>

      <Footer />
      <MobileActions />
    </>
  );
}

export default App;