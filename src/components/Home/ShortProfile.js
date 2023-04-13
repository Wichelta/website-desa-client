import React from 'react';

export default function ShortProfile({ refShortProfile }) {
  return (
    <div className="mx-auto w-full bg-white" ref={refShortProfile}>
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-4 sm:py-16 lg:px-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Sejarah Singkat Desa BRIliant
          </h2>
          <p className="text-base text-gray-900">
            Desa ini didirikan pada tahun 1800-an oleh sekelompok petani yang mencari tempat yang
            subur untuk bercocok tanam. Pada awalnya, desa ini hanya terdiri dari beberapa rumah
            kecil yang dikelilingi oleh ladang-ladang jagung dan padi. Namun seiring waktu, desa ini
            berkembang pesat dan menjadi salah satu pusat perdagangan terbesar di daerah tersebut.
            Saat ini, desa ini memiliki lebih dari 10.000 penduduk dan menjadi tujuan wisata yang
            populer karena keindahan alamnya.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">Visi & Misi</h2>
        </div>
      </div>
    </div>
  );
}
