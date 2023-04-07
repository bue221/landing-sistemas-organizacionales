import React from "react";
//
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Footer from "../partials/Footer";
import Organigram from "../partials/Organigram";
import FeaturesZigzag from "../partials/FeaturesZigzag";
import Item from "../partials/Item";
import InfoOrganigram from "../partials/info";

const AboutUs = () => {
  //
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
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
              reconocido y valorado por sus logros y esfuerzos. Por eso,
              ofrecemos soluciones innovadoras y flexibles que se adaptan a las
              necesidades y preferencias de tu empresa y tus empleados. Con
              nuestro enfoque centrado en las personas y nuestra tecnología
              avanzada, estamos transformando la forma en que las empresas
              reconocen y recompensan a sus trabajadores.
            </p>
          </div>
        </div>
        <div>
          <div className="max-w-8xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-10" data-aos="fade-up">
              Estructura organizativa
            </h1>
            <Organigram />
          </div>
          <div className="max-w-8xl mx-auto text-center pb-12 md:pb-16">
            <InfoOrganigram />
          </div>
        </div>
        <FeaturesZigzag />
        <div className="flex items-center justify-center">
          <div className="max-w-3xl md:pr-4 lg:pr-12 xl:pr-16">
            <h3 className="h3 mb-3  text-center">Nuestro valores</h3>
            <ul className="text-lg text-gray-400 -mb-2">
              <Item text="Compromiso: Nos comprometemos a ofrecer un servicio de calidad y a trabajar en estrecha colaboración con nuestros clientes para satisfacer sus necesidades." />
              <Item text="Innovación: Nos comprometemos a mantenernos a la vanguardia de la tecnología y la innovación para ofrecer una plataforma de recompensas efectiva y escalable." />
              <Item text="Transparencia: Nos comprometemos a ser transparentes en todas nuestras operaciones y a mantener una comunicación clara y abierta con nuestros clientes." />
              <Item text="Ética: Nos comprometemos a actuar con integridad y ética profesional en todas nuestras operaciones y relaciones." />
              <Item text="Equidad: Nos comprometemos a tratar a todos los trabajadores de manera justa y equitativa, sin discriminación de ningún tipo." />
            </ul>
          </div>
        </div>
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
