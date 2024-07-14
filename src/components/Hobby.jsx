import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  justify-content: center; /* Center the content vertically */
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 3; 

  @media only screen and (max-width: 768px) {
    display: none;
  }  
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  transition: transform 0.5s, color 0.8s; 

  &:hover {
    color: white;
    transform: scale(1.1); 
  }

  @media only screen and (max-width: 768px) {
    font-size: 60px;
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  font-family: monospace;
  @media only screen and (max-width: 768px) {
    padding: 10px;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Hobby = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Chase. Bond. Explore.</Title>
          <Desc>
            I absolutely love taking walks in nature, sniffing every tree and bush, and discovering all sorts of exciting smells! 
            Following my dad is the best – whether he's walking, running, or just throwing the ball, I'm always ready for action. 
            Playing fetch is a blast, especially when I get to show off my speed and agility. Every game is a new adventure, and it brings us closer together, filling our days with fun and joy!
          </Desc>
        </Right>
      </Container>
    </Section>
  );
};

export default Hobby;
