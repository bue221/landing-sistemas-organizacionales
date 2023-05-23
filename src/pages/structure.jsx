import React from "react";
//
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Footer from "../partials/Footer";
import Item from "../partials/Item";
import Organigram from "../partials/Organigram";
//
import FODA from "../images/Matriz FODA.jpg";
import InfoOrganigram from "../partials/info";

const Structure = () => {
  return (
    <>
      <div>
        <div className="max-w-8xl mt-[150px] mx-auto text-center pb-12 md:pb-16">
          <h1 className="h1 mb-10" data-aos="fade-up">
            Estructura organizativa
          </h1>
          <Organigram />
        </div>
        <div className="max-w-8xl mx-auto text-center pb-12 md:pb-16">
          <InfoOrganigram />
        </div>
      </div>
    </>
  );
};

export default Structure;
