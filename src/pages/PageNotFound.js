import React from 'react';

export default function PageNotFound() {
  return (
    <main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-5xl font-semibold text-blue-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Maaf, kami tidak bisa menemukan halaman yang anda cari.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-blue-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Kembali ke Beranda
          </a>
          <a href="/kontak" className="text-sm font-semibold text-gray-900">
            Hubungi Bantuan <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
