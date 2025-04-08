import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa';
import certificadoPL400 from '../assets/pl400.png';

const EducationSection = styled.section`
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
  flex-direction: column;
  gap: 4rem;
`;

const SectionSubtitle = styled(motion.h3)`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const EducationCard = styled(motion.div)`
  background: rgba(30, 30, 36, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  border-left: 3px solid var(--accent);
  transition: all 0.3s ease;
  border: 1px solid rgba(58, 134, 255, 0.15);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const InstitutionName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const CourseName = styled.h5`
  font-size: 1.1rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
`;

const CertificationsWrapper = styled.div`
  margin-top: 4rem;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled(motion.div)`
  background: rgba(30, 30, 36, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(58, 134, 255, 0.15);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const FeaturedCertificationCard = styled(CertificationCard)`
  background: linear-gradient(145deg, rgba(30, 30, 36, 0.9), rgba(20, 79, 157, 0.5));
  border: 1px solid rgba(58, 134, 255, 0.3);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, transparent 50%, rgba(58, 134, 255, 0.4) 50%);
    border-radius: 0 0 0 100px;
  }
`;

const CertificationTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const CertificationIssuer = styled.h5`
  font-size: 1rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const CertificationDate = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
`;

const CertificationBadgeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const CertificationBadge = styled.img`
  max-width: 180px;
  height: auto;
  display: block;
  border-radius: 8px;
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.2));
`;

const EducationIcon = styled.div`
  font-size: 1.3rem;
  color: var(--accent);
`;

// Animação variantes
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

// Dados de educação
const educationData = [
  {
    id: 1,
    institution: "Universidade Católica de Petrópolis",
    course: "Bacharelado, Direito",
    period: "2017 - 2022"
  },
  {
    id: 2,
    institution: "Estácio",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "jul de 2022 - dez de 2024"
  },
  {
    id: 3,
    institution: "SERRATEC - Parque Tecnológico da Região Serrana RJ",
    course: "Residência em TIC/Software do Serratec - FullStack, Development FullStack",
    period: "jul de 2021 - jan de 2022"
  },
  {
    id: 4,
    institution: "Pontifícia Universidade Católica do Rio de Janeiro",
    course: "Desenvolvimento de Software Desenvolvimento Low Code",
    period: "jan de 2025 - mar de 2025"
  }
];

// Dados de certificações
const certificationsData = [
  {
    id: 1,
    title: "Microsoft Certified: Power Platform Developer Associate (PL-400)",
    issuer: "Microsoft",
    date: "Emitido em jul de 2023",
    featured: true,
    badgeUrl: certificadoPL400
  },
  {
    id: 2,
    title: "Formação em Liderança",
    issuer: "Escola Conquer",
    date: "Verificação emitida em ago de 2023",
    featured: false
  },
  {
    id: 3,
    title: "ReactJS Ignite - 100h",
    issuer: "Rocketseat",
    date: "Verificação emitida em out de 2022",
    featured: false
  },
  {
    id: 4,
    title: "HTML E CSS - 70h",
    issuer: "Alura",
    date: "Verificação emitida em mar de 2022",
    featured: false
  },
  {
    id: 5,
    title: "REACT JS - 100h",
    issuer: "Alura",
    date: "Verificação emitida em mar de 2022",
    featured: false
  },
  {
    id: 6,
    title: "Scrum Fundamentals Certified",
    issuer: "VMEdu Inc",
    date: "Verificação emitida em ago de 2021",
    featured: false
  }
];

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <EducationSection id="education" ref={ref}>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          EDUCAÇÃO E <span>CERTIFICAÇÕES</span>
        </SectionTitle>
      </SectionHeader>
      
      <ContentWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionSubtitle variants={itemVariants}>Formação Acadêmica</SectionSubtitle>
          <EducationGrid>
            {educationData.map((edu) => (
              <EducationCard 
                key={edu.id}
                variants={itemVariants}
              >
                <InstitutionName>
                  <EducationIcon><FaGraduationCap /></EducationIcon>
                  {edu.institution}
                </InstitutionName>
                <CourseName>{edu.course}</CourseName>
                <Period>{edu.period}</Period>
              </EducationCard>
            ))}
          </EducationGrid>
        </motion.div>
        
        <CertificationsWrapper>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <SectionSubtitle variants={itemVariants}>Certificações</SectionSubtitle>
            <CertificationsGrid>
              {certificationsData.map((cert) => (
                cert.featured ? (
                  <FeaturedCertificationCard
                    key={cert.id}
                    variants={itemVariants}
                  >
                    <CertificationTitle>
                      <EducationIcon style={{ display: 'inline-block', marginRight: '8px' }}>
                        <FaAward />
                      </EducationIcon>
                      {cert.title}
                    </CertificationTitle>
                    <CertificationIssuer>{cert.issuer}</CertificationIssuer>
                    <CertificationDate>{cert.date}</CertificationDate>
                    <CertificationBadgeWrapper>
                      <CertificationBadge 
                        src={cert.badgeUrl} 
                        alt="Microsoft Certification Badge" 
                      />
                    </CertificationBadgeWrapper>
                  </FeaturedCertificationCard>
                ) : (
                  <CertificationCard
                    key={cert.id}
                    variants={itemVariants}
                  >
                    <CertificationTitle>
                      <EducationIcon style={{ display: 'inline-block', marginRight: '8px' }}>
                        <FaCertificate />
                      </EducationIcon>
                      {cert.title}
                    </CertificationTitle>
                    <CertificationIssuer>{cert.issuer}</CertificationIssuer>
                    <CertificationDate>{cert.date}</CertificationDate>
                  </CertificationCard>
                )
              ))}
            </CertificationsGrid>
          </motion.div>
        </CertificationsWrapper>
      </ContentWrapper>
    </EducationSection>
  );
};

export default Education;
