import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6); // Number of articles per page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, [currentPage]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://eventregistry.org/api/v1/article/getArticles?apiKey=96fc2acf-a8a9-4b69-8808-00ce4f8bf5ea&keyword=Tech`
      );
      const articlesWithDetails = response.data.articles.results.map(
        (article) => ({
          uri: article.uri,
          title: article.title,
          body: article.body,
          url: article.url,
          source: article.source.title,
          image: article.image,
          publishedAt: article.dateTimePub, // Adding published date
        })
      );
      setArticles(articlesWithDetails);
    } catch (error) {
      console.error("Error fetching the news data", error);
    } finally {
      setLoading(false);
    }
  };

  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Nav />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Blogs</h1>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <div className="row mb-n8">
              {currentArticles.map((article) => (
                <div key={article.uri} className="col-12 col-sm-6 col-lg-4 mb-8">
                  <a className="card bg-transparent h-100 border-0" href={article.url} target="_blank" rel="noopener noreferrer">
                    <div className="position-relative rounded-2 overflow-hidden">
                      <div className="position-absolute top-0 start-0">
                        <svg width="159" height="156" viewBox="0 0 159 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M-30 81.9324V155.361C-30 155.714 -29.7141 156 -29.3615 156H21.62C21.9724 156 22.2585 155.714 22.2585 155.361V96.299C22.2585 57.5087 60.5087 19.2585 99.299 19.2585H158.361C158.714 19.2585 159 18.9724 159 18.62V-32.3615C159 -32.7139 158.714 -33 158.361 -33H84.9324C21.4572 -33 -30 18.4572 -30 81.9324Z" fill="#FFF2D6"></path>
                        </svg>
                      </div>
                      <div className="position-absolute bottom-0 end-0">
                        <svg width="150" height="158" viewBox="0 0 150 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z" fill="#FFF2D6"></path>
                        </svg>
                      </div>
                      {article.image && (
                        <img
                          className="card-img-top rounded-0"
                          src={article.image}
                          style={{ height: "240px", objectFit: "cover", width: "100%" }}
                          alt={article.title}
                        />
                      )}
                    </div>
                    <div className="card-body px-0 d-flex flex-column align-items-start mw-xs">
                      <div className="mb-3">
                        <span className="me-3 small text-muted">{new Date(article.publishedAt).toLocaleDateString()}</span>
                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="2" cy="2" r="2" fill="#A3A3A3"></circle>
                        </svg>
                        <span className="badge ms-3 fw-medium bg-white text-primary border text-primary rounded-1">{article.source}</span>
                      </div>
                      <h5 className="card-title display-15 fw-semibold lh-base mb-3">{article.title}</h5>
                      <p className="card-text small text-muted" style={{ maxHeight: "6em", overflow: "hidden" }}>{article.body}</p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm mt-auto"
                      >
                        Read more
                      </a>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <Pagination
              articlesPerPage={articlesPerPage}
              totalArticles={articles.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

const Pagination = ({
  articlesPerPage,
  totalArticles,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default News;
