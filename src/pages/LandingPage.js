import React, { useEffect } from 'react';
import CarouselImg from '../components/Home/Carousel';
import Header from '../components/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LatestNews from '../components/Home/LatestNews';
import LatestImageGallery from '../components/Home/LatestImageGallery';
import galleryDataJson from '../json/galleryData.json';
import newsDataJson from '../json/newsData.json';
import BackToTop from '../components/BackToTop';

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Website Desa - BRIliant</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <CarouselImg />
      <LatestImageGallery galleryDataJson={galleryDataJson.galleryData} />
      <LatestNews newsDataJson={newsDataJson.newsData} />
      <BackToTop />
    </>
  );
}
