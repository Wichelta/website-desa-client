import React, { useEffect } from 'react';
import CarouselImg from '../components/Home/Carousel';
import Header from '../components/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LatestNews from '../components/Home/LatestNews';
import data from '../json/newsData.json';

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
      <LatestNews data={data.newsData} />
    </>
  );
}
