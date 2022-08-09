import React, { useEffect, useState } from "react";
import Loading from "../share/Loading";
import ShowCard from "./ShowCard";
// import { useQuery } from "react-query";

const MovieLists = () => {
  const [moviesShow, setMoviesShow] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMoviesShow(data));
  }, []);

  console.log(moviesShow);

  return (
    <div>
      {moviesShow.length <= 0 ? (
        <Loading />
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mx-10 p-3">
          {moviesShow?.map((movieShow) => (
            <ShowCard key={movieShow.show.id} movieShow={movieShow} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieLists;
