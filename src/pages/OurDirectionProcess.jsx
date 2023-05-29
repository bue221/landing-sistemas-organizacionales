import React from "react";
import filePDF from "../pdf/Procesos.pdf";

const reason = [
  {
    titulo: "Impacto significativo",
    descripcion:
      "En metaMerito, tienes la oportunidad de ser parte de una empresa que se preocupa por mejorar el ambiente laboral y el desarrollo profesional de los trabajadores. Tu trabajo contribuirá directamente a crear un impacto positivo en la vida de las personas.",
  },
  {
    titulo: "Cultura inclusiva",
    descripcion:
      "Valoramos la diversidad y promovemos una cultura inclusiva donde todas las voces son valoradas y respetadas. Fomentamos un ambiente de trabajo colaborativo y estamos comprometidos en construir un equipo diverso que aporte diferentes perspectivas y experiencias.",
  },
  {
    titulo: "Oportunidades de crecimiento",
    descripcion:
      "Creemos en el crecimiento personal y profesional de nuestros empleados. Ofrecemos oportunidades de desarrollo y capacitación para ayudarte a alcanzar tu máximo potencial. Además, valoramos la iniciativa y la creatividad, brindando un espacio para que puedas proponer ideas y llevar a cabo proyectos innovadores.",
  },
  {
    titulo: "Ambiente de trabajo positivo",
    descripcion:
      "En metaMerito, nos esforzamos por crear un ambiente de trabajo positivo y colaborativo. Valoramos el equilibrio entre el trabajo y la vida personal, y promovemos el bienestar de nuestros empleados a través de programas de salud y bienestar.",
  },
  {
    titulo: "Tecnología e innovación",
    descripcion:
      "Estamos comprometidos en estar a la vanguardia de la tecnología y la innovación. Trabajarás con herramientas y tecnologías de última generación, lo que te permitirá desarrollar tus habilidades y conocimientos en un entorno dinámico y en constante evolución.",
  },
];

const OurDirectionProcess = () => {
  return (
    <>
      <div className="mt-24 px-6">
        {/* <object
          data={filePDF}
          type="application/pdf"
          width="100%"
          height="100%"
        ></object> */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h1 mb-4" data-aos="fade-up">
            ¿Por qué trabajar en metaMerito?
          </h1>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
            alt="MetaMerito"
          />
          <p
            className="text-xl text-gray-400 my-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            En metaMerito, creemos que somos más que una plataforma de
            recompensas. Somos una comunidad comprometida con el desarrollo
            profesional y el bienestar de los trabajadores. Aquí hay algunas
            razones por las que deberías considerar trabajar con nosotros:
          </p>
        </div>
        <div
          className="px-8 max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
          data-aos-id-blocks
        >
          {reason.map((item, index) => (
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h4 className="h4 mb-2 text-center">{item.titulo}</h4>
              <p className="text-lg text-gray-400 text-center">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
        <div className="my-8">
          <h1 className="h1 mb-10 text-center" data-aos="fade-up">
            ¿Como son nuestros reclutamientos?
          </h1>
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center md:px-14">
            {/* Image */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="fade-up"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={
                  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                }
                width="540"
                height="405"
                alt="Features 01"
              />
            </div>
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3 text-center">
                  Queremos promover el talento interno
                </h3>
                <p className="text-xl text-gray-400 mb-4">
                  En metaMerito, promovemos el talento interno a través de
                  nuestros procesos de reclutamiento interno. Comunicamos
                  oportunidades de crecimiento a nuestros empleados, evaluamos a
                  los solicitantes según requisitos y competencias específicas,
                  seleccionamos a los más adecuados y brindamos
                  retroalimentación constructiva a los no seleccionados.
                  Facilitamos la integración y realizamos un seguimiento para
                  evaluar el desempeño. Estos procesos fomentan igualdad de
                  oportunidades, crecimiento profesional y retención del talento
                  en metaMerito.
                </p>
              </div>
            </div>
          </div>
          {/* 2nd item */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Image */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
              data-aos="fade-up"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={
                  "https://images.unsplash.com/photo-1560249956-b3731ecf3153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                }
                width="540"
                height="405"
                alt="Features 02"
              />
            </div>
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-left"
            >
              <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <h3 className="h3 mb-3">
                  Eres talento externo sigue estos pasos!
                </h3>
                <p className="text-xl text-gray-400 mb-4">
                  Si eres un talento externo interesado en formar parte de
                  nuestro equipo, te invitamos a seguir estos pasos para unirte
                  a metaMerito. Explora nuestras oportunidades laborales
                  publicadas en nuestro sitio web y selecciona aquellas que se
                  alineen con tus habilidades y experiencia. Envía tu solicitud
                  completa, incluyendo tu currículum actualizado y cualquier
                  otra documentación relevante, a través de nuestro sistema de
                  postulación en línea. Nuestro equipo de reclutamiento revisará
                  tu solicitud y, si cumples con los requisitos, te
                  contactaremos para iniciar el proceso de evaluación y
                  selección. ¡Esperamos conocerte y descubrir cómo tu talento
                  puede contribuir al éxito de metaMerito!
                </p>
                <div data-aos="fade-up" data-aos-delay="400">
                  <button className="btn text-white bg-cyan-600 hover:bg-cyan-700 w-full mb-4 sm:w-auto sm:mb-0">
                    Trabaja con nosotros
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center pb-12 mt-[100px] md:pb-16">
          <div className="my-8">
            <h1 className="h1 mb-10 text-center" data-aos="fade-up">
              Estrategias de inducción:
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              Meta Mérito, empresa líder en recursos humanos, ofrece estrategias
              de inducción efectivas para asegurar una exitosa integración de
              los nuevos empleados. Estas estrategias incluyen orientación
              completa sobre la cultura de la empresa, políticas de recursos
              humanos, estructura organizacional y objetivos del puesto. Además,
              se brinda capacitación personalizada en habilidades específicas
              relacionadas con el puesto, asignación de mentores para guiar al
              nuevo empleado, presentaciones departamentales y reuniones
              individuales con el supervisor para proporcionar retroalimentación
              adicional. También se realizan programas de integración social
              para fomentar relaciones y comodidad en el ambiente laboral.
              Mediante la combinación de estas estrategias, Meta Mérito
              garantiza una integración exitosa, aumentando la satisfacción y
              retención del talento a largo plazo.
            </p>
          </div>
          <div className="my-8">
            <h1 className="h1 mb-10 text-center" data-aos="fade-up">
              Estrategias de retención salarial y monetaria:
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              En Meta Mérito, implementamos diversas estrategias de retención
              salarial y monetaria para satisfacer y motivar a nuestros
              empleados. Mantenemos salarios y beneficios competitivos,
              ofrecemos bonificaciones basadas en el desempeño y recompensas
              claras por cumplir objetivos. También brindamos oportunidades de
              crecimiento profesional, horarios flexibles y programas de
              bienestar financiero. Valoramos el reconocimiento y apreciación,
              evaluando regularmente nuestra estrategia para adaptarnos al
              mercado laboral en constante cambio.
            </p>
          </div>
          <div className="my-8">
            <h1 className="h1 mb-10 text-center" data-aos="fade-up">
              Estrategias de evaluación:
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              En Meta Mérito, implementamos diversas estrategias de evaluación
              para mejorar el desempeño y el crecimiento profesional de nuestros
              empleados. Realizamos evaluaciones de desempeño regulares,
              evaluaciones de 360 grados para obtener múltiples perspectivas,
              establecemos indicadores clave de rendimiento (KPI) y evaluamos el
              potencial de liderazgo. Además, llevamos a cabo encuestas de
              satisfacción del empleado y evaluamos la efectividad de nuestros
              programas de capacitación. Nos comprometemos a realizar
              evaluaciones justas y comunicar claramente los resultados. Estas
              estrategias nos permiten mejorar el rendimiento y el éxito de
              nuestra empresa.
            </p>
          </div>
          <a
            className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
            href="/more-direction-process"
          >
            Leer más
          </a>
        </div>
      </div>
    </>
  );
};

export default OurDirectionProcess;
