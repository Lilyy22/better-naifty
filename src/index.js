import React, { StrictMode, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { offsetLimitPagination } from "@apollo/client/utilities";

const accessToken = localStorage.getItem("accessToken");

const root = ReactDOM.createRoot(document.getElementById("root"));
const uploadLink = createUploadLink({
  uri:
    process.env.REACT_APP_GRAPHQL_ENDPOINT ??
    "https://api.naifty.academy/graphql",
  headers: {
    "keep-alive": "true",
  },
});

const authLink = new ApolloLink((operation, forward) => {
  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          question: offsetLimitPagination(),
        },
      },
    },
  }),
  link: accessToken ? authLink.concat(uploadLink) : uploadLink,
});

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AuthProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </AuthProvider>
    </ApolloProvider>
  </BrowserRouter>
);
