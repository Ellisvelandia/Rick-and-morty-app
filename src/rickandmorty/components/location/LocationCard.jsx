import React from "react";
import { Link } from "react-router-dom";
import { GiEarthAmerica } from "react-icons/gi";

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
              loading="lazy"
            />
            <div>
              <div className="text-xl my-4">{name}</div>
              <div className="flex items-center">
                <GiEarthAmerica className="h-6 w-6 text-gray-400 mr-1" />
                <div className="text-base flex flex-wrap">{location.name}</div>
              </div>

              {(() => {
                if (status === "Dead") {
                  return (
                    <div className="absolute bg-red-500 text-center m-1 p-1 text-lg tracking-widest">
                      {status}
                    </div>
                  );
                } else if (status === "Alive") {
                  return (
                    <div className="absolute bg-green-500 text-center m-1 p-1 text-lg tracking-widest">
                      {status}
                    </div>
                  );
                } else {
                  return (
                    <div className="inline-block absolute text-center m-1 p-1 text-lg tracking-widest">
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
