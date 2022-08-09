import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();
  const [moviesShow, setMoviesShow] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setMoviesShow(data));
  }, [id]);

  const { language, image, summary } = moviesShow;
  console.log(moviesShow);
  return (
    <div class="flex justify-center ">
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={image?.original}
          alt=""
        />
        <div class="p-6 flex flex-col justify-start">
          <div
            class="text-gray-700 text-base mb-4"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></div>
          <h3 className="text-gray-700 text-base mb-4">
            Movie Language: {language}
          </h3>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
