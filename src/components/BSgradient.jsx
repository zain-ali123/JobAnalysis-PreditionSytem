import React from "react";
// import Contact from "../Contact/Contact";
import Banner from "./Banner";
import styled from "styled-components";
import Predict from "./Predict";
export default function BSgradient() {
  return (
    <>
      <Wrapper>
        <div className="gradient">
          <Banner />
          <Predict />
          {/* <Contact /> */}
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .gradient {
    /* border:2px solid black; */
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 73%,
      rgba(247, 237, 205, 1) 98%
    );
  }
`;
