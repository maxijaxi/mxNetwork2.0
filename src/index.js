import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactGA from "react-ga4";
import { hotjar } from "react-hotjar";

//-- Google Analytics 4
ReactGA.initialize("G-MQ8RHH8CBE");

//-- Hotjar
hotjar.initialize(3403749, 6);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
