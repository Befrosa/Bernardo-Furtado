import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -5;
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.4) 0%, rgba(15, 52, 96, 0.4) 100%);
  z-index: -1;
`;

const GridLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(150, 150, 150, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(150, 150, 150, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: -1;
`;

const Circle = styled(motion.div)<{ size: number; top: string; left: string; opacity: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: var(--accent);
  opacity: ${props => props.opacity};
  top: ${props => props.top};
  left: ${props => props.left};
  filter: blur(${props => props.size / 5}px);
  z-index: -1;
`;

const BackgroundElements: React.FC = () => {
  return (
    <StyledBackground>
      <Gradient />
      <GridLine />
      
      {/* Elementos de decoração com animação */}
      <Circle
        size={200}
        top="15%"
        left="10%"
        opacity={0.1}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <Circle
        size={300}
        top="70%"
        left="75%"
        opacity={0.08}
        animate={{
          y: [0, -30, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <Circle
        size={150}
        top="40%"
        left="85%"
        opacity={0.12}
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </StyledBackground>
  );
};

export default BackgroundElements;
