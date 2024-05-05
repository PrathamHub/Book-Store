import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService from "../../services/apiService";
import "./style.css";
const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await apiService.getBooks();
        console.log("Response is :", response);
        setBooks(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      <h1>Books</h1>
      <div className="book-container">
        {books.map((book) => (
          <div key={book.id} className="book-box">
            <Link to={`/books/${book.id}`}>
              <h3>{book.title}</h3>
            </Link>
            <p>ISBN: {book.isbn}</p>
            <p>Page Count: {book.pageCount}</p>
            <p>Authors: {book.authors.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
