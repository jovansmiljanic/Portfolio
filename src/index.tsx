import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// App context properties
import { Store } from "./data/store/index";

ReactDOM.render(
  <Store>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Store>,
  document.getElementById("root")
);
