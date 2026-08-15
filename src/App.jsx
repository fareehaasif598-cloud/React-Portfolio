import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { profile } from './data/profile.js';

import NavBar from './components/NavBar.jsx';
import AboutScreen from './screens/AboutScreen.jsx';
import ProjectsScreen from './screens/ProjectsScreen.jsx';
import ProjectDetailScreen from './screens/ProjectDetailScreen.jsx';
import ReposScreen from './screens/ReposScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';
import NotFoundScreen from './screens/NotFoundScreen.jsx';

import './styles/app.css';
import './styles/transitions.css';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (screen) => {
    const paths = {
      about: '/',
      projects: '/projects',
      repos: '/repos',
      contact: '/contact',
    };

    navigate(paths[screen] || '/');
  };

  return (
    <div className="shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <NavBar />

      <main id="main" className="screen site-main" key={location.pathname}>
        <Routes>
          <Route path="/" element={<AboutScreen onNavigate={goTo} />} />
          <Route path="/projects" element={<ProjectsScreen />} />
          <Route path="/projects/:slug" element={<ProjectDetailScreen />} />
          <Route path="/repos" element={<ReposScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name} — built with React + Vite.
        </p>
      </footer>
    </div>
  );
}