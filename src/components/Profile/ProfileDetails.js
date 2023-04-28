import React, { useState, useEffect } from 'react';
import HTMLReactParser from 'html-react-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingIndicator from '../LoadingIndicator';

export default function Profile({ profileDataJson }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
    AOS.init();
  }, []);

  return (
    <section className="mx-auto w-full bg-white">
      <div className="container mx-auto mt-[8.25rem] flex max-w-screen-xl flex-col px-4 py-4 sm:mt-[8.5rem] lg:px-6 lg:py-16">
        {isLoading ? (
          <LoadingIndicator height={'h-[30rem]'} />
        ) : (
          <>
            <div className="flex w-full flex-col items-center gap-5 overflow-x-hidden lg:flex-row">
              <div data-aos="fade-right" data-aos-duration="500" className="w-full py-4 lg:w-1/3">
                <img
                  src={profileDataJson.src}
                  alt="Logo desa"
                  className="m-auto w-72 select-none"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                className="flex w-full flex-col gap-4 py-4 lg:w-2/3"
              >
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Sejarah Desa</h2>
                <div className="text-gray-900">{HTMLReactParser(profileDataJson.history)}</div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Visi & Misi</h2>
                <div className="text-gray-900">
                  {HTMLReactParser(profileDataJson.visionMission)}
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="500" className="text-gray-900">
              {HTMLReactParser(profileDataJson.otherDescription)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
