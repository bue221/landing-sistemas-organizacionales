import React from "react";
//
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Footer from "../partials/Footer";
import Item from "../partials/Item";
import Organigram from "../partials/Organigram";
//
import FODA2 from "../images/Matriz Análisis DAFO - FODA METAMERITO-1.png";

const MoreAbout = () => {
  return (
    <>
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h1 mb-4" data-aos="fade-up">
            ¡Bienvenido a nuestra página de Estrategias, Politicas y Análisis
            PESTAL!
          </h1>
          <p
            className="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Aquí encontrarás información valiosa y detallada sobre los factores
            externos que pueden afectar el éxito de tu empresa. A través de
            nuestro análisis PESTAL (Político, Económico, Social, Tecnológico,
            Ambiental y Legal), te proporcionamos una visión más completa del
            entorno en el que operas y te ayudamos a tomar decisiones
            informadas. Explora nuestra página y descubre cómo podemos ayudarte
            a mantener tu empresa en la cima del mercado.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h3 className="h3 mt-20 mb-3  text-center">Matriz FODA</h3>
        <div className="max-w-3xl align-self-center md:pr-4 lg:pr-12 xl:pr-16 flex align-center justify-center">
          <img src={FODA2} alt="FODA2" className="self-center" />
        </div>
      </div>
      <div class="container max-w-3xl mx-auto my-10">
        <h1 class="text-3xl font-bold mb-5">Análisis PESTAL</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div class="bg-white rounded-lg shadow-lg p-5">
            <h2 class="text-xl font-bold mb-3">Político</h2>
            <ul>
              <p>
                <strong>Regulaciones laborales:</strong> Es importante cumplir
                con las leyes y regulaciones relacionadas con la contratación y
                el empleo de trabajadores en la región en la que se opere.
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
                  políticas de comercio internacional y los acuerdos comerciales
                  que pueden afectar sus operaciones.
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
                  sean relevantes y atractivos.
                </p>
              </li>
              <li>
                <p>
                  <strong> Ciclos económicos:</strong>
                  Los ciclos económicos pueden afectar la capacidad de la
                  empresa para ofrecer incentivos atractivos a los trabajadores,
                  especialmente en épocas de recesión económica.
                </p>
              </li>
              <li>
                <p>
                  <strong>Competencia:</strong>
                  La competencia en el mercado puede influir en los precios y la
                  oferta de servicios de incentivos atractivos.
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
                  La automatización de ciertos trabajos puede afectar la demanda
                  de servicios de incentivos en ciertos sectores de la fuerza
                  laboral.
                </p>
              </li>
              <li>
                <p>
                  <strong>Ciberseguridad:</strong>
                  Es importante considerar la seguridad de la información y los
                  datos de los trabajadores al ofrecer servicios en línea o a
                  través de plataformas digitales.
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
                  Los cambios en los valores y las actitudes de los trabajadores
                  pueden afectar la demanda de servicios de incentivos.
                </p>
              </li>
              <li>
                <p>
                  <strong>Tendencias de estilo de vida:</strong>
                  Las tendencias de estilo de vida, como la creciente
                  preocupación por la salud y el bienestar, pueden influir en la
                  demanda de incentivos específicos.
                </p>
              </li>
            </ul>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-5">
            <h2 class="text-xl font-bold mb-3">Ambiental:</h2>
            <p>
              La plataforma de recompensas puede ser vista como una forma de
              mejorar el ambiente laboral al aumentar la motivación y
              satisfacción de los empleados. Además, la plataforma también puede
              fomentar prácticas laborales sostenibles y responsables.
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-5">
            <h2 class="text-xl font-bold mb-3">Legal:</h2>
            <p>
              La plataforma de recompensas debe cumplir con todas las leyes y
              regulaciones laborales y fiscales de los países donde opera,
              además de proteger la privacidad y seguridad de los datos
              personales de los empleados.
            </p>
          </div>
        </div>
        <p class="mt-10">
          En resumen, el análisis PETAL es esencial para la startup que busca
          motivar a sus trabajadores, ya que permite evaluar el entorno y
          diseñar una estrategia adaptativa para lograr el éxito empresarial y
          el bienestar de los trabajadores.
        </p>
      </div>
    </>
  );
};

export default MoreAbout;
