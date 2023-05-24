import React from "react";
import filePDF from "../pdf/3 punto.docx.pdf";

const CTS = () => {
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

export default CTS;
