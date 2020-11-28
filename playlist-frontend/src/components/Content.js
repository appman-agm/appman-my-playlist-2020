import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 85%;
  height: 100vh;
  background-color: white;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  h1 {
    margin-top: 2rem;
    margin-right: 9rem;
  }
`;

const Pic = styled.div`
  padding: 40px;
  background-color: blue;

  margin-top: 2rem;
  margin-left: 2rem;
  span {
    font-size: 10rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Text = styled.div`
  margin-left: 2rem;

  h1{
    font-size:2rem;
    padding:0 0 2rem 0 ;
  }
  span {}
`;

function Content() {
  return (
    <Container>
      <Wrapper>
        <Pic>
          <span>M</span>
        </Pic>
        <Text>
          <h1>MY PLAYLIST</h1>
          <span>CREART BY asdjalsdjldsjf: 2 song ,7 min 44 sec</span>
          <p></p>
        </Text>
      </Wrapper>
    </Container>
  );
}
export default Content;
