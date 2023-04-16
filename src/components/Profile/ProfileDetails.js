import React from 'react';
import LogoDesa from '../../assets/images/logo_desa.png';

export default function Profile() {
  return (
    <main className="mx-auto w-full bg-white">
      <div className="container mx-auto mt-[8.5rem] flex max-w-screen-xl flex-col px-4 py-4 sm:py-16 lg:px-10">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row">
          <div className="w-full py-4 lg:w-1/3">
            <img src={LogoDesa} alt="Logo desa" className="m-auto w-72 select-none" />
          </div>
          <div className="flex w-full flex-col gap-4 py-4 lg:w-2/3">
            <div className="flex flex-col gap-2">
              <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-left">
                Sejarah Singkat Desa BRIliant
              </h2>
              <p className="text-base text-gray-900">
                Desa ini didirikan pada tahun 1800-an oleh sekelompok petani yang mencari tempat
                yang subur untuk bercocok tanam. Pada awalnya, desa ini hanya terdiri dari beberapa
                rumah kecil yang dikelilingi oleh ladang-ladang jagung dan padi. Namun seiring
                waktu, desa ini berkembang pesat dan menjadi salah satu pusat perdagangan terbesar
                di daerah tersebut. Saat ini, desa ini memiliki lebih dari 10.000 penduduk dan
                menjadi tujuan wisata yang populer karena keindahan alamnya.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-left">
                Visi & Misi
              </h2>
              <div>
                <p className="text-base font-medium text-gray-900">Visi :</p>
                <p className="text-base text-gray-900">
                  Mewujudkan Desa yang Maju, Sejahtera, dan Berbudaya Menuju Indonesia yang Lebih
                  Baik.
                </p>
                <p className="text-base font-medium text-gray-900">Misi :</p>
                <ul className="list-inside list-disc">
                  <li>
                    Meningkatkan kesejahteraan masyarakat desa melalui pemberdayaan ekonomi
                    masyarakat dan peningkatan kualitas sumber daya manusia.
                  </li>
                  <li>
                    Meningkatkan kualitas infrastruktur desa yang berkelanjutan dan ramah
                    lingkungan.
                  </li>
                  <li>
                    Meningkatkan kualitas pelayanan publik di desa yang transparan dan partisipatif.
                  </li>
                  <li>Meningkatkan kualitas lingkungan dan kebersihan desa.</li>
                  <li>
                    Melestarikan nilai-nilai budaya dan tradisi lokal untuk menjaga identitas dan
                    kearifan lokal.
                  </li>
                  <li>
                    Meningkatkan kerja sama antar instansi, organisasi, dan masyarakat dalam upaya
                    membangun desa yang maju dan sejahtera.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
