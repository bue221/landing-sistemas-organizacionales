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
                },
                {
                  name: "MARIA FERNANDA LOPEZ",
                  job: "ESPECIALISTA DE CALIDAD",
                  img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                },
                {
                  name: "MARIA GOMEZ",
                  job: "ESPECIALISTA DE LOGISTICA",
                  img: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                },
                {
                  name: "JH ESCOBAR",
                  job: "DIRECTOR COMERCIAL",
                  img: "https://elsalvadorgram.com/wp-content/uploads/2023/02/jh-de-la-cruz-el-salvador.jpg",
                },
                {
                  name: "JUAN PABLO GOMEZ",
                  job: "ADMINISTRADOR DE PUBLICIDAD",
                  img: "https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                },
                {
                  name: "GIOVANNY VASQUEZ",
                  job: "DESARROLLADOR WEB",
                  img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
                },
                {
                  name: "JUAN YUTA",
                  job: "ARQUITECTO DE SOLUCIONES",
                  img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
                },
                {
                  name: "PABLO DIAZ",
                  job: "DIRECTOR FINANCIERO",
                  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
