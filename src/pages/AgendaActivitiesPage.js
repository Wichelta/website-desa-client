import React from 'react';
import Header from '../components/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

export default function AgendaActivitiesPage() {
  const links = [
    { name: 'Beranda', path: '/' },
    { name: 'Agenda Kegiatan Desa', path: '/agenda-kegiatan-desa' },
  ];
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Agenda Kegiatan Desa - BRIliant</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <Breadcrumb links={links} />
      <Footer />
    </>
  );
}
