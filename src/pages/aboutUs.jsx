import React from "react";
//
import FeaturesZigzag from "../partials/FeaturesZigzag";

const AboutUs = () => {
  //
  return (
    <>
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h1 mb-4" data-aos="fade-up">
            Quienes somos
          </h1>
          <p
            className="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Somos una plataforma de recompensas que busca inspirar y motivar a
            los empleados a través de una experiencia personalizada y
            gratificante. Creemos que cada trabajador es único y merece ser
            reconocido y valorado por sus logros y esfuerzos. Por eso, ofrecemos
            soluciones innovadoras y flexibles que se adaptan a las necesidades
            y preferencias de tu empresa y tus empleados. Con nuestro enfoque
            centrado en las personas y nuestra tecnología avanzada, estamos
            transformando la forma en que las empresas reconocen y recompensan a
            sus trabajadores.
          </p>
        </div>
      </div>
      <FeaturesZigzag />
    </>
  );
};

export default AboutUs;
