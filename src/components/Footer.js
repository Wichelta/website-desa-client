import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-secondary py-4 text-white">
      <div className="container mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-7">
        <div className="flex flex-row flex-wrap justify-between">
          <div className="mb-8 w-full md:mb-0 md:w-1/3">
            <h3 className="mb-2 text-xl font-bold text-gray-50">Desa BRIliant</h3>
            <p className="text-base text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget sapien sapien.
            </p>
            {/* <div className="mt-4 flex flex-col gap-2">
              <a href="/profil-desa" className="text-sm text-gray-300 hover:text-gray-50">
                Profil Desa
              </a>
              <a href="/galeri-desa" className="text-sm text-gray-300 hover:text-gray-50">
                Galeri Desa
              </a>
              <a href="/berita-seputar-desa" className="text-sm text-gray-300 hover:text-gray-50">
                Berita Seputar Desa
              </a>
              <a href="/agenda-kegiatan-desa" className="text-sm text-gray-300 hover:text-gray-50">
                Agenda Kegiatan Desa
              </a>
              <a href="/kontak" className="text-sm text-gray-300 hover:text-gray-50">
                Hubungi Kami
              </a>
            </div> */}
          </div>
          <div className="flex w-full md:w-1/3 md:flex-row-reverse">
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-50">Kontak</h3>
              <ul>
                <li>
                  <a
                    href="mailto:desabriliant@gmail.com"
                    className="text-base text-gray-300 hover:text-gray-50"
                  >
                    desabriliant@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+622123456789"
                    className="text-base text-gray-300 hover:text-gray-50"
                  >
                    021 - 2345 - 6789
                  </a>
                </li>
                <li>
                  <span className="text-base text-gray-300">
                    Desa BRIliant, Kec. Sungai Raya, Kab. Kubu Raya
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-10 border-gray-500" />
        <p className="text-center text-sm text-gray-400">
          &copy; 2023 Desa BRIliant. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
