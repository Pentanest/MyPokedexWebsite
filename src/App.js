import React from "react";
import { Routes, Route } from "react-router-dom";

import { NoMatch } from "./components";
import { DocumentationPage, HomePage, ErrorPage } from "./pages";

import "./App.css";

const ROUTES = [
  ["/", <HomePage />],
  ["pokedex", <DocumentationPage />],
  ["legendaries", <ErrorPage />],
  ["documentation", <ErrorPage />],
  ["*", <NoMatch />],
];

function App() {
  console.warn = console.error = () => {};
  return (
    <div className="app-container">
      <Routes>
        {ROUTES.map((route) => {
          return <Route path={route[0]} element={route[1]} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
