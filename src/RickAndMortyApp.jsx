import { BrowserRouter } from "react-router-dom";
import RickAndMortyRoutes from "./routes/RickAndMortyRoutes";
import toast, { Toaster } from "react-hot-toast";

import "./App.css";

const RickAndMortyApp = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <RickAndMortyRoutes />
    </BrowserRouter>
  );
};

export default RickAndMortyApp;
