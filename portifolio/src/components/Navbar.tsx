import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled.nav<{ scrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: ${props => props.scrolled 
    ? 'rgba(22, 22, 31, 0.95)' 
    : 'rgba(22, 22, 31, 0.75)'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled 
    ? '0 5px 15px rgba(0, 0, 0, 0.2)' 
    : 'none'};

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  display: flex;
  align-items: center;
  
  span {
    color: var(--accent);
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => (props.isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: var(--primary);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  }
`;

const NavLink = styled(motion.a)<{ active: boolean }>`
  color: var(--text);
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIcon = styled.div<{ isOpen: boolean }>`
  width: 25px;
  height: 3px;
  background-color: ${props => (props.isOpen ? 'transparent' : 'var(--text)')};
  position: relative;
  transition: all 0.3s ease;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: var(--text);
    transition: all 0.3s ease;
  }

  &:before {
    transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'translateY(-8px)')};
  }

  &:after {
    transform: ${props => (props.isOpen ? 'rotate(-45deg)' : 'translateY(8px)')};
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Mudar o estado do navbar quando o usuário rolar
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Detectar a seção ativa com base na posição da rolagem
      const sections = ['hero', 'projects', 'about', 'services', 'skills', 'clients', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer scrolled={scrolled}>
      <Logo href="#hero">
        <span>&lt;</span>Bernardo<span>/&gt;</span>
      </Logo>
      
      <MenuButton onClick={toggleMenu}>
        <MenuIcon isOpen={isOpen} />
      </MenuButton>
      
      <NavLinks isOpen={isOpen}>
        <NavLink 
          href="#hero" 
          active={activeSection === 'hero'}
          onClick={() => setIsOpen(false)}
          whileHover={{ y: -2 }}
        >
          Home
        </NavLink>
        <NavLink 
          href="#projects" 
          active={activeSection === 'projects'}
          onClick={() => setIsOpen(false)}
          whileHover={{ y: -2 }}
        >
          Projetos
        </NavLink>
        <NavLink 
          href="#about" 
          active={activeSection === 'about'}
          onClick={() => setIsOpen(false)}
          whileHover={{ y: -2 }}
        >
          Sobre
        </NavLink>
        <NavLink 
          href="#services" 
          active={activeSection === 'services'}
          onClick={() => setIsOpen(false)}
          whileHover={{ y: -2 }}
        >
          Serviços
        </NavLink>
        <NavLink 
          href="#skills" 
          active={activeSection === 'skills'}
          onClick={() => setIsOpen(false)}
          whileHover={{ y: -2 }}
        >
          Habilidades
        </NavLink>
        <NavLink 
          href="#contact" 
          active={activeSection === 'contact'}
          onClick={() => setIsOpen(false)}
          whileHover={{ y: -2 }}
        >
          Contato
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
