import React from "react";
import Header from "../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";
import ImageGallery from "../components/ImageGallery";
import imageData from "../json/galleryPage.json";

export default function GalleryPage() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Galeri Desa", path: "/galeri-desa" },
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
      <ImageGallery images={imageData.images} />
    </>
  );
}
