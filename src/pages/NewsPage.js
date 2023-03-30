import React from "react";
import Header from "../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";

export default function NewsPage() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Berita Seputar Desa", path: "/berita-seputar-desa" },
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
    </>
  );
}
