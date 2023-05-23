import React from "react";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import HeroHome from "../partials/HeroHome";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import FeaturesZigZag from "../partials/FeaturesZigzag";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Banner from "../partials/Banner";
import Footer from "../partials/Footer";
import Organigram from "../partials/Organigram";
import NavbarTest from "../partials/TestHeader";
import { navbarOptions } from "../utils/Menu";

function Home() {
  return (
    <>
      {/*  Page sections */}
      <HeroHome />
      <FeaturesBlocks />
      <Newsletter />
    </>
  );
}

export default Home;
