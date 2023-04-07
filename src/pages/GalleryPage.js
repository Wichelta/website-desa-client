import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import ImageGallery from '../components/Gallery/ImageGallery';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import galleryDataJson from '../json/galleryData.json';
import BackToTop from '../components/BackToTop';

export default function GalleryPage() {
  const links = [
    { name: 'Beranda', path: '/' },
    { name: 'Galeri Desa', path: '/galeri-desa' },
  ];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Galeri Desa - BRIliant</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <Breadcrumb links={links} />
      <ImageGallery galleryDataJson={galleryDataJson.galleryData} />
      <BackToTop />
    </>
  );
}
