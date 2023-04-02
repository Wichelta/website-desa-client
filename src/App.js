import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgendaActivitiesPage from './pages/AgendaActivitiesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import LandingPage from './pages/LandingPage';
import NewsPage from './pages/NewsPage';
import PageNotFound from './pages/PageNotFound';
import ProfilePage from './pages/ProfilePage';
import Example from './pages/Example';

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
          <Route path="*" element={<PageNotFound />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
