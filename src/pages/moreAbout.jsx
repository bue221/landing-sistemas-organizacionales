import React from "react";
//
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Footer from "../partials/Footer";
import Item from "../partials/Item";
import Organigram from "../partials/Organigram";
//
import FODA from "../images/Matriz FODA.jpg";

const MoreAbout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              ¡Bienvenido a nuestra página de Estrategias, Politicas y Análisis
              PEAS!
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Aquí encontrarás información valiosa y detallada sobre los
              factores externos que pueden afectar el éxito de tu empresa. A
              través de nuestro análisis PESTAL (Político, Económico, Social,
              Tecnológico, Ambiental y Legal), te proporcionamos una visión más
              completa del entorno en el que operas y te ayudamos a tomar
              decisiones informadas. Explora nuestra página y descubre cómo
              podemos ayudarte a mantener tu empresa en la cima del mercado.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="max-w-3xl md:pr-4 lg:pr-12 xl:pr-16">
            <h3 className="h3 mb-5  text-center">Politicas de la empresa</h3>
            <ul className="text-lg text-gray-400 -mb-2">
              <Item text="Política de privacidad: Nos comprometemos a proteger la privacidad y los datos personales de nuestros usuarios de acuerdo con las regulaciones y normativas aplicables." />
              <Item text="Política de seguridad: Nos comprometemos a garantizar la seguridad y protección de la plataforma y los datos de nuestros usuarios mediante el uso de tecnologías y protocolos de seguridad avanzados." />
              <Item text="Política de servicio al cliente: Nos comprometemos a ofrecer un servicio de atención al cliente eficiente y de calidad, para responder a las necesidades y preguntas de nuestros usuarios de manera oportuna y efectiva." />
              <Item text="Política de recompensas: Nos comprometemos a ofrecer una amplia variedad de recompensas atractivas y motivadoras para los trabajadores, que reflejen las necesidades y preferencias de los mismos, y que sean justas y equitativas." />
              <Item text="Política de transparencia: Nos comprometemos a mantener una comunicación clara y abierta con nuestros clientes y usuarios sobre el funcionamiento y beneficios de la plataforma, así como sobre cualquier cambio o actualización que se realice en la misma." />
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h3 className="h3 mt-20 mb-3  text-center">Matriz FODA</h3>
          <div className="max-w-3xl align-self-center md:pr-4 lg:pr-12 xl:pr-16 flex align-center justify-center">
            <img src={FODA} alt="FODA" className="self-center" />
          </div>
        </div>
        <div class="container max-w-3xl mx-auto my-10">
          <h1 class="text-3xl font-bold mb-5">Análisis PEAS</h1>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg shadow-lg p-5">
              <h2 class="text-xl font-bold mb-3">Político</h2>
              <ul>
                <p>
                  <strong>Regulaciones laborales:</strong> Es importante cumplir
                  con las leyes y regulaciones relacionadas con la contratación
                  y el empleo de trabajadores en la región en la que se opere.
                </p>
                <li>
                  <p>
                    <strong>Políticas fiscales:</strong> Las políticas fiscales,
                    como los impuestos y las tasas de interés, pueden afectar la
                    rentabilidad de la empresa y su capacidad para ofrecer
                    incentivos atractivos a los trabajadores.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Políticas de comercio internacional:</strong> Si la
                    empresa opera a nivel internacional, debe considerar las
                    políticas de comercio internacional y los acuerdos
                    comerciales que pueden afectar sus operaciones.
                  </p>
                </li>
              </ul>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-5">
              <h2 class="text-xl font-bold mb-3">Económico</h2>
              <ul>
                <li>
                  <p>
                    <strong>Tendencias del mercado:</strong>
                    Es importante analizar las tendencias del mercado y las
                    demandas de los clientes para poder ofrecer incentivos que
                    sean relevantes y atractivos. Ciclos económicos: Los ciclos
                    económicos pueden afectar la capacidad de la empresa para
                    ofrecer incentivos atractivos a los trabajadores,
                    especialmente en épocas de recesión económica. Competencia:
                    La competencia en el mercado puede influir en los precios y
                    la oferta de servicios de incentivos atractivos.
                  </p>
                </li>
                <li>
                  <p>
                    <strong> Ciclos económicos:</strong>
                    Los ciclos económicos pueden afectar la capacidad de la
                    empresa para ofrecer incentivos atractivos a los
                    trabajadores, especialmente en épocas de recesión económica.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Competencia:</strong>
                    La competencia en el mercado puede influir en los precios y
                    la oferta de servicios de incentivos atractivos.
                  </p>
                </li>
              </ul>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-5">
              <h2 class="text-xl font-bold mb-3">Tecnológico</h2>
              <ul>
                <li>
                  <p>
                    <strong>Avances tecnológicos:</strong>
                    Los avances tecnológicos pueden influir en los servicios de
                    incentivos que se ofrecen, por ejemplo, a través de
                    plataformas en línea o aplicaciones móviles.
                  </p>
                </li>
                <li>
                  <p>
                    <strong> Automatización:</strong>
                    La automatización de ciertos trabajos puede afectar la
                    demanda de servicios de incentivos en ciertos sectores de la
                    fuerza laboral.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Ciberseguridad:</strong>
                    Es importante considerar la seguridad de la información y
                    los datos de los trabajadores al ofrecer servicios en línea
                    o a través de plataformas digitales.
                  </p>
                </li>
              </ul>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-5">
              <h2 class="text-xl font-bold mb-3">Sociocultural</h2>
              <ul>
                <li>
                  <p>
                    <strong>Cambios en los valores de los trabajadores:</strong>
                    Los cambios en los valores y las actitudes de los
                    trabajadores pueden afectar la demanda de servicios de
                    incentivos.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Tendencias de estilo de vida:</strong>
                    Las tendencias de estilo de vida, como la creciente
                    preocupación por la salud y el bienestar, pueden influir en
                    la demanda de incentivos específicos.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <p class="mt-10">
            En resumen, el análisis PEAS es esencial para la startup que busca
            motivar a sus trabajadores, ya que permite evaluar el entorno y
            diseñar una estrategia adaptativa para lograr el éxito empresarial y
            el bienestar de los trabajadores.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MoreAbout;
