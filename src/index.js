import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import ProvideWrapper from "./Helper/Api/ProviderWrapper";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProvideWrapper>
    <App />
    </ProvideWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
