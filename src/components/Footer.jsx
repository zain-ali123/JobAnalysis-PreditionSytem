import React from "react";
import logo from "../assets/image 1.svg";
import Facebook from "../assets/FFacebook.svg";
import Linkedin from "../assets/Linkedin.svg";
import path from "../assets/Path.svg";
import Twitter from "../assets/TTwitter.svg";
import styled from "styled-components";

export default function Footer() {
  const services = [
    { name: "List item 1" },
    { name: "List item 1" },
    { name: "List item 1" },
    { name: "List item 1" },
    { name: "List item 1" },
    { name: "List item 1" },
  ];
  return (
    <Wrapper>
      <div className="footer">
        <div className="row">
          <div className="services col-lg-2 col-md-3 col-sm-4 col-6">
            <p>Services</p>
            {services.map((service, index) => (
              <div key={index}>
                <a href="/">{service.name}</a>
              </div>
            ))}
          </div>
          <div className="company col-lg-2 col-md-3 col-sm-4 col-6">
            <p>Company</p>
            {services.map((service, index) => (
              <div key={index}>
                <a href="/">{service.name}</a>
              </div>
            ))}
          </div>
          <div className="about col-lg-2 col-md-3 col-sm-4 col-6">
            <p>About</p>
            {services.map((service, index) => (
              <div key={index}>
                <a href="/">{service.name}</a>
              </div>
            ))}
          </div>
          <div className="Links col-lg-2 col-md-3 col-sm-4 col-6">
            <p>Links</p>
            {services.map((service, index) => (
              <div key={index}>
                <a href="/">{service.name}</a>
              </div>
            ))}
          </div>
          <div className="col-md-6 col-lg-4  col-sm-8 col-12  subscribe">
            <div className="subscribe-group">
              <p>Subscribe</p>
              <div className="inputs">
                <input type="text" placeholder="Email Address" />
                <button>
                  <img src={path} alt="" />
                </button>
              </div>
              <span className="subscribe-text">
                Hello, we are Lift Media. Our goal is to translate the positive
                effects from revolutionizing how companies engage with their
                clients & their team.
              </span>
            </div>
          </div>
        </div>
        <div className="line-break"></div>
        <div className="row footer-base">
          <div className="d-flex justify-content-between">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="footer-social-links forHide">
              <a href="/">Terms</a>
              <a href="/">Privacy</a>
              <a href="/">Cookies</a>
            </div>
            <div className="footer-social-links">
              <a href="/">
                <img src={Facebook} alt="" />
              </a>
              <a href="/">
                <img src={Linkedin} alt="" />
              </a>
              <a href="/">
                <img src={Twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .footer {
    background: #ffffff;
    padding: 50px;
    font-family: Nunito Sans;
    margin-top: 50px;
  }
  a,
  p {
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    color: #373737;
    opacity: 0.75;
  }

  p {
    opacity: 1;
  }

  .subscribe {
    background-color: #f7f7fa;

    p {
      font-family: "Nunito Sans";
      font-weight: 400;
      font-size: 16px;
      color: #373737;
    }

    .subscribe-group {
      margin: 1rem 1rem;
      color: #373737;
      .inputs {
        height: 50px;
        font-family: Nunito Sans;
        input {
          height: 100%;
          padding-left: 10px !important;
          color: white;
          font-size: 14px;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          outline: none;
          background: #635ea3;
          border: 1.5px solid #e7e8f2;
        }
        input::-webkit-input-placeholder {
          color: white;
        }

        button {
          outline: none;
          border: none;
          background: #ffffff;
          border-color: #d6d6d6;
          height: 100%;
          width: 50px;
        }
      }
      .subscribe-text {
        margin-top: 10px;
        font-family: "Nunito Sans";
        font-weight: 400;
        font-size: 12px;
        color: #373737;
      }
    }
  }

  .line-break {
    border-top: 1px solid #373737;
    margin-top: 2rem;
    opacity: 0.2;
  }

  .footer-base {
    margin-top: 1rem;
  }

  .footer-social-links {
    align-self: center;

    button {
      outline: none;
      border: none;
      cursor: pointer;
      margin-left: 0.5rem;
    }

    a {
      opacity: 0.5;
    }

    a + a {
      margin-left: 0.5rem;
    }
  }
  @media only screen and (max-width: 992px) {
    .subscribe {
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 600px) {
    .footer-social-links {
      display: flex;
    }
    .forHide {
      display: none;
    }
  }
`;
