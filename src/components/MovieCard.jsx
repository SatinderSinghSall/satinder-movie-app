import React from "react";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "images/no-movie.png"
        }
        alt={`Poster of ${title}`}
      />

      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="/images/star.svg" alt="Rating Stars." />
            <p>{vote_average ? vote_average.toFixed(1) : null}</p>
            <span>•</span>
            <p className="lang">{original_language}</p>
            <span>•</span>
            <p className="year">
              {release_date ? release_date.split("-")[0] : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
