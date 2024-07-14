import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  
  font-family: monospace;
  font-size: 70px;
  font-weight: bold;
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
  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }

`;

const Input = styled.input`
  font-family: monospace;
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
  font-size: 20px;
`;

const TextArea = styled.textarea`
  font-family: monospace;
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: white;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #50a6d4;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  font-family: monospace;
  font-size: 20px;
`;

const Right = styled.div`
  flex: 3;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef()
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
  

    emailjs
      .sendForm(
        "service_a1qzj8t",
        "template_8tcgfx2",
        ref.current,
        "LkrdHRjNmzQZdprkm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Please write your message"
              name="message"
              rows={15}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon 🤞"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;