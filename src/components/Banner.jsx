import React from "react";
import styled from "styled-components";
import banner from "../assets/BFrame5457.svg";

export default function Banner() {
  return (
    <>
      <Wrapper>
        <div className="Banner row justify-content-center">
          <div className="image col-lg-10 row">
            <div className="content col-lg-8">
              <h1>
                {" "}
                Explore New Opportunities
                <br />
                on the Go!
              </h1>
              <button>Get started</button>
            </div>
          </div>
        </div>
      </Wrapper>
      <div>
        <iframe
          title="layOffs"
          width="800"
          height="636"
          src="https://app.powerbi.com/view?r=eyJrIjoiZWQ2MmI3ZTctY2I1Zi00MTg0LWE1ZmUtZGRjYmU3ZjhlMGNlIiwidCI6IjEyYjIyMWIzLTA0NjQtNDIyMy04OWU1LTg4ODgzNTc3OGI1OCIsImMiOjl9"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </>
  );
}

const Wrapper = styled.div`
  .Banner {
    padding: 100px 0px;
    width: 100%;
  }
  .image {
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    height: 328px;
    border-radius: 20px;
  }
  .content {
    margin: auto;
    margin-left: 20px;
  }
  h1 {
    color: white;
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    width: 169px;
    height: 60px;
    background: #ffffff;
    border-radius: 10px;
    flex: none;
    order: 0;
    flex-grow: 0;
    border: none;
  }
`;
