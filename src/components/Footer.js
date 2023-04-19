import React, { useEffect } from 'react';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="bg-blue-secondary py-4 text-white">
      <div data-aos="fade" data-aos-duration="500">
        <div className="container mx-auto flex max-w-screen-xl flex-wrap justify-between px-6 py-5 lg:px-7">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-0">
            <div className="flex w-full flex-col gap-2 md:mb-0 lg:w-1/2">
              <h3 className="text-lg font-bold text-gray-50 sm:text-xl">Desa BRIliant</h3>
              <p className="text-sm text-gray-300 sm:text-base">
                Desa ini didirikan pada tahun 1800-an oleh sekelompok petani yang mencari tempat
                yang subur untuk bercocok tanam. Pada awalnya, desa ini hanya terdiri dari beberapa
                rumah kecil yang dikelilingi oleh ladang-ladang jagung dan padi.
              </p>
            </div>
            <div className="flex w-full flex-col lg:w-1/2 lg:flex-row-reverse">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-gray-50 sm:text-xl">Kontak</h3>
                <a
                  href="mailto:desabriliant@gmail.com"
                  className="flex flex-row items-center gap-2 text-sm text-gray-300 no-underline hover:text-gray-50 sm:text-base"
                >
                  <EnvelopeIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                  desabriliant@gmail.com
                </a>
                <a
                  href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                    '+628991049322',
                  )}`}
                  className="flex flex-row items-center gap-2 text-sm text-gray-300 no-underline hover:text-gray-50 sm:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="currentColor"
                    className="h-5 w-5 flex-shrink-0"
                  >
                    <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
                  </svg>
                  08991049322
                </a>
                <span className="flex flex-row items-center gap-2 text-sm leading-tight text-gray-300 sm:text-base">
                  <MapPinIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                  Jl. Kuala Dua, Kec. Sungai Raya, Kab. Kubu Raya
                </span>
              </div>
            </div>
          </div>
          {/* <div className="mb-4 w-full md:w-1/4 lg:w-1/5">
          <h4 className="mb-4 text-lg font-semibold">Lokasi Kami</h4>
          <img
            src="https://maps.google.com/maps?q=Desa%20X&t=&z=13&ie=UTF8&iwloc=&output=embed"
            alt="Map"
            className="h-auto w-full"
          />
        </div> */}
        </div>
        <hr className="my-4 border-gray-500" />
        <div className="container mx-auto mt-4 max-w-screen-xl px-6 py-5 lg:px-7">
          <p className="text-center text-sm text-gray-400 sm:text-base">
            &copy; 2023 Desa BRIliant. All Rights Reserved. Created by{' '}
            <a
              href="https://github.com/wicheltaians"
              className="text-gray-400 no-underline hover:text-gray-50"
            >
              Wichelta Iansyah.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
