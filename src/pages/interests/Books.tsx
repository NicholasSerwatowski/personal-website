import React from "react";
import "../../styles/interests/books.css";

const Books: React.FC = () => {
  return (
    <div className="interest-page books-page">
      <header className="page-header">
        <h1>Books</h1>
        <p>
          A collection of books I've read, am reading, and want to read.
          Reading is one of the ways I explore new ideas, perspectives, and
          subjects outside of my everyday work.
        </p>
      </header>

      <main className="interest-content">
        {/* Currently Reading */}
        <section className="interest-section">
          <h2>Currently Reading</h2>

          <div className="book-grid">
            <article className="book-card">
              <div className="book-cover placeholder">
                <span>Book Cover</span>
              </div>

              <div className="book-info">
                <h3>Book Title</h3>
                <p className="book-author">Author Name</p>
                <p className="book-description">
                  A short explanation of why I'm currently reading this book
                  and what I'm hoping to learn from it.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Favorite Books */}
        <section className="interest-section">
          <h2>Favorite Books</h2>

          <div className="book-grid">
            <article className="book-card">
              <div className="book-cover placeholder">
                <span>Book Cover</span>
              </div>

              <div className="book-info">
                <h3>Book Title</h3>
                <p className="book-author">Author Name</p>
                <p className="book-description">
                  A short personal explanation of why this is one of my
                  favorite books.
                </p>
              </div>
            </article>

            <article className="book-card">
              <div className="book-cover placeholder">
                <span>Book Cover</span>
              </div>

              <div className="book-info">
                <h3>Book Title</h3>
                <p className="book-author">Author Name</p>
                <p className="book-description">
                  A short personal explanation of why this is one of my
                  favorite books.
                </p>
              </div>
            </article>

            <article className="book-card">
              <div className="book-cover placeholder">
                <span>Book Cover</span>
              </div>

              <div className="book-info">
                <h3>Book Title</h3>
                <p className="book-author">Author Name</p>
                <p className="book-description">
                  A short personal explanation of why this is one of my
                  favorite books.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Recently Read */}
        <section className="interest-section">
          <h2>Recently Read</h2>

          <div className="reading-list">
            <article className="reading-item">
              <div>
                <h3>Book Title</h3>
                <p className="book-author">Author Name</p>
              </div>

              <div className="reading-details">
                <span>Genre</span>
                <span>★★★★★</span>
                <span>Finished: August 2026</span>
              </div>
            </article>

            <article className="reading-item">
              <div>
                <h3>Book Title</h3>
                <p className="book-author">Author Name</p>
              </div>

              <div className="reading-details">
                <span>Genre</span>
                <span>★★★★☆</span>
                <span>Finished: July 2026</span>
              </div>
            </article>
          </div>
        </section>

        {/* Reading Interests */}
        <section className="interest-section">
          <h2>What I Like to Read</h2>

          <div className="interest-tags">
            <span>Engineering</span>
            <span>Science</span>
            <span>Technology</span>
            <span>History</span>
            <span>Biography</span>
            <span>Philosophy</span>
            <span>Fiction</span>
          </div>
        </section>

        {/* Influential Books */}
        <section className="interest-section">
          <h2>Books That Influenced Me</h2>

          <article className="influential-book">
            <h3>Book Title</h3>
            <p className="book-author">Author Name</p>

            <p>
              A short reflection on how this book influenced the way I think,
              approach problems, understand the world, or look at a particular
              subject.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Books;