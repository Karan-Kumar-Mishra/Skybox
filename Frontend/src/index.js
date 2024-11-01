import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
      domain="dev-n2m63z88js31dex4.us.auth0.com"
      clientId="G6vWWIFtRr5KYcCjM3CMw9CCkcDOzjU0"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
);

reportWebVitals();
