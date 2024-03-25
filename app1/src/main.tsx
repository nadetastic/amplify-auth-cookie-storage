import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import config from "../src/amplifyconfiguration.json";

import { CookieStorage } from "aws-amplify/utils";
import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito";

Amplify.configure(config);

cognitoUserPoolsTokenProvider.setKeyValueStorage(
  new CookieStorage({
    domain: "*",
    secure: true,
    sameSite: "lax",
  })
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
