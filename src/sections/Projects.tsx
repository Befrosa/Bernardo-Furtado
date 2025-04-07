import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectsSection = styled.section`
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  height: 320px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border: 1px solid rgba(58, 134, 255, 0.2);
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
  filter: brightness(0.9);
`;

const ProjectContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.4), transparent);
  transition: all 0.3s ease;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ProjectTag = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(58, 134, 255, 0.2);
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--accent);
`;

// Variantes para animação
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Dados de exemplo para os projetos
const projectsData = [
  {
    id: 1,
    title: "API REST Microserviços",
    description: "Arquitetura de microserviços escalável com Node.js, Express e Docker",
    image: "https://via.placeholder.com/600x400/1a1a2e/3a86ff?text=API+Microserviços",
    tags: ["Node.js", "Docker", "Microservices"]
  },
  {
    id: 2,
    title: "Dashboard Analítico",
    description: "Painel de controle interativo para visualização de dados em tempo real",
    image: "https://via.placeholder.com/600x400/0f3460/3a86ff?text=Dashboard",
    tags: ["React", "D3.js", "GraphQL"]
  },
  {
    id: 3,
    title: "Sistema de Gestão",
    description: "Plataforma completa para gerenciamento de recursos e equipes",
    image: "https://via.placeholder.com/600x400/170b43/3a86ff?text=Sistema+de+Gestão",
    tags: ["TypeScript", "PostgreSQL", "AWS"]
  },
  {
    id: 4,
    title: "App Mobile Multiplataforma",
    description: "Aplicativo nativo para iOS e Android com sincronização em nuvem",
    image: "https://via.placeholder.com/600x400/240046/3a86ff?text=App+Mobile",
    tags: ["React Native", "Firebase", "Redux"]
  }
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <ProjectsSection id="projects" ref={ref}>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          PORT<span>FOLIO</span>
        </SectionTitle>
      </SectionHeader>
      
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <ProjectGrid>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} variants={cardVariants}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <ProjectTag key={index}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </motion.div>
    </ProjectsSection>
  );
};

export default Projects;
