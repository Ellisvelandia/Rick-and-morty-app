import { Routes, Route, Navigate } from "react-router-dom";
import LoginRickAndMorty from "../auth/pages/LoginRickAndMorty";
import Signup from "../auth/pages/Signup";
import {
  Characters,
  Episode,
  EpisodeVideo,
  Favorites,
  InfoCharacter,
  Location,
} from "../rickandmorty";
import CardDetails from "../rickandmorty/components/location/CardDetails";
import RickAndMortyPage from "../rickandmorty/pages/RickAndMortyPage";
import PrivateRoutes from "./PrivateRoutes";

const RickAndMortyRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginRickAndMorty />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<RickAndMortyPage />} />
        <Route path="/character" element={<Characters />} />
        <Route path="/card/:id" element={<InfoCharacter />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/episodevideo/:id" element={<EpisodeVideo />} />
        <Route path="/location" element={<Location />} />
        <Route path="/detail/:id" element={<CardDetails />} />
        <Route path="/favorite" element={<Favorites />} />
      </Route>

      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default RickAndMortyRoutes;
