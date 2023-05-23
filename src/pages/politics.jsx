import React from "react";
import Item from "../partials/Item";

const Politicas = () => {
  return (
    <div className="flex items-center justify-center w-full pt-32">
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
  );
};

export default Politicas;
