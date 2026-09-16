import { useEffect, useState } from "react";
import { useCursor } from "./hooks/useCursor.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useCursor();

  return (
    <div>
      <Nav theme={theme} setTheme={setTheme} />
      <Hero />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
