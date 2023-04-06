import React from 'react';
import Header from '../components/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';

export default function ContactPage() {
  const links = [
    { name: 'Beranda', path: '/' },
    { name: 'Hubungi Kami', path: '/kontak' },
  ];
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Kontak - BRIliant</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <Breadcrumb links={links} />
    </>
  );
}
