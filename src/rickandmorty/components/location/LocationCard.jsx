import React from "react";
import { Link } from "react-router-dom";

const LocationCard = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`/detail/${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div className="flex lg:flex-row flex-col items-center">
            <img
              className="md:w-52 w-full md:h-52 h-80 mr-4 rounded"
              src={image}
              alt="card images"
            />
            <div>
              <div className="text-xl my-4">{name}</div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-5a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zm0-7a1 1 0 011 1v3a1 1 0 01-2 0V5a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-base flex flex-wrap">{location.name}</div>
              </div>

              {(() => {
                if (status === "Dead") {
                  return (
                    <div className="absolute bg-red-500 text-center m-1">
                      {status}
                    </div>
                  );
                } else if (status === "Alive") {
                  return (
                    <div className="absolute bg-green-500 text-center m-1">
                      {status}
                    </div>
                  );
                } else {
                  return (
                    <div className="inline-block absolute text-center m-1">
                      {status}
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default LocationCard;
