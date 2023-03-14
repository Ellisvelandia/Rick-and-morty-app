import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "/assets/logo.webp";
import LocationCard from "../components/location/LocationCard";
import InputGroup from "../components/location/InputGroup";

const Location = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const { dimension, type, name } = info;
  const [number, setNumber] = useState(1);

  const api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        const data = response.data;
        setInfo(data);

        const residentsData = await Promise.all(
          data.residents.map((x) => axios.get(x).then((res) => res.data))
        );
        setResults(residentsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [api]);

  return (
    <div className="h-full">
      <div className="grid gap-10">
        <div className="h-[200px] relative">
          <Link to="/home">
            <img
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={logo}
              width="400"
              height="400"
              alt="logo rick and morty"
            />
          </Link>
        </div>
        <div className="bg-cyan-600 text-white rounded-lg p-[1rem] flex flex-col justify-around items-center gap-[1rem] sm:flex-row">
          <h1 className="text-center mb-3">
            Location :
            <span className="text-primary">
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h5 className="text-center">
            Dimension: {dimension === "" ? "Unknown" : dimension}
          </h5>
          <h6 className="text-center">
            Type: {type === "" ? "Unknown" : type}
          </h6>
        </div>

        <div className="grid gap-[1rem] sm:grid-cols-[.5fr_1.5fr]">
          <div className="bg-cyan-600 rounded-lg h-fit p-[1rem] flex flex-col gap-[1rem]">
            <h4 className="text-center mb-4 text-white">Pick Location</h4>
            <InputGroup name="Location" changeID={setNumber} total={126} />
          </div>
          <div className="flex flex-col gap-[1rem] w-full px-1">
            <div className="xl:grid-cols-3 md:grid-cols-2 grid-cols-1 shadow-md text-white text-2xl bg-cyan-600 drop-shadow-2xl rounded-lg p-[1rem] grid gap-[3rem]">
              <LocationCard page="/location/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
