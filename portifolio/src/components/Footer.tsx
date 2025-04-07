import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: var(--card-bg);
  padding: 3rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 1.5rem;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  span {
    color: var(--accent);
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(230, 230, 230, 0.7);
  margin-bottom: 1.5rem;
  max-width: 400px;
  
  @media (max-width: 768px) {
    margin: 0 auto 1.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const NavLink = styled.a`
  color: var(--text);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(150, 150, 150, 0.1);
  color: var(--text);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent);
    color: white;
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: rgba(230, 230, 230, 0.6);
`;

const BackToTop = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  background: var(--accent);
  color: white;
  border-radius: 5px;
  font-weight: 500;
  margin-bottom: 1.5rem;
  cursor: pointer;
  
  &:hover {
    background: #3278e7;
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <FooterContainer>
      <FooterContent>
        <LeftContent>
          <Logo>
            <span>&lt;</span>Bernardo<span>/&gt;</span>
          </Logo>
          <Description>
            Desenvolvedor Full Stack e Líder Técnico apaixonado por criar soluções inovadoras e compartilhar conhecimento.
          </Description>
          <NavLinks>
            <NavLink href="#projects">Projetos</NavLink>
            <NavLink href="#about">Sobre</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#contact">Contato</NavLink>
          </NavLinks>
          <SocialLinks>
            <SocialIcon 
              href="https://github.com/befrosa" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon 
              href="https://linkedin.com/in/bernardofurtado" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon 
              href="mailto:contato@bernardofurtado.dev"
              whileHover={{ y: -3 }}
            >
              <FaEnvelope />
            </SocialIcon>
          </SocialLinks>
        </LeftContent>
        
        <RightContent>
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voltar ao Topo
          </BackToTop>
          <Copyright>
            &copy; {currentYear} Bernardo Furtado. Todos os direitos reservados.
          </Copyright>
        </RightContent>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
