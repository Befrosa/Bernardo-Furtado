import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactSection = styled.section`
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
  margin: 0 auto 2rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const ContactContainer = styled.div`
  display: flex;
  gap: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
`;

const ContactForm = styled(motion.div)`
  flex: 1;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(30, 30, 36, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.2rem;
  color: var(--accent);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(58, 134, 255, 0.15);
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(30, 30, 36, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(58, 134, 255, 0.15);
  
  &:hover {
    color: var(--accent);
    transform: translateY(-3px);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: white;
  font-weight: 500;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(30, 30, 36, 0.7);
  border: 1px solid rgba(150, 150, 150, 0.3);
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: var(--accent);
    outline: none;
    box-shadow: 0 0 0 2px rgba(58, 134, 255, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(30, 30, 36, 0.7);
  border: 1px solid rgba(150, 150, 150, 0.3);
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: var(--accent);
    outline: none;
    box-shadow: 0 0 0 2px rgba(58, 134, 255, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3278e7;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const FormMessage = styled.div<{ isError: boolean }>`
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 5px;
  background: ${props => props.isError ? 'rgba(255, 100, 100, 0.2)' : 'rgba(100, 255, 100, 0.2)'};
  color: ${props => props.isError ? '#ff5555' : '#55ff55'};
  font-size: 0.9rem;
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

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando uma requisição de API
    setTimeout(() => {
      setFormStatus({
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
        isError: false
      });
      setIsSubmitting(false);
      
      // Limpar o formulário
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      // Remover a mensagem após alguns segundos
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactSection id="contact" ref={ref}>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          FALE <span>COMIGO</span>
        </SectionTitle>
        <SectionDescription
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tem um projeto em mente ou quer conversar sobre tecnologia? Entre em contato comigo!
        </SectionDescription>
      </SectionHeader>
      
      <ContactContainer>
        <ContactInfo
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <InfoItem variants={itemVariants}>
            <InfoIcon>
              <FaMapMarkerAlt />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>Localização</InfoTitle>
              <InfoText>São Paulo, SP - Brasil</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem variants={itemVariants}>
            <InfoIcon>
              <FaEnvelope />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>Email</InfoTitle>
              <InfoText>contato@bernardofurtado.dev</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem variants={itemVariants}>
            <InfoIcon>
              <FaPhone />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>Telefone</InfoTitle>
              <InfoText>+55 (11) 98765-4321</InfoText>
            </InfoContent>
          </InfoItem>
          
          <SocialLinks>
            <SocialLink 
              href="https://github.com/befrosa" 
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com/in/bernardofurtado" 
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink 
              href="mailto:contato@bernardofurtado.dev"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        
        <ContactForm
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Assunto</FormLabel>
              <FormInput 
                type="text" 
                id="subject" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Mensagem</FormLabel>
              <FormTextarea 
                id="message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </FormGroup>
            
            <SubmitButton 
              type="submit"
              disabled={isSubmitting}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </SubmitButton>
            
            {formStatus && (
              <FormMessage isError={formStatus.isError}>
                {formStatus.message}
              </FormMessage>
            )}
          </form>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
