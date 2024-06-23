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
        <h1 className="text-center mb-4">Tech News</h1>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <div className="row">
              {currentArticles.map((article) => (
                <div key={article.uri} className="col-md-4 mb-4">
                  <div className="card">
                    {article.image && (
                      <img
                        src={article.image}
                        className="card-img-top"
                        alt={article.title}
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p
                        className="card-text"
                        style={{ maxHeight: "6em", overflow: "hidden" }}
                      >
                        {article.body}
                      </p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
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
