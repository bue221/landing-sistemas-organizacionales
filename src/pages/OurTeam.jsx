import React from "react";
//
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Footer from "../partials/Footer";
import TeamMembers from "../partials/TeamMembers";

const OurTeam = () => {
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
              Nuestro equipo
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Conoce a nuestro equipo altamente motivado, creativo y
              comprometido, compuesto por profesionales talentosos que comparten
              una pasión por la tecnología y la excelencia en el servicio al
              cliente. Trabajamos juntos para superar desafíos y lograr nuestros
              objetivos empresariales. Estamos comprometidos con la formación y
              el desarrollo de nuestro equipo para garantizar nuestro éxito.
            </p>
          </div>
        </div>
        <div>
          <div className="max-w-8xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-10" data-aos="fade-up">
              Area operacional
            </h1>
            <TeamMembers
              members={[
                {
                  name: "PEDRO PASCAL",
                  job: "DIRECTOR DE OPERACIONES",
                  img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  description:
                    "El Director de Operaciones es el encargado de planificar, organizar, dirigir y controlar los procesos y recursos necesarios para que la empresa alcance sus objetivos de producción y calidad.",
                },
                {
                  name: "MARIA FERNANDA LOPEZ",
                  job: "ESPECIALISTA DE CALIDAD",
                  img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                  description:
                    "El Especialista de Calidad es el encargado de garantizar que los productos y servicios que ofrece la empresa cumplan con los estándares de calidad requeridos por los clientes y las normativas vigentes.",
                },
                {
                  name: "MARIA GOMEZ",
                  job: "ESPECIALISTA DE LOGISTICA",
                  img: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  description:
                    "El Especialista de Logística es el encargado de planificar, coordinar y controlar el flujo de materiales, bienes y servicios desde el punto de origen hasta el punto de consumo, buscando la máxima eficiencia y rentabilidad en los procesos.",
                },
              ]}
            />
            <h1 className="h1 mb-10" data-aos="fade-up">
              Area comercial
            </h1>
            <TeamMembers
              members={[
                {
                  name: "PAOLA TESTA",
                  job: "AUXILIAR COMERCIAL",
                  img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  description:
                    "Profesional encargada de brindar soporte en el área comercial de una empresa, realizando tareas administrativas para ayudar a los vendedores y representantes comerciales.",
                },
                {
                  name: "JH ESCOBAR",
                  job: "DIRECTOR COMERCIAL",
                  img: "https://elsalvadorgram.com/wp-content/uploads/2023/02/jh-de-la-cruz-el-salvador.jpg",
                  description:
                    "Profesional encargado de dirigir y coordinar todas las actividades comerciales de una empresa, asegurando la satisfacción del cliente y el logro de los objetivos comerciales de la organización.",
                },
                {
                  name: "JUAN PABLO GOMEZ",
                  job: "ADMINISTRADOR DE PUBLICIDAD",
                  img: "https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  description:
                    "Profesional encargado de planificar, ejecutar y evaluar las estrategias de publicidad y marketing de una empresa, con el objetivo de promocionar sus productos o servicios y aumentar la presencia de la marca en el mercado.",
                },
              ]}
            />
            <h1 className="h1 mb-10" data-aos="fade-up">
              Area de tecnología
            </h1>
            <TeamMembers
              members={[
                {
                  name: "PAOLA URGILES",
                  job: "DIRECTOR DE TECNOLOGIA",
                  img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                  description:
                    "Responsable de liderar y dirigir el área de tecnología de la empresa, desarrollar estrategias tecnológicas, asegurar la calidad de los productos y servicios de la empresa, y mantenerse al tanto de las últimas tendencias tecnológicas y su impacto en el negocio.",
                },
                {
                  name: "GIOVANNY VASQUEZ",
                  job: "DESARROLLADOR WEB",
                  img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
                  description:
                    "Encargado de diseñar, desarrollar, probar y mantener aplicaciones web. Tiene habilidades en programación, diseño gráfico, experiencia de usuario, bases de datos y seguridad en línea.",
                },
                {
                  name: "JUAN YUTA",
                  job: "ARQUITECTO DE SOLUCIONES",
                  img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                  description:
                    "Encargado de diseñar y planificar la arquitectura de soluciones empresariales y tecnológicas, tomando en cuenta la eficiencia, escalabilidad y seguridad. Trabaja con equipos de desarrollo para implementar soluciones innovadoras y eficaces.",
                },
              ]}
            />
            <h1 className="h1 mb-10" data-aos="fade-up">
              Area de Finanzas
            </h1>
            <TeamMembers
              members={[
                {
                  name: "CAMILO RODRIGUEZ",
                  job: "CONTADOR",
                  img: "https://mn2s-content.s3.eu-west-2.amazonaws.com/wp-content/uploads/2021/07/23174004/Jovani-Vazquez.png",
                  description:
                    "Camilo Rodriguez es el contador de la empresa. Se encarga de llevar la contabilidad de la empresa y garantizar que las finanzas estén en orden.",
                },
                {
                  name: "PABLO DIAZ",
                  job: "DIRECTOR FINANCIERO",
                  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                  description:
                    "Pablo Diaz es el director financiero de la empresa. Supervisa la gestión financiera y toma decisiones estratégicas para el éxito financiero a largo plazo de la empresa.",
                },
              ]}
            />
            <h1 className="h1 mb-10" data-aos="fade-up">
              Area Legal
            </h1>
            <TeamMembers
              members={[
                {
                  name: "MARIA GONZALEZ",
                  job: "ABOGADA CORPORATIVA",
                  img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                  description:
                    "Maria es una abogada especializada en asuntos corporativos. Se encarga de brindar asesoramiento legal a empresas en materia de contratación, propiedad intelectual, fusiones y adquisiciones, entre otros. También es responsable de elaborar y revisar contratos y acuerdos comerciales, y de asegurar el cumplimiento de las regulaciones legales aplicables.",
                },
                {
                  name: "ANDRES CASTRO",
                  job: "ABOGADO LABORALISTA",
                  img: "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
                  description:
                    "Andres es un abogado especializado en derecho laboral, se encarga de brindar asesoramiento y representación legal a empresas en temas laborales, como despidos, contrataciones, conflictos colectivos y negociación de convenios colectivos, entre otros. También es responsable de asesorar a las empresas en materia de cumplimiento de las regulaciones laborales aplicables y en la gestión de relaciones con los trabajadores y los sindicatos.",
                },
                {
                  name: "CAROLINA GARCIA",
                  job: "ABOGADA DE PROPIEDAD INTELECTUAL",
                  img: "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
                  description:
                    "Carolina es una abogada especializada en propiedad intelectual, se encarga de brindar asesoramiento y representación legal a empresas y particulares en temas relacionados con patentes, marcas, derechos de autor y propiedad industrial en general. También es responsable de elaborar y revisar contratos y acuerdos relacionados con la propiedad intelectual, y de proteger los derechos de sus clientes ante posibles infracciones.",
                },
              ]}
            />
            <h1 className="h1 mb-10" data-aos="fade-up">
              Area Administrativa
            </h1>
            <TeamMembers
              members={[
                {
                  name: "JULIA GARCIA",
                  job: "DIRECTORA ADMINISTRATIVA",
                  img: "https://images.unsplash.com/photo-1606914707708-5180546f153d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
                  description:
                    "Responsable de la gestión administrativa de la empresa, supervisa y coordina los procesos administrativos y financieros, así como también el personal a cargo.",
                },
                {
                  name: "ANDREA HERNANDEZ",
                  job: "ESPECIALISTA DE RECURSOS HUMANOS",
                  img: "https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                  description:
                    "Encargada de reclutamiento, selección y contratación de personal, así como también de la gestión de nómina, capacitación y evaluación de desempeño.",
                },
                {
                  name: "DAVID RODRIGUEZ",
                  job: "ANALISTA DE FINANZAS",
                  img: "https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                  description:
                    "Encargado de la gestión de las finanzas de la empresa, realiza el análisis y seguimiento de la situación financiera de la compañía, así como también de la elaboración y seguimiento del presupuesto.",
                },
                {
                  name: "ALEJANDRA PEREZ",
                  job: "ASISTENTE ADMINISTRATIVA",
                  img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                  description:
                    "Brinda apoyo en la gestión administrativa y financiera de la empresa, asiste a la dirección administrativa y se encarga de la gestión de los procesos administrativos y financieros.",
                },
              ]}
            />
          </div>
        </div>
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default OurTeam;
