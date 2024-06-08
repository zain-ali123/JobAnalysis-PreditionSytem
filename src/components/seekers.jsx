import React from "react";
import Vector from "../assets/Frame87.svg";
import styled from "styled-components";
import group from "../assets/Group237845.svg";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
export default function seekers() {
  return (
    <>
      <Wrapper>
        <div className="Employeers row justify-content-between">
          {/* <PowerBIEmbed
            embedConfig={{
              type: "dashboard", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
              id: "a7590268-d1fc-4a33-9ca3-c5bc8ebeea1a",
              embedUrl:
                "https://app.powerbi.com/view?r=eyJrIjoiYTU0NTJlODMtMTFkNC00Njc1LWFkNmUtMTVlOTBiZTY4NTViIiwidCI6IjEyYjIyMWIzLTA0NjQtNDIyMy04OWU1LTg4ODgzNTc3OGI1OCIsImMiOjl9",
              // access token copied from concole using copy(powerbiaccesstoken)
              accessToken:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCIsImtpZCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTJiMjIxYjMtMDQ2NC00MjIzLTg5ZTUtODg4ODM1Nzc4YjU4LyIsImlhdCI6MTcxNTUyMzM2NywibmJmIjoxNzE1NTIzMzY3LCJleHAiOjE3MTU1Mjc5MzMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUF1T3VOQkNReWN0b2VHd2Fid3l5Qk5CTWtyVGV1ZDZWSFgyOHhtOGVrcGsrYk5KYURYNlBPK3JYNE5lazRKUHZwIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTVVIQU1NQUQgQU1NQVIiLCJnaXZlbl9uYW1lIjoiTDFTMjFCU0NTMDAyOCIsImlwYWRkciI6IjEwMy4xNTEuNDYuMTc4IiwibmFtZSI6IkwxUzIxQlNDUzAwMjggLSBNVUhBTU1BRCBBTU1BUiIsIm9pZCI6IjhiN2JmYzBmLTc4MTctNDExNC1hNmY3LWRkMjg1ZGVlNmMxZiIsInB1aWQiOiIxMDAzMjAwMTE3MkUwOTQ4IiwicmgiOiIwLkFTRUFzeUd5RW1RRUkwS0o1WWlJTlhlTFdBa0FBQUFBQUFBQXdBQUFBQUFBQUFBaEFEMC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJCaF9XWG5Zcjk3NFFwZ0lsaUVqWDRva3RSZkFKQ0FySGltUVBKbGJqSUdRIiwidGlkIjoiMTJiMjIxYjMtMDQ2NC00MjIzLTg5ZTUtODg4ODM1Nzc4YjU4IiwidW5pcXVlX25hbWUiOiJMMVMyMUJTQ1MwMDI4QHVjcC5lZHUucGsiLCJ1cG4iOiJMMVMyMUJTQ1MwMDI4QHVjcC5lZHUucGsiLCJ1dGkiOiJiWXkzb1VyLUhrbWFmWHk4a1psRkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3BsIjoiZW4tVVMifQ.Kl4GM9mTMvEB0XCbhGbE_UwBypqM-xs_OIvKgLk0cw346ZbrGxk5tE9U4cdnunzV9InCrZFAXxDZmVysZ2swv3E7g2ce0__s1Wa1mQjpmvi5rMLTkTJ4DmabiCwOX7S64tFsgQ80UA3Hj-o8z_FU9Q0SXdlLWoh2lFys2F5ZFU3EgljfubVe1-hNLa5fCo8VXmEBPaOADZhCjggCFoLafhP_4v5LJtH0Qa7lnz-btwf-AJhyC9uTTINPIB73gXIHeOKbxqrZGD5Dc77UIqjhwmCgmFDY62XHrbGcT6avjkswKJMAXixtIDqKBRw39U2t1rHN1ncnv_-qdQZZT1A6og",
              tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
              settings: {
                panes: {
                  filters: {
                    expanded: false,
                    visible: false,
                  },
                },
                background: models.BackgroundType.Transparent,
              },
            }}
            eventHandlers={
              new Map([
                [
                  "loaded",
                  function () {
                    console.log("Report loaded");
                  },
                ],
                [
                  "rendered",
                  function () {
                    console.log("Report rendered");
                  },
                ],
                [
                  "error",
                  function (event) {
                    console.log(event.detail);
                  },
                ],
                ["visualClicked", () => console.log("visual clicked")],
                ["pageChanged", (event) => console.log(event)],
              ])
            }
            cssClassName={"reportClass"}
            getEmbeddedComponent={(embeddedReport) => {
              window.report = embeddedReport;
            }}
          /> */}
          <iframe
            title="JobMarketAnalysis"
            width="800"
            height="486"
            src="https://app.powerbi.com/view?r=eyJrIjoiYTU0NTJlODMtMTFkNC00Njc1LWFkNmUtMTVlOTBiZTY4NTViIiwidCI6IjEyYjIyMWIzLTA0NjQtNDIyMy04OWU1LTg4ODgzNTc3OGI1OCIsImMiOjl9"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
          <div className="content col-lg-4 col">
            <div className="col-lg-8 offset-4 removeOffset">
              <h2> Employeers</h2>
              <div className="line"></div>
              <p>Free job posting</p>
              <div className="line"></div>
              <p>
                View candidate before deciding
                <br />
                which are good fit
              </p>
              <div className="line"></div>

              <p>
                One format for profile/resume makes it easier to see all the
                <br />
                key points for evaluating a candidate within seconds
              </p>
            </div>
          </div>
          <div className="col-lg-7 image ">
            <img className="img" src={Vector} alt="vector-img" />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
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
    padding: 8px 0px;
    border-top: 4px solid #635ea3;
  }
  .image {
    text-align: center;
  }
  .img {
    width: 551px;
    position: right;
  }

  h2 {
    font-weight: 700;
    font-size: 36px;
    padding-bottom: 28px;
    color: #373737;
  }
  @media only screen and (max-width: 992px) {
    .img {
      width: 500px;
    }
  }

  @media only screen and (max-width: 576px) {
    .img {
      width: 450px;
    }
    .Employeers {
      flex-direction: column-reverse;
    }
    img {
      width: 350px !important;
      margin-left: 41px !important;
    }
    .removeOffset {
      margin-left: 14% !important;
    }
  }
`;
