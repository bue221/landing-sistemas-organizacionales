import React from "react";
import filePDF from "../pdf/MAPA ESTRATEGICO.pdf";

const OurBsc = () => {
  return (
    <>
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <object
          data={filePDF}
          type="application/pdf"
          width="100%"
          height="100%"
        ></object>
      </div>
    </>
  );
};

export default OurBsc;
