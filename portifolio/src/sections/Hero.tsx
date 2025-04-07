import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/eu.jpeg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-top: 5rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  z-index: 2;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const ProfileImage = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  background: var(--gradient);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
  }
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid var(--accent);
    border-radius: 20px;
    opacity: 0.5;
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin-bottom: 2rem;
  }
`;

const Greeting = styled(motion.h3)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: var(--accent);
  display: flex;
  align-items: center;
  
  &:before {
    content: '';
    width: 30px;
    height: 2px;
    background-color: var(--accent);
    margin-right: 1rem;
    display: inline-block;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    
    &:before {
      display: none;
    }
  }
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  span {
    color: var(--accent);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: rgba(230, 230, 230, 0.8);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 600px;
  color: rgba(230, 230, 230, 0.7);
  
  @media (max-width: 768px) {
    margin: 0 auto 2rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: var(--accent);
  color: white;
  border-radius: 5px;
  font-weight: 500;
  margin-right: 1rem;
  border: 2px solid var(--accent);
  transition: all 0.3s ease;
  
  &:hover {
    background: transparent;
    color: var(--accent);
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: transparent;
  color: var(--text);
  border-radius: 5px;
  font-weight: 500;
  border: 2px solid rgba(230, 230, 230, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const ShapeDeco = styled.div`
  position: absolute;
  bottom: 80px;
  left: 40%;
  width: 15px;
  height: 15px;
  background: var(--accent);
  opacity: 0.6;
  border-radius: 50%;
  z-index: 1;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const CodeBlock = styled.div`
  position: absolute;
  bottom: 100px;
  right: 10%;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(20, 20, 40, 0.85);
  padding: 1.2rem;
  border-radius: 8px;
  border-left: 3px solid var(--accent);
  max-width: 350px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  z-index: 10;
  
  pre {
    margin: 0;
    white-space: pre-wrap;
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <Greeting
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Olá, eu sou
        </Greeting>
        
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Bernardo <span>Furtado</span>
        </Name>
        
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Líder Técnico & Desenvolvedor
        </Title>
        
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Especialista em transformar ideias complexas em soluções tecnológicas 
          elegantes e eficientes, com foco em qualidade de código e liderança de equipes.
        </Description>
        
        <div>
          <CTAButton
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale Comigo
          </CTAButton>
          
          <SecondaryButton
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Projetos
          </SecondaryButton>
        </div>
      </HeroContent>
      
      <ImageContainer>
        <ProfileImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img src={profileImage} alt="Bernardo Furtado" />
        </ProfileImage>
      </ImageContainer>
      
      <ShapeDeco />
      
      <CodeBlock>
        <pre>
{`const developer = {
  name: "Bernardo",
  skills: ["Liderança", "Código"],
  passion: "Tech Solutions"
};`}
        </pre>
      </CodeBlock>
    </HeroSection>
  );
};

export default Hero;
