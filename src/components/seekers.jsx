import React from "react";
import Vector from "../assets/Frame87.svg";
import styled from "styled-components";
import group from "../assets/Group237845.svg";

export default function Seekers() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="Employeers row justify-content-between">
            <div className="content col-lg-4 col">
              <div className="col-lg-12 removeOffset">
                <h2>Employeers</h2>
                <div className="line"></div>
                <p>Free job posting</p>
                <div className="line"></div>
                <p>
                  View candidate before deciding
                  <br />
                  which are a good fit
                </p>
                <div className="line"></div>

                <p>
                  One format for profile/resume makes it easier to see all the
                  <br />
                  key points for evaluating a candidate within seconds
                </p>
              </div>
            </div>
            <div className="col-lg-7 image">
              <img className="img-fluid" src={Vector} alt="vector-img" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 dashBoard">
              <iframe
                title="JobMarketAnalysis"
                width="100%"
                height="686"
                src="https://app.powerbi.com/view?r=eyJrIjoiYTU0NTJlODMtMTFkNC00Njc1LWFkNmUtMTVlOTBiZTY4NTViIiwidCI6IjEyYjIyMWIzLTA0NjQtNDIyMy04OWU1LTg4ODgzNTc3OGI1OCIsImMiOjl9"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .dashBoard {
    padding: 100px 0px;
  }
  .Employeers {
    padding-top: 110px;
    width: 100%;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #373737;
  }
  .content {
    background-image: url(${group});
    background-repeat: no-repeat;
  }
  .innerContent {
    border: 3px solid red;
  }
  .line {
    width: 38px;
    padding: 8px 0;
    border-top: 4px solid #635ea3;
  }
  .image {
    text-align: center;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-weight: 700;
    font-size: 36px;
    padding-bottom: 28px;
    color: #373737;
  }

  @media only screen and (max-width: 992px) {
    .img-fluid {
      max-width: 90%;
    }
  }

  @media only screen and (max-width: 576px) {
    .Employeers {
      flex-direction: column-reverse;
    }
    .removeOffset {
      margin-left: 0 !important;
    }
    .img-fluid {
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
