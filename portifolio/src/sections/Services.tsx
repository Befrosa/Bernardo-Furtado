import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaDatabase, FaUsers, FaChartLine, FaLaptopCode } from 'react-icons/fa';

const ServicesSection = styled.section`
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

const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(30, 30, 36, 0.7);
  border-radius: 15px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(58, 134, 255, 0.15);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: var(--accent);
    opacity: 0.7;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 1.5rem;
  opacity: 0.8;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

const ServiceFeatures = styled.ul`
  margin-top: 1.5rem;
  padding-left: 1rem;
`;

const ServiceFeature = styled.li`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(230, 230, 230, 0.7);
  margin-bottom: 0.5rem;
  position: relative;
  
  &:before {
    content: '▹';
    position: absolute;
    left: -1rem;
    color: var(--accent);
  }
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Dados dos serviços
const servicesData = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações web responsivas de alta performance",
    icon: <FaCode />,
    features: [
      "Desenvolvimento frontend com React e TypeScript",
      "Otimização de performance e SEO",
      "Interfaces modernas e responsivas"
    ]
  },
  {
    id: 2,
    title: "Desenvolvimento Backend",
    description: "APIs robustas e sistemas de servidor escaláveis",
    icon: <FaServer />,
    features: [
      "Arquitetura de APIs REST e GraphQL",
      "Microsserviços com Node.js e Express",
      "Autenticação e autorização segura"
    ]
  },
  {
    id: 3,
    title: "Arquitetura de Dados",
    description: "Soluções de armazenamento e processamento de dados eficientes",
    icon: <FaDatabase />,
    features: [
      "Modelagem de bancos SQL e NoSQL",
      "Otimização de consultas e performance",
      "Pipelines de ETL e integrações"
    ]
  },
  {
    id: 4,
    title: "Liderança Técnica",
    description: "Gestão de equipes de desenvolvimento e projetos técnicos",
    icon: <FaUsers />,
    features: [
      "Mentoria e desenvolvimento de equipes",
      "Implementação de metodologias ágeis",
      "Planejamento e estimativas de projeto"
    ]
  },
  {
    id: 5,
    title: "Consultoria Técnica",
    description: "Análise e recomendações para melhorar seus sistemas existentes",
    icon: <FaChartLine />,
    features: [
      "Auditoria de código e arquitetura",
      "Estratégias de escalabilidade",
      "Recomendações de melhores práticas"
    ]
  },
  {
    id: 6,
    title: "Desenvolvimento Full Stack",
    description: "Soluções completas desde o frontend até o backend",
    icon: <FaLaptopCode />,
    features: [
      "Aplicações web end-to-end",
      "Integração com APIs de terceiros",
      "Implantação e DevOps"
    ]
  }
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <ServicesSection id="services" ref={ref}>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          MEUS <span>SERVIÇOS</span>
        </SectionTitle>
        <SectionDescription
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ofereço soluções completas para suas necessidades de desenvolvimento e liderança técnica.
          Cada serviço é personalizado para atender às demandas específicas do seu projeto.
        </SectionDescription>
      </SectionHeader>
      
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <ServicesGrid>
          {servicesData.map((service) => (
            <ServiceCard key={service.id} variants={cardVariants}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, index) => (
                  <ServiceFeature key={index}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </motion.div>
    </ServicesSection>
  );
};

export default Services;
