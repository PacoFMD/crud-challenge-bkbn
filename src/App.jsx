import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Routes from "./Routes";

export default () => (
    <App></App>
);

function App() {
  return (
    <Router>
          <Routes/>
    </Router>
  );
}
