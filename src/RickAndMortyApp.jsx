import { BrowserRouter } from "react-router-dom";
import RickAndMortyRoutes from "./routes/RickAndMortyRoutes";
import "./App.css";

const RickAndMortyApp = () => {
  return (
    <BrowserRouter>
      <RickAndMortyRoutes />
    </BrowserRouter>
  );
};

export default RickAndMortyApp;
