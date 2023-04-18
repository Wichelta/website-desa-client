import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function Breadcrumb({ links }) {
  const location = useLocation();

  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [shouldShowHeader, setShouldShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > lastScrollPos && shouldShowHeader) {
        setShouldShowHeader(false);
      } else if (currentScrollPos < lastScrollPos || currentScrollPos === 0) {
        setShouldShowHeader(true);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos, shouldShowHeader]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-10 border-b border-gray-200 bg-white transition-all duration-300 ${
        shouldShowHeader ? '' : '-translate-y-full py-3'
      }`}
      style={{ marginTop: '5.063rem' }}
    >
      <div className="container mx-auto max-w-screen-xl px-3">
        <ol className="flex items-center justify-center p-4 sm:justify-normal">
          {links.map((link, index) => (
            <li key={index} className="flex items-center">
              <Link
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-blue-primary'
                    : 'text-gray-500 hover:text-blue-primary'
                } py-0`}
              >
                {link.name}
              </Link>
              {index < links.length - 1 && (
                <ChevronRightIcon aria-hidden="true" className="mx-2 h-5 w-5 text-gray-500" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
