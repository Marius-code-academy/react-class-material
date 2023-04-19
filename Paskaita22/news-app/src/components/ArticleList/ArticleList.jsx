import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import Article from '../Article/Article';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { category } = useParams();
  const location = useLocation();

  const observerRef = useRef(null);

  const lastArticleRef = (element) => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (loading) {
        return;
      }
      if (entries[0].isIntersecting) {
        setPage((prev) => ++prev);
      }
    });

    if (element) {
      observerRef.current.observe(element);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}&pageSize=5&page=${page}`
      )
      .then((response) => {
        setArticles((prev) => [...prev, ...response.data.articles]);
        setLoading(false);
      })
      .catch((error) => console.log(error));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [category, page]);

  useEffect(() => {
    setArticles([]);
  }, [location]);

  return (
    <div>
      {articles.map((article, index) => {
        if (index + 1 === articles.length) {
          return (
            <div ref={lastArticleRef} key={index}>
              <Article article={article} key={index} />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <Article article={article} key={index} />
            </div>
          );
        }
      })}
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}
