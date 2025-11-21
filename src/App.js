import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import RoleSelector from './components/RoleSelector/RoleSelector';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import Timeline from './components/Timeline/Timeline';
import Skills from './components/Skills/Skills';
import Blogpost from './components/Blogpost/Blogpost';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import './styles/glassmorphism.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith('role-')) {
        const roleId = hash.replace('role-', '');
        setSelectedRole(roleId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSelectedRole(null);
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleRoleSelect = (roleId) => {
    window.location.hash = `role-${roleId}`;
  };

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        {selectedRole ? (
          // Show project showcase for selected role
          <>
            <ProjectShowcase roleId={selectedRole} />
            <Timeline />
            <Skills />
            <Blogpost />
            <Contact />
          </>
        ) : (
          // Show landing page with hero and role selector
          <>
            <HeroSection />
            <RoleSelector onRoleSelect={handleRoleSelect} />
            <Timeline />
            <Skills />
            <Blogpost />
            <Contact />
          </>
        )}
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
