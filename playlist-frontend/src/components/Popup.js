import React from "react";
import styled from "styled-components";
// import { useHistory } from "react-router-dom";
import FormCreatePlaylist from "./FormCreatePlaylist";

const Backgroud = styled.div`
  background-color: black;
  opacity: 0.6;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
const Box = styled.div`
  padding: 1rem;
  width: 500px;
  height: 280px;
  background-color: #C0C0C0;
  border: 3px solid black;

  h1 {
    position: center;
    padding: 10px 70px;
    text-align: lift;
    font-weight: bold;
    font-size: 40px ;
  }
`;

// const CloseButton = styled.div``;
function PopUp() {
  // const history = useHistory();
  return (
    <>
      <Backgroud />
      <Container>
        <Box>
          <FormCreatePlaylist />

          {/* <CloseButton onClick={() => history.goBack()}>click</CloseButton> */}
        </Box>
      </Container>
    </>
  );
}
export default PopUp;
