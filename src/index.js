import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactGA from "react-ga4";
import { hotjar } from "react-hotjar";

//-- Google Analytics 4
ReactGA.initialize("G-MQ8RHH8CBE");

//-- Hotjar
hotjar.initialize(3403749, 6);

//-- Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
