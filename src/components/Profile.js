import React from 'react';
import emptyStateImg from '../assets/images/empty_state.png';

export default function Profile({ data }) {
  const image = data[0];

  return (
    <div className="mx-auto mt-40 max-w-screen-xl px-4 py-5 sm:px-6 lg:px-7">
      <h1 className="mb-5 text-center text-3xl font-bold text-gray-900">{image.title}</h1>
      {image.src ? (
        <div className="mb-6 flex max-w-screen-xl items-center justify-center">
          <img src={image.src} alt={image.alt} className="h-[600px] w-full object-cover" />
        </div>
      ) : (
        <div className="flex max-w-screen-xl items-center justify-center">
          <img src={emptyStateImg} alt="empty-state" className="h-[600px] w-full object-cover" />
        </div>
      )}

      <div className="mt-6 border-t border-gray-200 py-6">
        <h2 className="text-lg font-medium text-gray-900">Visi</h2>
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat diam. Mauris nec
          turpis nec lacus gravida vulputate. Sed nulla elit, volutpat quis sapien vel, tempor
          tincidunt augue.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-200 py-6">
        <h2 className="text-lg font-medium text-gray-900">Misi</h2>
        <ul className="mt-2 list-inside list-disc text-sm text-gray-500">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Sed ac consequat diam.</li>
          <li>Mauris nec turpis nec lacus gravida vulputate.</li>
          <li>Sed nulla elit, volutpat quis sapien vel, tempor tincidunt augue.</li>
        </ul>
      </div>
      <div className="mt-6 border-t border-gray-200 py-6">
        <h2 className="text-lg font-medium text-gray-900">Sejarah Desa</h2>
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat diam. Mauris nec
          turpis nec lacus gravida vulputate. Sed nulla elit, volutpat quis sapien vel, tempor
          tincidunt augue.
        </p>
      </div>
    </div>
  );
}
