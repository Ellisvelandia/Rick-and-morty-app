import { Link } from "react-router-dom";
import post from "/assets/episodes.webp";

export const CardEpisode = ({ episode }) => {
  let { air_date, name, image } = episode;

  return (
    <div className="w-full text-center my-2 p-4 rounded bg-[#166a74] text-white text-2xl hover:bg-cyan-600 drop-shadow-2xl">
      <h3>Episode: {name === "" ? "Unknown" : name}</h3>
      <img
        src={image === "" ? { image } : post}
        alt={name}
        className="w-full p-4 xl:h-[550px] mx-auto"
        loading="lazy"
      />
      <p>Air Date: {air_date === "" ? "Unknown" : air_date}</p>
      <Link to={`/episodevideo/${episode.id}`}>View episode</Link>
    </div>
  );
};
