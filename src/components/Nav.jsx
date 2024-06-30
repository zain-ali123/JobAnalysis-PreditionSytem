import React from "react";
import styled from "styled-components";
import logo from "../assets/image 1.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  const handleWatchNewsClick = () => {
    navigate("/news");
  };
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <>
      <Wrapper>
        <div className="nav row d-flex justify-content-between">
          <div className="img col-lg-2 col-md-2 col-sm-3 col-2  ">
            <div>
              <img
                onClick={handleLogoClick}
                src={logo}
                alt="logo.svg"
                className="logo"
              />
            </div>
          </div>
          <div className="NavLinks col-lg-10 col-md-10 col-sm-9 col-10 d-flex justify-content-between">
            <div
              className="button2"
              style={{
                marginRight: "0px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="btn2" onClick={handleWatchNewsClick}>
                Read Blogs
              </div>
              {/* <div className="btn2 mx-2">Login</div> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .logo {
    cursor: pointer;
  }
  .nav {
    font-family: "Nunito Sans";
    font-style: normal;
    padding: 1rem;
    width: 100%;
  }

  .link1,
  .link2 {
    color: #635ea3;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    margin: auto;
  }
  .button1,
  .button2 {
    margin: auto;
  }

  .btn1 {
    background-color: #ffffff;
    color: #635ea3;
    border: 2px solid #635ea3;
    font-weight: 700;
    font-size: 14px;
    border-color: #635ea3;
    border-radius: 10px;
    padding: 13px 18px;
    margin-right: 9px;
  }

  .btn2 {
    cursor: pointer;
    background-color: #635ea3;
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    border-color: #635ea3;
    border-radius: 10px;
    padding: 15px 25px 15px 30px;
    border: none;
  }
  .btn2b {
    background-color: #635ea3;
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    border-color: #635ea3;
    border-radius: 10px;
    padding: 8px 20px;
    border: 1px solid #635ea3;
  }
  .btn3b {
    background-color: transparent;
    color: #635ea3;
    font-weight: 700;
    font-size: 14px;
    /* border: 1px solid #635ea3; */
    border-radius: 10px;
    padding: 8px 20px;
  }

  /* @media only screen and (max-width: 992px) {
  .nav {
    background-color: lightblue;
  } */

  @media only screen and (max-width: 600px) {
    .button2 {
      margin-right: 0px;
      padding-right: 0px;
    }
  }
`;
