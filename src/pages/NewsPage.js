import React from 'react';
import Header from '../components/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';

export default function NewsPage() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Semua Berita', path: '/semua-berita' },
  ];
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Semua Berita - BRIliant</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <Breadcrumb links={links} />
    </>
  );
}
