import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiService from "../../services/apiService";
import "./style.css";
const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await apiService.getBookById(id);
        setBook(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-box">
      <h1>Book Details</h1>
      <p>Title: {book.title}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Page Count: {book.pageCount}</p>
      <p>Authors: {book.authors.join(", ")}</p>
    </div>
  );
};

export default BookDetailsPage;
