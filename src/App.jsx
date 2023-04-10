import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// Aos styles
import "aos/dist/aos.css";
import "./css/style.css";
// Prime Theme, Icons, Core
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// Animations
import AOS from "aos";
// Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import AboutUs from "./pages/aboutUs";
import MoreAbout from "./pages/moreAbout";
import OurTeam from "./pages/OurTeam";
import MacroProcesosPage from "./pages/macroProcesos";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/macroprocesos" element={<MacroProcesosPage />} />
        <Route exact path="/more-about" element={<MoreAbout />} />
        <Route exact path="/our-team" element={<OurTeam />} />
      </Routes>
    </>
  );
}

export default App;
