import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgendaActivitiesPage from './pages/AgendaActivitiesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import LandingPage from './pages/LandingPage';
import NewsPage from './pages/NewsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/profil-desa" element={<ProfilePage />} />
          <Route path="/galeri-desa" element={<GalleryPage />} />
          <Route path="/berita-terbaru" element={<NewsPage />} />
          <Route path="/agenda-kegiatan-desa" element={<AgendaActivitiesPage />} />
          <Route path="/kontak" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
