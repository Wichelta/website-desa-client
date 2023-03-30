import React from "react";
import CarouselImg from "../components/Carousel";
import Header from "../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function LandingPage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Website Desa - BRIliant</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <CarouselImg />
    </>
  );
}
