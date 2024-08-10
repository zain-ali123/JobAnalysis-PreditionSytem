import React from "react";
import styled from "styled-components";
import banner from "../assets/BFrame5457.svg";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <Wrapper>
        <div className="Banner">
          <div className="row justify-content-center">
            <div className="col-lg-10 image-container">
              <div className="image">
                <div className="content">
                  <h1>
                    Analyze New Insights
                    <br />
                    on the Go!
                  </h1>
                  <Link to="/dropdown"> <button>Get started</button></Link>

                </div>
              </div>
            </div>
          </div>
          {/* <div className="row justify-content-center">
            <div className="col-lg-8 dashBoard">
              <iframe
                title="layOffs"
                width="100%"
                height="686"
                src="https://app.powerbi.com/view?r=eyJrIjoiZWQ2MmI3ZTctY2I1Zi00MTg0LWE1ZmUtZGRjYmU3ZjhlMGNlIiwidCI6IjEyYjIyMWIzLTA0NjQtNDIyMy04OWU1LTg4ODgzNTc3OGI1OCIsImMiOjl9"
                frameBorder="0"
                allowFullScreen="true"
              ></iframe>
            </div>
          </div> */}
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .dashBoard {
    padding-bottom: 100px;
  }
  .Banner {
    width: 100%;
    overflow: hidden; /* Ensure no overflow */
  }
  .image-container {
    padding: 100px 0;
  }
  .image {
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    height: 328px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    text-align: center;
    margin: auto;
    max-width: 600px; /* Limit content width */
    padding: 0 20px;
  }
  h1 {
    color: white;
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    margin-bottom: 20px;
  }
  button {
    display: inline-block;
    padding: 18px 40px;
    gap: 10px;
    background: #ffffff;
    border-radius: 10px;
    font-size: 18px;
    color: #373737;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button:hover {
    background-color: #f0f0f0;
  }

  @media only screen and (max-width: 992px) {
    .image-container {
      padding: 50px 0;
    }
    h1 {
      font-size: 36px;
    }
  }

  @media only screen and (max-width: 576px) {
    .image {
      height: 250px;
    }
    h1 {
      font-size: 28px;
    }
  }
`;
