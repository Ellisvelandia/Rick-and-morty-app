import React from "react";
import ReactDOM from "react-dom/client";
import RickAndMortyApp from "./RickAndMortyApp";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <RickAndMortyApp />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
