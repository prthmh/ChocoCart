import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataProvider, DataContext } from "./context/DataContext";

// Call make Server
makeServer();

export { DataContext };

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
