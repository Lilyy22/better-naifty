import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AuthProvider } from "./context/AuthContext";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { OnlineStatusProvider } from "./context/OnlineStatusContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const uploadLink = createUploadLink({
  uri:
    process.env.REACT_APP_GRAPHQL_ENDPOINT ??
    "https://naifty.abelayalew.dev/graphql",
  headers: {
    "keep-alive": "true",
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uploadLink,
});

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AuthProvider>
        <OnlineStatusProvider>
          <App />
        </OnlineStatusProvider>
      </AuthProvider>
    </ApolloProvider>
  </BrowserRouter>
);
