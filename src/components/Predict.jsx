import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import banner from "../assets/Lets237831.svg";
import boxes from "../assets/Boxes.svg";

export default function Predict() {
  const [industries, setIndustries] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [predictionResult, setPredictionResult] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("http://localhost:3000/api/get_industry")
      .then((response) => {
        setIndustries(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the industries!", error);
      });
  }, []);

  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
  };

  const handlePredict = () => {
    if (!selectedIndustry) {
      console.error("Please select an industry");
      return;
    }

    axios
      .post("http://localhost:3000/api/prediction", { selectedIndustry })
      .then((response) => {
        setPredictionResult(response.data);
      })
      .catch((error) => {
        console.error("Prediction request failed!", error);
      });
    console.log(predictionResult);
  };

  return (
    <>
      <Wrapper>
        <div className="Contact row justify-content-around">
          <div className="image col-lg-9 col-sm-12 row d-flex justify-content-end">
            <div className="img col-lg-6">
              <img className="image2" src={boxes} alt="Boxes"></img>
            </div>
            <div className="form col-lg-5 col-md-8 col-sm-12 col-12 row justify-content-center">
              <div className="col-lg-10">
                <h3>CONTACT US</h3>
                <div className="form-group">
                  <label htmlFor="industry">Select Industry</label>
                  <select
                    id="industry"
                    className="form-control"
                    value={selectedIndustry}
                    onChange={handleIndustryChange}
                    style={{ width: "100%" }}
                  >
                    <option value="">Select an industry</option>
                    {industries.map((industry, index) => (
                      <option key={index} value={industry.company_industry}>
                        {industry.company_industry}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="btn btn-primary" onClick={handlePredict}>
                  Predict
                </button>
                {predictionResult && (
                  <div>
                    <h4>Prediction Result:</h4>
                    <pre>{predictionResult[0].title}</pre>
                    {/* <pre>{JSON.stringify(predictionResult, null, 2)}</pre> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  .Contact {
    width: 100%;
    padding: 137px 0px;
    /* border:2px solid red; */
  }

  .image2 {
    width: 410px;
    margin-right: auto;
    margin-top: auto;
  }
  .btn4 {
    background: linear-gradient(85.89deg, #49478c 7.82%, #9756ff 117.28%);
    padding: 14px 96px 14px 95px;
    border-radius: 10px;
    width: 100%;
    color: #ffffff;
    margin-top: 22px;
    border: none;
  }
  .form {
    background: #ffffff;
    box-shadow: 0px 10px 40px rgba(133, 82, 229, 0.1);
    border-radius: 0px 0px 10px 10px;
    margin-top: -142px;
    margin-bottom: 30px;
    padding: 50px 20px;
  }
  .image {
    background-image: url(${banner});
    background-repeat: no-repeat;
    border-radius: 20px;
    height: 487px;
  }
  .image2 {
    margin-top: 170px;
  }
  h3 {
    text-align: center;
    font-weight: 800;
    font-size: 24px;
    line-height: 16px;
    color: #373737;
  }
  .asterik {
    color: red;
  }
  h5 {
    font-weight: 400;
    font-size: 16px;
  }
  .form-select {
    width: 44%;
  }

  @media only screen and (max-width: 576px) {
    .img,
    .image {
      display: none;
      background-image: none;
    }
  }
  @media only screen and (max-width: 950px) {
    .img,
    .image {
      display: none;
    }
  }
  @media only screen and (max-width: 1084px) {
    .img,
    .image {
      display: none;
      background-image: none;
    }
  }
`;
