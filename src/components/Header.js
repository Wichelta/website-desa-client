import { useLocation } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, NewspaperIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Logo from '../assets/icons/logo.png';
import { Fade } from 'react-awesome-reveal';

const listInformasi = [
  {
    name: 'Berita Terbaru',
    href: '/berita-terbaru',
    icon: NewspaperIcon,
  },
  {
    name: 'Agenda Kegiatan Desa',
    href: '/agenda-kegiatan-desa',
    icon: CalendarDaysIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [shouldShowHeader, setShouldShowHeader] = useState(true);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-primary' : 'text-gray-900';
  };

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
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white py-2 transition-all duration-300 ${
        shouldShowHeader ? '' : '-translate-y-full'
      }`}
    >
      <Fade triggerOnce>
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between p-6 lg:px-6"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1">
              <img src={Logo} alt="Brand Logo" className="w-40 select-none" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="m-1 hidden lg:flex lg:gap-x-7">
            <a
              href="/"
              className={`nav-link nav-link-ltr text-sm font-semibold leading-6 transition duration-300 ease-in-out hover:text-blue-primary hover:ease-in-out ${isActive(
                '/',
              )}`}
            >
              Home
            </a>
            <a
              href="/profil-desa"
              className={`nav-link nav-link-ltr text-sm font-semibold leading-6 transition duration-300 ease-in-out hover:text-blue-primary hover:ease-in-out ${isActive(
                '/profil-desa',
              )}`}
            >
              Profil Desa
            </a>
            <a
              href="/galeri-desa"
              className={`nav-link nav-link-ltr text-sm font-semibold leading-6 transition duration-300 ease-in-out hover:text-blue-primary hover:ease-in-out ${isActive(
                '/galeri-desa',
              )}`}
            >
              Galeri Desa
            </a>
            <Popover className="relative">
              <Popover.Button className="nav-link nav-link-ltr group flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none transition duration-300 ease-in-out hover:text-blue-primary hover:ease-in-out">
                Informasi Seputar Desa
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400 transition duration-300 ease-in-out group-hover:text-blue-primary group-hover:ease-in-out"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {listInformasi.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 transition duration-300 ease-in-out group-hover:text-blue-primary group-hover:ease-in-out"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition duration-300 ease-in-out hover:bg-gray-50 group-hover:text-blue-primary group-hover:ease-in-out ${isActive(
                              item.href,
                            )}`}
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <a
              href="/kontak"
              className={`nav-link nav-link-ltr text-sm font-semibold leading-6 transition duration-300 ease-in-out hover:text-blue-primary hover:ease-in-out ${isActive(
                '/kontak',
              )}`}
            >
              Hubungi Kami
            </a>
          </Popover.Group>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex h-8 items-center justify-between">
              <a href="/" className="-m-1">
                <img src={Logo} alt="Brand Logo" className="w-40 select-none sm:hidden" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-blue-primary ${isActive(
                      '/',
                    )}`}
                  >
                    Home
                  </a>
                  <a
                    href="/profil-desa"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-blue-primary ${isActive(
                      '/profil-desa',
                    )}`}
                  >
                    Profil Desa
                  </a>
                  <a
                    href="/galeri-desa"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-blue-primary ${isActive(
                      '/galeri-desa',
                    )}`}
                  >
                    Galeri Desa
                  </a>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-blue-primary">
                          Informasi Seputar Desa
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...listInformasi].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className={`block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50 hover:text-blue-primary ${isActive(
                                item.href,
                              )}`}
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="/kontak"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-blue-primary ${isActive(
                      '/kontak',
                    )}`}
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Fade>
    </header>
  );
}
