import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile/ProfileDetails';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import profileDataJson from '../json/profileData.json';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function ProfilePage() {
  const links = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil Desa', path: '/profil-desa' },
  ];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Profil Desa - BRIliant</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <Breadcrumb links={links} />
      <main>
        <Profile profileDataJson={profileDataJson.profileData} />
        <BackToTop />
      </main>
      <Footer />
    </>
  );
}
