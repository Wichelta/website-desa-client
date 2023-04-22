import React from 'react';
import Header from '../components/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import News from '../components/Information/News';
import newsDataJson from '../json/newsData.json';

export default function NewsPage() {
  const links = [
    { name: 'Beranda', path: '/' },
    { name: 'Berita Seputar Desa', path: '/berita-seputar-desa' },
  ];
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Berita Seputar Desa - BRIliant</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <Breadcrumb links={links} />
      <News newsDataJson={newsDataJson.newsData} />
      <Footer />
    </>
  );
}
