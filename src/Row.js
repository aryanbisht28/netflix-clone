import React, { useEffect, useState } from "react";
import instance from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);
  //a snipet of code which runs based on specfic condition
  useEffect(() => {
    //if [], run once when the roe load and dont run again
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.log(request.data.results);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
    //we are usimg fetchUrl in [fetchUrl] because it is used outside of the block
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      {/* container-> poster */}
      <div className="row_posters">
        {movie.map((movie) => (
          <img
            key={movie.id}
            //if it is large row then add  row_posterLarge in classname
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={
              base_url + (isLargeRow ? movie.poster_path : movie.backdrop_path)
            }
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
