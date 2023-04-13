import React from 'react';

export default function Profile({ data }) {
  const image = data[0];

  return (
    <div className="mx-auto w-full bg-white">
      <div className="container mx-auto mt-40 max-w-screen-xl px-4 py-5 sm:px-6 lg:px-4">
        <div className="mb-6 max-w-screen-xl flex-col items-center justify-center px-3">
          <h1 className="mb-5 text-center text-3xl font-bold text-gray-900">{image.title}</h1>
          <img src={image.src} alt={image.alt} className="h-[600px] w-full object-cover" />
        </div>
        <div className="px-3 py-6">
          <h2 className="text-lg font-medium text-gray-900">Sejarah Desa</h2>
          <p className="mt-2 text-sm text-gray-500">
            Desa ini didirikan pada tahun 1800-an oleh sekelompok petani yang mencari tempat yang
            subur untuk bercocok tanam. Pada awalnya, desa ini hanya terdiri dari beberapa rumah
            kecil yang dikelilingi oleh ladang-ladang jagung dan padi. Namun seiring waktu, desa ini
            berkembang pesat dan menjadi salah satu pusat perdagangan terbesar di daerah tersebut.
            Saat ini, desa ini memiliki lebih dari 10.000 penduduk dan menjadi tujuan wisata yang
            populer karena keindahan alamnya.
          </p>
        </div>
        <div className="px-3 py-6">
          <h2 className="text-lg font-medium text-gray-900">Visi</h2>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat diam. Mauris
            nec turpis nec lacus gravida vulputate. Sed nulla elit, volutpat quis sapien vel, tempor
            tincidunt augue.
          </p>
        </div>
        <div className="px-3 py-6">
          <h2 className="text-lg font-medium text-gray-900">Misi</h2>
          <ul className="mt-2 list-inside list-disc text-sm text-gray-500">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Sed ac consequat diam.</li>
            <li>Mauris nec turpis nec lacus gravida vulputate.</li>
            <li>Sed nulla elit, volutpat quis sapien vel, tempor tincidunt augue.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
