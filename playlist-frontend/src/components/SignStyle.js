import React from "react";
import styled from "styled-components";

// page

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
// nav
const RightContainer = styled.div`
  background-color: black;
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-size: 8rem;
  width: 30rem;
  height: 10rem;
  background-color:	#FDF5E6;
`;

// myplay
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:	#C0C0C0;
  width: 50vw;
  height: 100vh;
`;
const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
  color:	#FFFFFF;
`;
const HeadSign = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 50px;
  color:	#FFFFFF;
  margin: 2rem;
`;

const Input = styled.input`
  margin: 1rem;
  width: 25rem;
  height: 2.5rem;
  border-radius: 25px;
  border: 0;
  border-style: none;
  padding-left: 20px;
`;

const ButtonSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 1rem;
  width: 26.4rem;
  height: 2.5rem;
  font-size: 20px;
  background-color: #ae3a3a;
  transition: 0.3s;
  &:hover {
    display: flex;
    text-align: center;
    justify-content: center;
    background-color:#484848;
    cursor: pointer;
  }
`;
const Register = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  transition: 0.3s;
  &:hover {
    color: 	#FFFFFF;
    cursor: pointer;
  }
`;

export default function App() {
  return (
    <>
      <Container>
        <RightContainer>
          <Logo> MUSIC </Logo>
        </RightContainer>

        <LeftContainer>
          <SignContainer>
            <HeadSign>Login</HeadSign>
            <Input placeholder="Username.."></Input>
            <Input placeholder="Password.."></Input>
            <ButtonSubmit>Submit</ButtonSubmit>
            <Register>Created new account</Register>
          </SignContainer>
        </LeftContainer>
      </Container>
    </>
  );
}
