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