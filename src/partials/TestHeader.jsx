import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ options }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(index === openDropdown ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="block" aria-label="Cruip">
                <svg
                  className="w-8 h-8 fill-current text-cyan-600"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleDropdownToggle(index)}
                  onMouseLeave={() => handleDropdownToggle(null)}
                >
                  <Link
                    to={option.url}
                    className="font-medium text-cyan-600 hover:text-gray-700 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    {option.label}
                  </Link>
                  {option.dropdown && (
                    <div
                      className={`absolute z-50 bg-white -ml-4 w-48 rounded-md shadow-lg ${
                        openDropdown === index ? "" : "hidden"
                      }`}
                    >
                      <div className="py-1">
                        {option.dropdown.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to={item.url}
                            className="font-medium text-cyan-600 hover:text-gray-700 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              aria-label="Open menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {options.map((option, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleDropdownToggle(index)}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                <Link
                  to={option.url}
                  className="font-medium text-cyan-600 hover:text-gray-700 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {option.label}
                </Link>
                {option.dropdown && (
                  <div
                    className={`absolute z-50 ml-4 mt-2 w-48 bg-white shadow-lg  border-1 rounded-md shadow-lg ${
                      openDropdown === index ? "" : "hidden"
                    }`}
                  >
                    <div className="py-1">
                      {option.dropdown.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.url}
                          className="font-medium text-cyan-600 hover:text-gray-700 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
