import React from "react";
import Item from "../partials/Item";

const Valors = () => {
  return (
    <div className="flex items-center justify-center pt-32">
      <div className="max-w-3xl md:pr-4 lg:pr-12 xl:pr-16">
        <h3 className="h3 mb-3  text-center">Nuestros valores</h3>
        <ul className="text-lg text-gray-400 -mb-2">
          <Item text="Compromiso: Nos comprometemos a ofrecer un servicio de calidad y a trabajar en estrecha colaboración con nuestros clientes para satisfacer sus necesidades." />
          <Item text="Innovación: Nos comprometemos a mantenernos a la vanguardia de la tecnología y la innovación para ofrecer una plataforma de recompensas efectiva y escalable." />
          <Item text="Transparencia: Nos comprometemos a ser transparentes en todas nuestras operaciones y a mantener una comunicación clara y abierta con nuestros clientes." />
          <Item text="Ética: Nos comprometemos a actuar con integridad y ética profesional en todas nuestras operaciones y relaciones." />
          <Item text="Equidad: Nos comprometemos a tratar a todos los trabajadores de manera justa y equitativa, sin discriminación de ningún tipo." />
        </ul>
      </div>
    </div>
  );
};

export default Valors;
