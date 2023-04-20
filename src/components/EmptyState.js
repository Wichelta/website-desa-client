import React, { useEffect } from 'react';
import ImgEmptyState from '../assets/images/img_empty_state.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function EmptyState({ textColor }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      className="col-span-full my-32 flex flex-col items-center justify-center gap-5"
    >
      <img src={ImgEmptyState} alt="No data" className="m-auto w-80 select-none" />
      <p className={`${textColor}`}>Belum ada data untuk saat ini.</p>
    </div>
  );
}
