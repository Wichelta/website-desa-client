import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Logo from "../assets/icons/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg navbar fixed py-2 top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4 py-2 max-w-7xl">
        <div className="flex justify-between">
          <div className="flex">
            <Link to="/">
              <img src={Logo} alt="Brand Logo" className="w-40 select-none" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-600 font-medium hover:text-sky-900 hover:underline decoration-sky-950"
            >
              HOME
            </Link>
            <Link
              to="/profil-desa"
              className="text-gray-600 font-medium hover:text-sky-950 hover:underline decoration-sky-950"
            >
              PROFIL DESA
            </Link>
            <Link
              to="/galeri-desa"
              className="text-gray-600 font-medium hover:text-sky-950 hover:underline decoration-sky-950"
            >
              GALERI DESA
            </Link>
            <Link
              to="/berita-seputar-desa"
              className="text-gray-600 font-medium hover:text-sky-950 hover:underline decoration-sky-950"
            >
              BERITA SEPUTAR DESA
            </Link>
            <Link
              to="/kontak"
              className="text-gray-600 font-medium hover:text-sky-950 hover:underline decoration-sky-950"
            >
              HUBUNGI KAMI
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only"></span>
              {isOpen ? (
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M4.929 6.343a1 1 0 0 1 1.414 0L12 12.586l5.657-5.657a1 1 0 0 1 1.414 1.414L13.414 14l5.657 5.657a1 1 0 1 1-1.414 1.414L12 15.414l-5.657 5.657a1 1 0 1 1-1.414-1.414L10.586 14 4.93 8.343a1 1 0 0 1 0-1.414z" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="Menu / Menu_Alt_01">
                    <path
                      id="Vector"
                      d="M12 17H19M5 12H19M5 7H19"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-gray-600 hover:text-sky-950 block px-3 py-2 rounded-md text-base font-medium"
              >
                HOME
              </Link>
              <Link
                to="/profil-desa"
                className="text-gray-600 hover:text-sky-950 block px-3 py-2 rounded-md text-base font-medium"
              >
                PROFIL DESA
              </Link>
              <Link
                to="/galeri-desa"
                className="text-gray-600 hover:text-sky-950 block px-3 py-2 rounded-md text-base font-medium"
              >
                GALERI DESA
              </Link>
              <Link
                to="/berita-seputar-desa"
                className="text-gray-600 hover:text-sky-950 block px-3 py-2 rounded-md text-base font-medium"
              >
                BERITA SEPUTAR DESA
              </Link>
              <Link
                to="/kontak"
                className="text-gray-600 hover:text-sky-950 block px-3 py-2 rounded-md text-base font-medium"
              >
                HUBUNGI KAMI
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
