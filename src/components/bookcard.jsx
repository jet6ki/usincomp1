import React from "react";

const BookCard = ({ title, author, description, coverImage }) => {
  return (
    <div className="book-card">
      <img src={coverImage} alt={title} className="book-cover" />
      <div className="book-details">
        <h3>{title}</h3>
        <p><strong>Author:</strong> {author}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BookCard;