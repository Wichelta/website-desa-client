import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Logo from "../assets/icons/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "text-blue-primary underline"
      : "text-gray-600";
  };

  return (
    <nav className="navbar fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white py-2">
      <div className="mx-auto max-w-screen-xl px-6 py-2">
        <div className="flex justify-between">
          <div className="flex">
            <Link to="/">
              <img src={Logo} alt="Brand Logo" className="w-40 select-none" />
            </Link>
          </div>
          <div className="hidden items-center space-x-6 lg:flex">
            <Link
              to="/"
              className={`font-medium decoration-blue-primary hover:text-blue-primary hover:underline ${isActive(
                "/"
              )}`}
            >
              HOME
            </Link>
            <Link
              to="/profil-desa"
              className={`font-medium decoration-blue-primary hover:text-blue-primary hover:underline ${isActive(
                "/profil-desa"
              )}`}
            >
              PROFIL DESA
            </Link>
            <Link
              to="/galeri-desa"
              className={`font-medium decoration-blue-primary hover:text-blue-primary hover:underline ${isActive(
                "/galeri-desa"
              )}`}
            >
              GALERI DESA
            </Link>
            <Link
              to="/berita-seputar-desa"
              className={`font-medium decoration-blue-primary hover:text-blue-primary hover:underline ${isActive(
                "/berita-seputar-desa"
              )}`}
            >
              BERITA SEPUTAR DESA
            </Link>
            <Link
              to="/kontak"
              className={`font-medium decoration-blue-primary hover:text-blue-primary hover:underline ${isActive(
                "/kontak"
              )}`}
            >
              HUBUNGI KAMI
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 focus:ring-offset-gray-100"
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
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <Link
                to="/"
                className={`block rounded-md px-3 py-2 text-base font-medium hover:text-blue-primary ${isActive(
                  "/"
                )}`}
              >
                HOME
              </Link>
              <Link
                to="/profil-desa"
                className={`block rounded-md px-3 py-2 text-base font-medium hover:text-blue-primary ${isActive(
                  "/profil-desa"
                )}`}
              >
                PROFIL DESA
              </Link>
              <Link
                to="/galeri-desa"
                className={`block rounded-md px-3 py-2 text-base font-medium hover:text-blue-primary ${isActive(
                  "/galeri-desa"
                )}`}
              >
                GALERI DESA
              </Link>
              <Link
                to="/berita-seputar-desa"
                className={`block rounded-md px-3 py-2 text-base font-medium hover:text-blue-primary ${isActive(
                  "/berita-seputar-desa"
                )}`}
              >
                BERITA SEPUTAR DESA
              </Link>
              <Link
                to="/kontak"
                className={`block rounded-md px-3 py-2 text-base font-medium hover:text-blue-primary ${isActive(
                  "/kontak"
                )}`}
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
