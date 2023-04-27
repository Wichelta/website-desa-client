import React from 'react';
import { BarLoader } from 'react-spinners';

export default function LoadingIndicator({ height }) {
  return (
    <div className={`flex ${height} flex-col items-center justify-center gap-2`}>
      <BarLoader height={5} width={200} color={'#9CA3AF'} />
      <p className="text-gray-500">Memuat data...</p>
    </div>
  );
}
