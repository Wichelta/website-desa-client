import React from "react";
import ImgBRI from "../assets/images/img_bri.jpg";

export default function Profile() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 mt-28 sm:px-6 lg:px-8">
        <h1 className="text-4xl text-center font-bold text-gray-900 mt-8 mb-4">
          Selamat Datang di Desa BRIliant
        </h1>
        <p className="text-lg text-center text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
          dolor eu nisi vulputate, vel congue est eleifend.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <img
              className="h-80 w-full object-cover rounded-lg shadow-md"
              src={ImgBRI}
              alt="Desa BRIliant"
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-lg text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus dolor eu nisi vulputate, vel congue est eleifend.
            </p>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Village Profile
              </h2>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Name:</span> My Village
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Population:</span> 10,000
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Location:</span> Indonesia
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Economy:</span> Agriculture
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
