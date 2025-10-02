import React from "react";

export default function Movie({ movie }) {
  return (
    <div>
      <p>영화 제목: {movie.title}</p>
      <p>영화 줄거리: {movie.overview}</p>
      <p>영화 개봉일: {movie.release_date}</p>
      <p>영화 평균 평점: {movie.vote_average}</p>
      <hr />
    </div>
  );
}
