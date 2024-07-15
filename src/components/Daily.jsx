import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
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
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
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
  color: white;
  font-family: monospace;

  @media only screen and (max-width: 768px) {
    padding: 10px;
    text-align: center; 
  }
 
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 500px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const Daily = () => {
    return(
        <Section>
          <Container>
            <Left>
              <Title>Eat. Sleep. Play.</Title>
              <Desc>These are my three favorite activities every day! I start my day with a scrumptious meal that gets my tail wagging with excitement. 
                Eating is such a delight – I never miss a chance for a tasty treat! After filling my belly, it's nap time. 
                I find the coziest spot and drift into dreamland, recharging for my next adventure. 
                But the real fun begins with playtime! Whether it's a game of fetch, tug-of-war, 
                or just zooming around the yard, I dive into it with boundless energy and joy!
              </Desc>
            </Left>   
            <Right>
              <Canvas>
                <Suspense fallback={null}>
                  <OrbitControls enableZoom={false} />
                  <ambientLight intensity={100} />
                  <directionalLight position={[3, 2, 1]} />
                  <Sphere args={[1, 200, 200]} scale={2.3}>
                  <MeshDistortMaterial
                    color="white"
                    attach="material"
                    distort={0.3}
                    speed={1}
                  />
                </Sphere>
              </Suspense>
            </Canvas> 
              <Img src="./img/bg3.png" alt="dog"/>
            </Right>
          </Container>
        </Section>
    )
}

export default Daily;