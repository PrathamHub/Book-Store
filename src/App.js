import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksPage from "./components/Books/BooksPage";
import BookDetailsPage from "./components/Books/BookDetails";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
