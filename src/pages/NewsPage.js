import React from "react";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

export default function NewsPage() {
  return (
    <>
      <Helmet>
        <title>Berita Seputar Desa - BRIliant</title>
      </Helmet>
      <Header />
    </>
  );
}
