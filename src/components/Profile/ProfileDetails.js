import React, { useEffect } from 'react';
import HTMLReactParser from 'html-react-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Profile({ profileDataJson }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="mx-auto w-full bg-white">
      <div className="container mx-auto mt-[8.5rem] flex max-w-screen-xl flex-col px-4 py-4 sm:py-16 lg:px-10">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row">
          <div data-aos="zoom-in" data-aos-duration="500" className="w-full py-4 lg:w-1/3">
            <img src={profileDataJson.src} alt="Logo desa" className="m-auto w-72 select-none" />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            className="flex w-full flex-col gap-4 py-4 lg:w-2/3"
          >
            <div className="flex flex-col gap-2 text-gray-900">
              {HTMLReactParser(profileDataJson.description)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
