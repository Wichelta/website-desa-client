import React from 'react';
import Img404NotFound from '../assets/images/img_404_not_found.jpg';

export default function PageNotFound() {
  return (
    <main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center gap-5 text-center">
        <img src={Img404NotFound} alt="404 not found" className="m-auto w-[35rem] select-none" />
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Halaman tidak ditemukan
        </h1>
        <p className="text-base leading-7 text-gray-600">
          Maaf, kami tidak bisa menemukan halaman yang anda cari.
        </p>
        <a
          href="/"
          className="w-max rounded-md bg-blue-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-secondary"
        >
          Kembali ke Beranda
        </a>
      </div>
    </main>
  );
}
