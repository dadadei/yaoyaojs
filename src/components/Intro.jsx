import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center the content horizontally */
  justify-content: center; /* Center the content vertically */
  text-align: center; /* Center text */

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center content horizontally */

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 400px;
  width: 400px;

  @media only screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`;

const Introduction = styled.p`
  margin-top: 20px;
  font-size: 30px;
  max-width: 1200px;
  font-family: monospace;
  font-weight: bold;
`;

const Intro = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="/img/logo.png" alt="Logo" />
        </Links>
        <Introduction>
          Hi, I'm Yao(咬咬仔)! <br />
          I'm a six-year-old boy with a fun mix of Yorkshire and Schnauzer!
        </Introduction>
      </Container>
    </Section>
  );
};

export default Intro;
