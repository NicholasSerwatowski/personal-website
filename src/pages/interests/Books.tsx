import React from "react";

import "../../styles/interests/books.css";

import { booksPage } from "../../data/interests/books";

const Books: React.FC = () => {
  return (
    <div className="interest-page books-page">

      <header className="page-header">
        <h1>{booksPage.title}</h1>

        <p>
          {booksPage.description}
        </p>
      </header>

      <main className="interest-content">

        {/* Currently Reading */}
        <section className="interest-section">
          <h2>Currently Reading</h2>

          <div className="book-grid">
            {booksPage.currentlyReading.map((book, index) => (
              <article
                className="book-card"
                key={index}
              >
                <div className="book-cover placeholder">
                  {book.cover ? (
                    <img
                      src={book.cover}
                      alt={`${book.title} cover`}
                    />
                  ) : (
                    <span>Book Cover</span>
                  )}
                </div>

                <div className="book-info">
                  <h3>{book.title}</h3>

                  <p className="book-author">
                    {book.author}
                  </p>

                  <p className="book-description">
                    {book.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* Favorite Books */}
        <section className="interest-section">
          <h2>Favorite Books</h2>

          <div className="book-grid">
            {booksPage.favoriteBooks.map((book, index) => (
              <article
                className="book-card"
                key={index}
              >
                <div className="book-cover placeholder">
                  {book.cover ? (
                    <img
                      src={book.cover}
                      alt={`${book.title} cover`}
                    />
                  ) : (
                    <span>Book Cover</span>
                  )}
                </div>

                <div className="book-info">
                  <h3>{book.title}</h3>

                  <p className="book-author">
                    {book.author}
                  </p>

                  <p className="book-description">
                    {book.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* Recently Read */}
        <section className="interest-section">
          <h2>Recently Read</h2>

          <div className="reading-list">
            {booksPage.recentlyRead.map((book, index) => (
              <article
                className="reading-item"
                key={index}
              >
                <div>
                  <h3>{book.title}</h3>

                  <p className="book-author">
                    {book.author}
                  </p>
                </div>

                <div className="reading-details">
                  <span>{book.genre}</span>
                  <span>{book.rating}</span>
                  <span>Finished: {book.finished}</span>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* Reading Interests */}
        <section className="interest-section">
          <h2>What I Like to Read</h2>

          <div className="interest-tags">
            {booksPage.readingInterests.map((interest, index) => (
              <span key={index}>
                {interest}
              </span>
            ))}
          </div>
        </section>


        {/* Influential Books */}
        <section className="interest-section">
          <h2>Books That Influenced Me</h2>

          {booksPage.influentialBooks.map((book, index) => (
            <article
              className="influential-book"
              key={index}
            >
              <h3>{book.title}</h3>

              <p className="book-author">
                {book.author}
              </p>

              <p>
                {book.reflection}
              </p>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
};

export default Books;