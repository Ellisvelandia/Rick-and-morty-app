import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function SingleCharacter() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  let { image, name, species, gender, origin, status, location } = character;

  useEffect(() => {
    const fetchSingleCharacterData = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleCharacterData();
  }, [id]);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center min-h-screen text-white">
        <h1 className="text-center lg:text-6xl text-3xl tracking-widest pb-4">
          {name}
        </h1>
        <div className="flex md:flex-row flex-col gap-3 items-center">
          <img
            className="md:w-[500px] w-full h-auto"
            src={image}
            alt="character image"
          />

          <div className="lg:text-3xl md:text-2xl text-xl md:space-y-5 space-y-3 ml-4">
            <div className="flex">
              <span>Gender:</span>
              {gender}
            </div>

            <div className="flex ">
              <span>Location:</span>
              {location?.name}
            </div>

            <div className="flex ">
              <span>Origin:</span>
              {origin?.name}
            </div>

            <div className="flex ">
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
        <Link
          to="/character"
          className="flex bg-[#166a74] py-2 md:mb-0 justify-center px-6 rounded mt-2 text-white hover:bg-cyan-600 drop-shadow-2xl transition-all duration-200 active:scale-90"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </Link>
      </div>
    </>
  );
}
