import React, { useEffect, useRef } from 'react';
import CarouselImg from '../components/Home/Carousel';
import Header from '../components/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LatestNews from '../components/Home/LatestNews';
import LatestImageGallery from '../components/Home/LatestImageGallery';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import ShortProfile from '../components/Home/ShortProfile';
import galleryDataJson from '../json/galleryData.json';
import newsDataJson from '../json/newsData.json';
import shortProfileDataJson from '../json/profileData.json';

export default function LandingPage() {
  const bodyRef = useRef(document.body);
  const refShortProfile = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    bodyRef.current.style.overflowX = 'hidden';
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Website Desa - BRIliant</title>
        </Helmet>
      </HelmetProvider>
      <Header shadow="shadow-md" />
      <main>
        <CarouselImg refShortProfile={refShortProfile} />
        <ShortProfile
          refShortProfile={refShortProfile}
          shortProfileDataJson={shortProfileDataJson.profileData}
        />
        <LatestImageGallery galleryDataJson={galleryDataJson.galleryData} />
        <LatestNews newsDataJson={newsDataJson.newsData} />
        <BackToTop />
      </main>
      <Footer />
    </>
  );
}
