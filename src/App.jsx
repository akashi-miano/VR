import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import bgCircle from "./assets/circle.png";
import Experience from "./components/Experience";
import Video from "./components/Video";
import Headsets from "./components/Headsets";
import Testimonials from "./components/Testimonials";
import Explore from "./components/Explore";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 400,
    });
  });
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Video />
      <Headsets />
      <Testimonials />
      <Explore />
    </>
  );
}

export default App;
