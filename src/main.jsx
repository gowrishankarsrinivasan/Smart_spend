import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store, { persistor } from "../src/redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={false} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
