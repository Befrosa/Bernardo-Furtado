import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaAws, 
  FaDatabase, 
  FaPython, 
  FaJsSquare, 
  FaGitAlt,
  FaCode
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiGraphql, SiExpress, SiNextdotjs } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 5rem 0;
  position: relative;
`;

const SectionHeader = styled.div`
  margin-bottom: 4rem;
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

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const CategoryContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CategoryTitle = styled(motion.h3)`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background: var(--accent);
    border-radius: 3px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(30, 30, 36, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(58, 134, 255, 0.15);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
`;

const SkillContent = styled.div`
  flex: 1;
`;

const SkillTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.5rem;
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 5px;
  background: rgba(150, 150, 150, 0.2);
  border-radius: 5px;
  overflow: hidden;
`;

const SkillProgress = styled.div<{ level: number }>`
  height: 100%;
  width: ${props => props.level}%;
  background: var(--accent);
  background: linear-gradient(90deg, var(--accent) 0%, #3a86ff 100%);
  border-radius: 5px;
`;

// Variantes para animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

// Dados das habilidades
const skillsData = {
  frontend: [
    { name: "React", icon: <FaReact />, level: 95 },
    { name: "TypeScript", icon: <SiTypescript />, level: 90 },
    { name: "JavaScript", icon: <FaJsSquare />, level: 95 },
    { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
    { name: "HTML/CSS", icon: <FaCode />, level: 90 }
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, level: 90 },
    { name: "Express", icon: <SiExpress />, level: 85 },
    { name: "Python", icon: <FaPython />, level: 80 },
    { name: "GraphQL", icon: <SiGraphql />, level: 75 },
    { name: "REST APIs", icon: <FaCode />, level: 90 }
  ],
  database: [
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 85 },
    { name: "MongoDB", icon: <SiMongodb />, level: 80 },
    { name: "SQL", icon: <FaDatabase />, level: 90 }
  ],
  devops: [
    { name: "Docker", icon: <FaDocker />, level: 80 },
    { name: "AWS", icon: <FaAws />, level: 75 },
    { name: "Git", icon: <FaGitAlt />, level: 95 }
  ]
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <SkillsSection id="skills" ref={ref}>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          MINHAS <span>HABILIDADES</span>
        </SectionTitle>
      </SectionHeader>
      
      <SkillsContainer>
        <CategoryContainer
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <CategoryTitle variants={itemVariants}>Frontend</CategoryTitle>
          <SkillsGrid>
            {skillsData.frontend.map((skill, index) => (
              <SkillCard key={index} variants={itemVariants}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillContent>
                  <SkillTitle>{skill.name}</SkillTitle>
                  <SkillLevel>
                    <SkillProgress level={skill.level} />
                  </SkillLevel>
                </SkillContent>
              </SkillCard>
            ))}
          </SkillsGrid>
        </CategoryContainer>
        
        <CategoryContainer
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <CategoryTitle variants={itemVariants}>Backend</CategoryTitle>
          <SkillsGrid>
            {skillsData.backend.map((skill, index) => (
              <SkillCard key={index} variants={itemVariants}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillContent>
                  <SkillTitle>{skill.name}</SkillTitle>
                  <SkillLevel>
                    <SkillProgress level={skill.level} />
                  </SkillLevel>
                </SkillContent>
              </SkillCard>
            ))}
          </SkillsGrid>
        </CategoryContainer>
        
        <CategoryContainer
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <CategoryTitle variants={itemVariants}>Banco de Dados</CategoryTitle>
          <SkillsGrid>
            {skillsData.database.map((skill, index) => (
              <SkillCard key={index} variants={itemVariants}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillContent>
                  <SkillTitle>{skill.name}</SkillTitle>
                  <SkillLevel>
                    <SkillProgress level={skill.level} />
                  </SkillLevel>
                </SkillContent>
              </SkillCard>
            ))}
          </SkillsGrid>
        </CategoryContainer>
        
        <CategoryContainer
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <CategoryTitle variants={itemVariants}>DevOps</CategoryTitle>
          <SkillsGrid>
            {skillsData.devops.map((skill, index) => (
              <SkillCard key={index} variants={itemVariants}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillContent>
                  <SkillTitle>{skill.name}</SkillTitle>
                  <SkillLevel>
                    <SkillProgress level={skill.level} />
                  </SkillLevel>
                </SkillContent>
              </SkillCard>
            ))}
          </SkillsGrid>
        </CategoryContainer>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
