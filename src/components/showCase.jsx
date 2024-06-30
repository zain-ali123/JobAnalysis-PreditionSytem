import React, { useState } from "react";
import styled from "styled-components";
import group from "../assets/Group6295.svg";
export default function ShowCase() {
  return (
    <>
      <Wrapper>
        <div className={`showCase row d-flex `}>
          <div className={`content col-lg-6 row `}>
            <div className="inner col-lg-8">
              <h1 className="heading">
                Predict Your{" "}
                <span className="colored">
                  Dream
                  <br />
                  
                </span>{" "}
                Job Today
              </h1>
              <p className="para">
                Discover the leading jobs in the
                <br />
                industry and opt best job opportunity.
              </p>
              <div className="btn1">Let's analyze insights</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .showCase {
    background-image: url(${group});
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Nunito Sans";
    width: 100%;
    padding-bottom: 18%;
  }
  .tf-pb-130 {
    padding-bottom: 130px;
  }
  .tf-pt-50 {
    padding-top: 50px;
  }
  .inner {
    text-align: left;
  }
  .content {
    text-align: center;
  }
  .form {
    padding: 25px;
  }
  .formHeader {
    padding: 8px;
  }
  h1 {
    font-weight: 800;
    font-size: 64px;
    line-height: 76px;
    color: #222222;
  }
  .inner {
    margin: auto;
  }

  .btn1 {
    color: #ffffff;
    padding: 15px 96px 15px 95px;
    background: linear-gradient(85.89deg, #49478c 7.82%, #9756ff 117.28%);
    border-color: #635ea3;
    border-radius: 10px;
    border: none;
  }
  .colored {
    color: #635ea3;
  }
  .para {
    padding: 1rem;
  }
  .asterik {
    color: red;
  }

  h3 {
    display: inline;
  }
  .form-group {
    top: 0px;
  }

  .btn4 {
    background: linear-gradient(85.89deg, #49478c 7.82%, #9756ff 117.28%);
    padding: 15px 96px 15px 95px;
    border-radius: 10px;
    width: 95%;
    color: #ffffff;
    margin-top: 22px;
    border: none;
  }
  .buttons {
    margin-left: auto;
  }
  .form-select {
    width: 44%;
  }
  .btn2 {
    background-color: #635ea3;
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    padding: 10px 10px;
    border-top-left-radius: 5px;
    border-color: #635ea3;
    border-bottom-left-radius: 5px;
    border: 0.5px solid;
    border: none;
  }

  .btn3 {
    background-color: #ffffff;
    color: #635ea3;
    font-weight: 700;
    font-size: 14px;
    padding: 9px 10px;
    border-top-right-radius: 5px;
    border-color: #635ea3;
    border-bottom-right-radius: 5px;
    border: 0.5px solid;
    border-left: none;
    border: 0.505143px solid #9d9e9e;
  }
  .btn4 {
    text-align: center;
  }

  .horizontal-line {
    padding-top: 27px;
  }

  .rowLeft,
  .rowRight {
    margin-top: 0.5rem;
    height: 1px;
    border: 0.5px solid #979696;
  }

  .text {
    font-size: 13px;
    color: #979696;
    text-align: center;
  }
  .footerIcon {
    text-align: center;
    padding-top: 1rem;
  }
  .google {
    margin-right: 2px;
  }
  .facebook {
    margin-left: 2px;
  }
  .google,
  .facebook {
    border: 0.505143px solid #9d9e9e;
    border-radius: 5.05143px;
    padding: 10px 19px;
  }

  @media only screen and (max-width: 1050px) {
    .text {
      padding-top: 10px;
    }
    .showCase {
      /* background-color: yellow; */
    }
    .formHeader {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 990px) {
    .formHeader {
      flex-direction: row;
    }
  }

  @media only screen and (max-width: 600px) {
    .formHeader {
      flex-direction: row;
    }
    .form-group {
      margin-top: 40px;
    }
    .text {
      padding-top: 10px;
    }
    .showCase {
      /* background-color: red; */
    }
    .inner {
      padding-left: 35px !important;
    }
  }
`;
