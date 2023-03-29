import React from "react";
import CarouselImg from "../components/Carousel";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Website Desa - BRIliant</title>
      </Helmet>
      <Header />
      <CarouselImg />
    </>
  );
}
