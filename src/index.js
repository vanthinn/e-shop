import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./app/Store";
import { SkeletonTheme } from "react-loading-skeleton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SkeletonTheme baseColor="#ede8e8" highlightColor="#fcfcfc">
        <Toaster position="top-center" reverseOrder={false} />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SkeletonTheme>
    </Provider>
  </React.StrictMode>
);
