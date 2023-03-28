import React from "react";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./javascripts/scrollToTop";

import InfoContainer from "./components/InfoContainer/Container";

import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Footer from "./components/Footer/Footer";
import { DropdownProvider } from "./contexts/dropdownContext";
import { MobileDropdownProvider } from "./contexts/mobileDropdownContext";

import "./App.css";

import Router from "./routes/Router";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DropdownProvider>
        <MobileDropdownProvider>
          <div className="App">
            <Navbar />
            <MobileNavbar />
            <InfoContainer />
            <Router />
            <Footer />
          </div>
        </MobileDropdownProvider>
      </DropdownProvider>
    </BrowserRouter>
  );
}

export default App;
