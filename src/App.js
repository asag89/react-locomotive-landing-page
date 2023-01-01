
import { useRef, } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import VerticalLocomotive from "./components/VerticalLocomotive";
import HorizontalLocomotive from "./components/HorizontalLocomotive";
function App() {

  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider>
      <main className="App" data-scroll-container ref={containerRef} style={{ padding: 0 }}>
        <ScrollTriggerProxy />
        <Banner key="banner" />
        <HorizontalLocomotive key="horizontalLocomotive" />
        <VerticalLocomotive key="verticalLocomotive" />
        <Footer key="footer" />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
