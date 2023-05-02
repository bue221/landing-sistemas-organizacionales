import React from "react";
import filePDF from "../pdf/ProcesosDeDireccion.pdf";

const OurDirectionProcess = () => {
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

export default OurDirectionProcess;
