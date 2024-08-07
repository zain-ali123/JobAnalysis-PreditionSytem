import React from "react";

export default function ServicesSection (){
  return (
    <section className="position-relative py-12 py-lg-24 bg-light bg-opacity-25 overflow-hidden">
      <div className="container mw-2xl mx-auto mw-lg-8xl">
        <div className="mw-lg-4xl mb-24">
          <h2 className="font-heading h1 mb-0">
            <span className="d-block">Innovate, educate,</span>
            <span className="d-inline-block position-relative">
              <span>and Dominate</span>
              <div className="py-1 bg-success rounded-pill"></div>
            </span>
            <span className="d-inline-block">Online</span>
          </h2>
        </div>
        <span className="d-block fs-3 text-dark mb-8 fw-semibold">
          The most important news
        </span>
        <div className="row mb-20 ">
          <div className="col-lg-4 mb-6 mb-lg-0 border">
            <div className="h-100 px-10 py-12 bg-white rounded-5">
              <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                <div className="d-flex w-100 flex-row flex-sm-column flex-xl-row mb-8 align-items-xl-center">
                  <div
                    className="flex-shrink-0 d-inline-flex mb-0 mb-sm-6 mb-xl-0 me-6 me-sm-0 me-xl-6 align-items-center justify-content-center bg-dark rounded-pill"
                    style={{ height: '64px', width: '64px' }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_231_3365)">
                        <path
                          d="M27.7456 14.2019C27.5097 14.8775 27.1245 15.4912 26.6186 15.9974L16.0019 26.6141C15.4952 27.1149 14.8813 27.4939 14.2064 27.7224C14.0197 26.6236 13.9867 25.5041 14.1084 24.3962C14.4129 21.7703 15.5957 19.3243 17.4651 17.4551C19.3345 15.5859 21.7806 14.4033 24.4066 14.0992C25.5189 13.9772 26.6429 14.0117 27.7456 14.2019ZM11.7833 24.1501C12.1474 20.996 13.5674 18.0577 15.8125 15.8126C18.0576 13.5675 20.9959 12.1475 24.1499 11.7834C25.4039 11.6489 26.67 11.6795 27.9159 11.8744C27.5165 9.31372 26.416 6.91358 24.7365 4.93982C23.0569 2.96606 20.8638 1.4957 18.4 0.691616C15.9363 -0.112472 13.298 -0.218913 10.7775 0.384082C8.25695 0.987076 5.95252 2.27597 4.11941 4.10802C2.2863 5.94006 0.996062 8.24374 0.3916 10.7639C-0.212861 13.2841 -0.107955 15.9224 0.694699 18.3866C1.49735 20.8509 2.96643 23.0448 4.93921 24.7255C6.912 26.4062 9.3115 27.5081 11.8719 27.9091C11.6777 26.6654 11.6479 25.4015 11.7833 24.1501Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                  <h4 className="mb-0 fs-3">
                    <span className="d-block">Customized</span>
                    <span>Campaigns</span>
                  </h4>
                </div>
                <p className="fw-medium">
                  Tailor your marketing approach with our customizable campaigns. We work closely with you to understand your unique goals and audience, designing personalized strategies that ensure your message reaches the right people at the right time.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-6 mb-lg-0">
            <div className="p-10 mb-6 bg-white rounded-5">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex w-100 flex-row flex-sm-column flex-xl-row mb-8 align-items-xl-center">
                  <div
                    className="flex-shrink-0 d-inline-flex mb-0 mb-sm-6 mb-xl-0 me-6 me-sm-0 me-xl-6 align-items-center justify-content-center bg-dark rounded-pill"
                    // style="height: 64px; width: 64px;"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewbox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_231_3372)">
                        <path
                          d="M25.0831 16.4722L21.0196 14L25.0831 11.5278C25.5058 11.2746 25.8739 10.9398 26.1659 10.5429C26.4578 10.146 26.6678 9.69485 26.7835 9.21591C26.8993 8.73696 26.9185 8.23976 26.8401 7.75331C26.7616 7.26686 26.5871 6.80089 26.3267 6.3826C26.0663 5.96431 25.7251 5.60207 25.3232 5.31701C24.9213 5.03195 24.4667 4.82977 23.9858 4.72228C23.505 4.61479 23.0075 4.60413 22.5225 4.69093C22.0374 4.77773 21.5745 4.96024 21.1608 5.22783L17.4998 7.57167V3.5C17.4998 2.57174 17.1311 1.6815 16.4747 1.02513C15.8183 0.368749 14.9281 0 13.9998 0C13.0715 0 12.1813 0.368749 11.5249 1.02513C10.8686 1.6815 10.4998 2.57174 10.4998 3.5V7.686L6.8388 5.22783C6.00391 4.72777 5.00599 4.57567 4.06004 4.8043C3.11408 5.03293 2.29578 5.62399 1.78142 6.45015C1.26705 7.27631 1.09779 8.27146 1.3101 9.22121C1.52241 10.171 2.09929 10.9993 2.91647 11.5278L6.97997 14L2.91647 16.4722C2.09929 17.0007 1.52241 17.829 1.3101 18.7788C1.09779 19.7285 1.26705 20.7237 1.78142 21.5498C2.29578 22.376 3.11408 22.9671 4.06004 23.1957C5.00599 23.4243 6.00391 23.2722 6.8388 22.7722L10.4998 20.3945V24.5C10.4998 25.4283 10.8686 26.3185 11.5249 26.9749C12.1813 27.6313 13.0715 28 13.9998 28C14.9281 28 15.8183 27.6313 16.4747 26.9749C17.1311 26.3185 17.4998 25.4283 17.4998 24.5V20.3233L21.1608 22.7733C21.9957 23.2734 22.9936 23.4255 23.9396 23.1969C24.8855 22.9682 25.7038 22.3772 26.2182 21.551C26.7326 20.7249 26.9018 19.7297 26.6895 18.78C26.4772 17.8302 25.9003 17.0007 25.0831 16.4722Z"
                          fill="white"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h4 className="mb-0 fs-3">
                    <span className="d-block">Data-Driven</span>
                    <span>Insights</span>
                  </h4>
                </div>
                <p className="fw-medium">
                  Unlock the power of data with our advanced analytics tools.
                  Gain actionable insights into customer behavior, market
                  trends, and campaign performance
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="h-100 px-10 py-12 bg-white rounded-5">
              <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                <div className="d-flex w-100 flex-row flex-sm-column flex-xl-row mb-8 align-items-xl-center">
                  <div
                    className="flex-shrink-0 d-inline-flex mb-0 mb-sm-6 mb-xl-0 me-6 me-sm-0 me-xl-6 align-items-center justify-content-center bg-dark rounded-pill"
                    // style="height: 64px; width: 64px;"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewbox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_231_3365)">
                        <path
                          d="M27.7456 14.2019C27.5097 14.8775 27.1245 15.4912 26.6186 15.9974L16.0019 26.6141C15.4952 27.1149 14.8813 27.4939 14.2064 27.7224C14.0197 26.6236 13.9867 25.5041 14.1084 24.3962C14.4129 21.7703 15.5957 19.3243 17.4651 17.4551C19.3345 15.5859 21.7806 14.4033 24.4066 14.0992C25.5189 13.9772 26.6429 14.0117 27.7456 14.2019ZM11.7833 24.1501C12.1474 20.996 13.5674 18.0577 15.8125 15.8126C18.0576 13.5675 20.9959 12.1475 24.1499 11.7834C25.4039 11.6489 26.67 11.6795 27.9159 11.8744C27.5165 9.31372 26.416 6.91358 24.7365 4.93982C23.0569 2.96606 20.8638 1.4957 18.4 0.691616C15.9363 -0.112472 13.298 -0.218913 10.7775 0.384082C8.25695 0.987076 5.95252 2.27597 4.11941 4.10802C2.2863 5.94006 0.996062 8.24374 0.3916 10.7639C-0.212861 13.2841 -0.107955 15.9224 0.694699 18.3866C1.49735 20.8509 2.96643 23.0448 4.93921 24.7255C6.912 26.4062 9.3115 27.5081 11.8719 27.9091C11.6777 26.6654 11.6479 25.4015 11.7833 24.1501Z"
                          fill="white"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h4 className="mb-0 fs-3">
                    <span className="d-block">A/B Testing and</span>
                    <span>Optimization</span>
                  </h4>
                </div>
                <p className="fw-medium">
                  Tailor your marketing approach with our customizable
                  campaigns. We work closely with you to understand your unique
                  goals and audience, designing personalized strategies that
                  ensure your message reaches the right people at the right
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a className="btn btn-primary" href="#">
            Get consultation
          </a>
        </div>
      </div>
    </section>
  );
};
