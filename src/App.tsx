import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Foundation from "./components/Foundation";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-h-screen bg-ink font-body text-cream">
      {/* film grain */}
      <div className="noise" aria-hidden />

      <AnimatePresence>
        {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <Cursor />
      <Nav />

      <main>
        <Hero start={loaded} />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Foundation />
        <Interests />
      </main>

      <Contact />
      <Footer />
      <AIAssistant />
    </div>
  );
}
