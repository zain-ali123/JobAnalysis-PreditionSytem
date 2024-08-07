import React from "react";
import styled from "styled-components";
import Frame from "../assets/Frame.svg";
import group from "../assets/Group8.svg";

function JobSeekers() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="JobSeekers row justify-content-between">
            <div className="image col-lg-7">
              <img className="img-fluid" src={Frame} alt="frame-img" />
            </div>

            <div className="content col-lg-4 col">
              <div className="col-lg-16 removeOffset">
                <h2>Analysis Of Jobs Based On Layoff</h2>
                <div className="line"></div>
                <p className="font-serif font-bold">

                Layoffs, driven by economic downturns, technological changes, and global events, significantly impact industries like manufacturing, retail, hospitality, and tech. They affect employees' financial stability and mental health while challenging employers to maintain operations. Employees can mitigate layoffs' effects through skill development, networking, career transitions, and financial planning. Employers should focus on transparent communication, outplacement services, training, and support programs. Future trends emphasize remote work, the gig economy, green jobs, and continuous reskilling, underscoring the need for adaptability in the evolving job market.                  <br />
                  View Geographical Inshights
                </p>
                <div className="line"></div>
               
                  <br />
                {/* <div className="line"></div>   */}
                {/* <p>Free Job market Insights</p>
                <p>Lesser chance of getting fired</p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 dashBoard">
              <iframe
                title="layOffs"
                width="100%"
                height="686"
                src="https://app.powerbi.com/view?r=eyJrIjoiZWQ2MmI3ZTctY2I1Zi00MTg0LWE1ZmUtZGRjYmU3ZjhlMGNlIiwidCI6IjEyYjIyMWIzLTA0NjQtNDIyMy04OWU1LTg4ODgzNTc3OGI1OCIsImMiOjl9"
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

export default JobSeekers;

const Wrapper = styled.div`
  .dashBoard {
    padding: 100px 0px;
  }
  .JobSeekers {
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
    .JobSeekers {
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
