import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import { Helmet } from "react-helmet";

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>Profil Desa - BRIliant</title>
      </Helmet>
      <Header />
      <Profile />
    </>
  );
}
