import React from "react";
import { useNavigate } from "react-router-dom";

const ShowCard = ({ movieShow }) => {
  const { id, name, image, summary } = movieShow.show;
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/showDetail/${id}`);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <div className="flex justify-center items-center">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="rounded-t-lg h-52 w-48 "
                src={image.medium}
                alt=""
              />
            </a>
          </div>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
            <div
              className="text-gray-700 text-base mb-4"
              dangerouslySetInnerHTML={{
                __html: summary.slice(0, 100) + "....",
              }}
            ></div>
            <button
              onClick={() => handleDetails(id)}
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
