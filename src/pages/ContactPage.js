import React from 'react';
import Header from '../components/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

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
      <Footer />
    </>
  );
}
