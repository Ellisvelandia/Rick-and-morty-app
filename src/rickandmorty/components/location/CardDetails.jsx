import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen text-white">
      <h1 className="text-center lg:text-6xl text-3xl tracking-widest pb-4">
        {name}
      </h1>
      <div className="flex md:flex-row flex-col justify-center gap-3 items-center">
        <img
          className="md:w-[500px] w-full h-auto"
          src={image}
          alt="character image"
        />

        <div className="text-lg space-y-3">
          <div className="flex items-center">
            <span>Gender:</span>
            {gender}
          </div>

          <div className="flex items-center">
            <span>Location:</span>
            {location?.name}
          </div>

          <div className="flex items-center">
            <span>Origin:</span>
            {origin?.name}
          </div>

          <div className="flex items-center">
            <span>Species:</span>
            {species}
          </div>

          {(() => {
            if (status === "Dead") {
              return (
                <div className="bg-red-500 py-1 px-2 text-white text-center">
                  status: {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className="bg-green-500 py-1 px-2 text-white text-center">
                  status: {status}
                </div>
              );
            } else {
              return (
                <div className="bg-gray-500 py-1 px-2 text-white text-center">
                  status: {status}
                </div>
              );
            }
          })()}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Link
          to="/location"
          className="flex bg-[#166a74] py-2 md:mb-0 w-28 justify-center px-6 rounded mt-2 text-white hover:bg-cyan-600 drop-shadow-2xl transition-all duration-200 active:scale-90"
        >
          &larr; Back
        </Link>
      </div>
    </div>
  );
};

export default CardDetails;
