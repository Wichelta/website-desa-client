import React, { useEffect, useRef } from 'react';
import CarouselImg from '../components/Home/Carousel';
import Header from '../components/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LatestNews from '../components/Home/LatestNews';
import LatestImageGallery from '../components/Home/LatestImageGallery';
import galleryDataJson from '../json/galleryData.json';
import newsDataJson from '../json/newsData.json';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import ShortProfile from '../components/Home/ShortProfile';

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const refShortProfile = useRef(null);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Website Desa - BRIliant</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <CarouselImg refShortProfile={refShortProfile} />
      <ShortProfile refShortProfile={refShortProfile} />
      <LatestImageGallery galleryDataJson={galleryDataJson.galleryData} />
      <LatestNews newsDataJson={newsDataJson.newsData} />
      <Footer />
      <BackToTop />
    </>
  );
}
