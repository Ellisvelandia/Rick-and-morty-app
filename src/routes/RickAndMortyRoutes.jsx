import { Routes, Route } from "react-router-dom";
import LoginRickAndMorty from "../auth/pages/LoginRickAndMorty";
import Signup from "../auth/pages/Signup";
import { Characters, Episode, EpisodeVideo, Favorites, InfoCharacter, Location } from "../rickandmorty";
import RickAndMortyPage from "../rickandmorty/pages/RickAndMortyPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginRickAndMorty />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<RickAndMortyPage />} />
      <Route path="/character" element={<Characters />} />
      <Route path="/card/:id" element={<InfoCharacter />}></Route>
      <Route path="/episode" element={<Episode />} />
      <Route path="/episodevideo/:id" element={<EpisodeVideo />}></Route>
      <Route path="/location" element={<Location />} />
      <Route path="/favorite" element={<Favorites />} />
    </Routes>
  );
};

export default AuthRoutes;
