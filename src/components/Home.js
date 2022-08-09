import React from "react";
import MovieLists from "./MovieLists";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mb-3 mt-2 font-semibold text-slate-400">
        Welcome To Movies Show
      </h1>
      <MovieLists />
    </div>
  );
};

export default Home;
