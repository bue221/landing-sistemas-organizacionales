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
import AboutUs from "./pages/aboutUs";
import MoreAbout from "./pages/moreAbout";
import OurTeam from "./pages/OurTeam";
import MacroProcesosPage from "./pages/macroProcesos";
import OurBsc from "./pages/ourBsc";
import OurDirectionProcess from "./pages/OurDirectionProcess";
import Layout from "./partials/Layout";
import Structure from "./pages/structure";
import Estrategias from "./pages/estrategias";
import Valors from "./pages/valors";
import Politicas from "./pages/politics";
import TypeSociety from "./pages/TypeSociety";

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
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/analysis-matrix" element={<MoreAbout />} />
          <Route exact path="/our-team" element={<OurTeam />} />
          <Route exact path="/structure" element={<Structure />} />
          <Route exact path="/valors" element={<Valors />} />
          <Route exact path="/politics" element={<Politicas />} />
        </Route>
        {/* PDF routes*/}
        <Route exact path="/company-type" element={<TypeSociety />} />
        <Route exact path="/macroprocess" element={<MacroProcesosPage />} />
        <Route exact path="/our-bsc" element={<OurBsc />} />
        <Route exact path="/strategies" element={<Estrategias />} />
        <Route
          exact
          path="/our-direction-process"
          element={<OurDirectionProcess />}
        />
      </Routes>
    </>
  );
}

export default App;
