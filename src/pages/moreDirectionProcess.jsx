import React from "react";
import filePDF from "../pdf/Procesos.pdf";

const MoreDirectionProcess = () => {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object
        data={filePDF}
        type="application/pdf"
        width="100%"
        height="100%"
      ></object>
    </div>
  );
};

export default MoreDirectionProcess;
