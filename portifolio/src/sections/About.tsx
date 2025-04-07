import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  padding: 5rem 0;
  position: relative;
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  span {
    color: var(--accent);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const LeftColumn = styled(motion.div)`
  flex: 1;
`;

const RightColumn = styled(motion.div)`
  flex: 1;
`;

const AboutParagraph = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const AboutHighlight = styled.span`
  color: var(--accent);
  font-weight: 500;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const TechItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  &:before {
    content: '▹';
    font-size: 1rem;
    color: var(--accent);
  }
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(30, 30, 36, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 3px solid var(--accent);
  transition: all 0.3s ease;
  border: 1px solid rgba(58, 134, 255, 0.15);
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const CompanyName = styled.span`
  color: var(--accent);
  font-weight: 500;
`;

const JobPeriod = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

const JobDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

// Animação variantes
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Dados de tecnologias
const techStack = [
  "JavaScript / TypeScript", 
  "React / Next.js",
  "Node.js / Express",
  "Python / Django",
  "AWS / Azure",
  "SQL / NoSQL",
  "Docker / Kubernetes",
  "Git / CI/CD"
];

// Dados de experiência
const experiences = [
  {
    id: 1,
    title: "Líder Técnico",
    company: "TechCorp Brasil",
    period: "Jan 2022 - Presente",
    description: "Lidero uma equipe de 8 desenvolvedores, supervisionando projetos críticos e garantindo a qualidade da entrega. Implementei metodologias ágeis que aumentaram a produtividade em 25%."
  },
  {
    id: 2,
    title: "Desenvolvedor Full Stack Sênior",
    company: "InnovaSoft",
    period: "Mar 2019 - Dez 2021",
    description: "Atuei no desenvolvimento de aplicações web escaláveis utilizando React, Node.js e AWS. Arquitetei soluções que suportaram o crescimento de 300% no tráfego."
  }
];

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <AboutSection id="about" ref={ref}>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          SOBRE <span>MIM</span>
        </SectionTitle>
      </SectionHeader>
      
      <ContentWrapper>
        <LeftColumn
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AboutParagraph variants={itemVariants}>
            Olá! Sou um <AboutHighlight>Líder Técnico</AboutHighlight> e <AboutHighlight>Desenvolvedor Full Stack</AboutHighlight> com mais de 7 anos de experiência no desenvolvimento de soluções tecnológicas de alto impacto.
          </AboutParagraph>
          
          <AboutParagraph variants={itemVariants}>
            Minha jornada na tecnologia começou com o desenvolvimento web, mas rapidamente evoluiu para arquitetura de sistemas e liderança técnica. Apaixonado por encontrar o equilíbrio perfeito entre código elegante e resultados de negócios.
          </AboutParagraph>
          
          <AboutParagraph variants={itemVariants}>
            Atualmente, foco em liderar equipes e projetar sistemas escaláveis, mantendo sempre o compromisso com qualidade e inovação. Algumas das tecnologias com as quais trabalho:
          </AboutParagraph>
          
          <TechGrid>
            {techStack.map((tech, index) => (
              <TechItem 
                key={index}
                variants={itemVariants}
              >
                {tech}
              </TechItem>
            ))}
          </TechGrid>
        </LeftColumn>
        
        <RightColumn
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp) => (
            <ExperienceCard 
              key={exp.id}
              variants={itemVariants}
            >
              <JobTitle>
                {exp.title} <CompanyName>@ {exp.company}</CompanyName>
              </JobTitle>
              <JobPeriod>{exp.period}</JobPeriod>
              <JobDescription>{exp.description}</JobDescription>
            </ExperienceCard>
          ))}
        </RightColumn>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;
