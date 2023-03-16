import { Link } from "react-router-dom";
import post from "/assets/episodes.webp";

export const CardEpisode = ({ movie }) => {
  let { air_date, name, image, episode } = movie;

  return (
    <div className="w-full text-center my-2 p-4 rounded bg-[#166a74] text-white text-2xl hover:bg-cyan-600 drop-shadow-2xl">
      <h2>Title: {name === "" ? "Unknown" : name}</h2>
      <img
        src={image === "" ? { image } : post}
        alt={name}
        className="w-full p-4 xl:h-[550px] mx-auto"
        loading="lazy"
      />
      <h3>Episode:  {episode} </h3>
      <p>Air Date: {air_date === "" ? "Unknown" : air_date}</p>
      <Link to={`/episodevideo/${movie.id}`}>View episode</Link>
    </div>
  );
};
