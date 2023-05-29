import React from "react";
// import filePDF from "../pdf/3 punto.docx.pdf";

const CTS = () => {
  return (
    <>
      <div
        style={{ width: "100%" }}
        className="mt-[100px] md:mt-[200px] px-[100px]"
      >
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            paddingTop: 0,
            height: 0,
          }}
        >
          <iframe
            title="TIMELINE GLOBOS"
            frameborder="0"
            width="1200"
            height="675"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src="https://view.genial.ly/647402a2d97ccd0018978038"
            type="text/html"
            allowscriptaccess="always"
            allowfullscreen="true"
            scrolling="yes"
            allownetworking="all"
          ></iframe>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default CTS;
