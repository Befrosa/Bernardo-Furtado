import { useEffect } from 'react'
import styled from 'styled-components'
import './index.css'

// Componentes
import Navbar from './components/Navbar'
import BackgroundElements from './components/BackgroundElements'
import Footer from './components/Footer'

// Seções
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Services from './sections/Services'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

function App() {
  // Smooth scroll para navegação interna
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId) as HTMLElement;
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Ajuste para o navbar fixo
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <>
      <BackgroundElements />
      <Navbar />
      <Main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Skills />
        <Contact />
      </Main>
      <Footer />
    </>
  )
}

export default App
