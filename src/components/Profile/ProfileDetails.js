import React from 'react';
import { Fade } from 'react-awesome-reveal';
import HTMLReactParser from 'html-react-parser';
import data from '../../json/profileData.json';

export default function Profile() {
  return (
    <main className="mx-auto w-full bg-white">
      <div className="container mx-auto mt-[8.5rem] flex max-w-screen-xl flex-col px-4 py-4 sm:py-16 lg:px-10">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row">
          <div className="w-full py-4 lg:w-1/3">
            <Fade direction="left" triggerOnce>
              <img
                src={data.profileData[0].src}
                alt="Logo desa"
                className="m-auto w-72 select-none"
              />
            </Fade>
          </div>
          <div className="flex w-full flex-col gap-4 py-4 lg:w-2/3">
            <div className="flex flex-col gap-2 text-gray-900">
              <Fade direction="right" triggerOnce>
                {HTMLReactParser(data.profileData[0].description)}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
