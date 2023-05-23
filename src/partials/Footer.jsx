import React from "react";
import { Link } from "react-router-dom";
import AvatarFooter from "./AvatarFooter";

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-12 lg:col-span-12">
              <div className="mb-2">
                {/* Logo */}
                <Link to="/" className="inline-block" aria-label="Cruip">
                  <svg
                    className="w-8 h-8 fill-current text-cyan-600"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                  </svg>
                </Link>
              </div>
              <div className="text-gray-800 text-center">
                "Recompensas que inspiran, motivan y transforman."
              </div>
              <h6 className="h6 text-lg font-bold text-center mt-4">
                Integrantes:
              </h6>
              <div className="text-gray-800 text-center m-2 flex items-center justify-center flex-wrap  flex-col md:flex-row md:mt-4 gap-4">
                <AvatarFooter name="Juan Felipe Forero Estrada" />
                <AvatarFooter
                  name="Andres Camilo Plaza Jimenez"
                  img="https://pps.whatsapp.net/v/t61.24694-24/338989187_173474605564955_1362084939996284116_n.jpg?ccb=11-4&oh=01_AdSFxUL2Q3__ilskry7eBpn7SieRYGUd7-BhCTHf3AxyEw&oe=643CEA27"
                />
                <AvatarFooter
                  name="Eric Fabian Ramirez Aguilar"
                  img="https://pps.whatsapp.net/v/t61.24694-24/328122806_1514781795677854_7465110881807751255_n.jpg?ccb=11-4&oh=01_AdS-HQW5rWEAYnOF_rXJukgJHO5KZzvLQfXBSASq_cg40w&oe=643D14FE"
                />
                <AvatarFooter
                  name="Pablo Andres Triana Muñoz"
                  img="https://pps.whatsapp.net/v/t61.24694-24/317704240_909615627020230_7221608531741271936_n.jpg?ccb=11-4&oh=01_AdRhnO4n9YWDwFxIkzM-7rsZLyOhX7PzvThYZ9S0hpxERQ&oe=643CF9E7"
                />
              </div>
            </div>
          </div>
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-center">
            <div className="text-gray-400 text-sm mr-4">
              &copy; MetaMérito. All rights reserved. {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
