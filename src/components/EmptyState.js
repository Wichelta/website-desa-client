import React from 'react';
import ImgEmptyState from '../assets/images/img_empty_state.svg';
import { Fade } from 'react-awesome-reveal';

export default function EmptyState({ textColor }) {
  return (
    <div className="col-span-full my-32 flex flex-col items-center justify-center gap-5">
      <Fade direction="up" cascade damping={0.3} triggerOnce>
        <img src={ImgEmptyState} alt="No data" className="m-auto w-80 select-none" />
        <p className={`${textColor}`}>Belum ada data untuk saat ini.</p>
      </Fade>
    </div>
  );
}
