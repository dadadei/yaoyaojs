import React from "react";
import styled from "styled-components";
import Contact from "./components/Contact";
import Daily from "./components/Daily";
import Hobby from "./components/Hobby";
import Intro from "./components/Intro";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #f8eeee;
  background: url("./img/bg1.png");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Intro />
      <Daily />
      <Hobby />
      <Contact />
    </Container>
  );
}

export default App;
