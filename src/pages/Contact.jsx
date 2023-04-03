import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownContext } from "../contexts/dropdownContext";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

import useTitle from "../hooks/useTitle";
import useDesc from "../hooks/useDesc";
import useKeywords from "../hooks/useKeywords";

import "../scss/contact.scss";

function Contact() {
  useTitle("Contact");
  useDesc(
    "Contact us!"
  );
  useKeywords(
    "contact, whois, email"
  );
  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };

  const mapContainerStyle = {
    width: "40vw",
    height: "100%",
  };

  const center = {
    lat: 48.2082,
    lng: 16.3738,
  };

  const options = {
    styles: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#000000",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
    ],
  };
  return (
    <div className="map-wrap">
      <div className="map">
        <LoadScript googleMapsApiKey="AIzaSyDjHRYEd3yTXU6uq6Rw_sTVWVLI6U3Yhjc">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={11}
            options={options}
            disableDefaultUI={true}
          />
        </LoadScript>
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <div className="content-wrapper">
          <div className="content-container">
            <div className="contact-item">
              <h2>Contact us:</h2>
              <p>
                <span style={{ display: "inline" }}>
                  <strong>Email:</strong>&nbsp;contact@maxijaxi.net
                </span>
              </p>
              <p>
                <span style={{ display: "inline" }}>
                  <strong>Support:</strong>&nbsp;support@maxijaxi.net
                </span>
              </p>
              <p>
                <span style={{ display: "inline" }}>
                  <strong>Discord:</strong>&nbsp;M4x1#9421
                </span>
              </p>
            </div>
            <div className="contact-item">
              <h2>Don't visit us:</h2>
              <p>
                <span style={{ display: "inline" }}>
                  <strong>Country:</strong>&nbsp;Austria
                </span>
              </p>
              <p>
                <span style={{ display: "inline" }}>
                  <strong>City:</strong>&nbsp;Vienna
                </span>
              </p>
              <p>
                <span style={{ display: "inline" }}>
                  <strong>Adress:</strong>&nbsp;<em>[classified]</em>
                </span>
              </p>
            </div>
            <div className="contact-item">
              <h2>Info:</h2>
              <div className="contact-long-info-text">
                <p>
                  <span style={{ display: "inline" }}>
                    Don't hesitate to&nbsp;<strong>contact me</strong>&nbsp;regarding any topic, whether it
                    be a question, feedback or any other inquiry. For a prompt
                    response, you may choose to reach me via Discord, but email
                    is also an option. Looking forward to hearing from you!
                  </span>
                </p>
              </div>
              <p>
                <span style={{ display: "inline" }}>
                  <strong>Disclaimer:</strong>&nbsp;It may take 24-48 hours to
                  respond.
                </span>
              </p>
            </div>
          </div>
          <div className="contact-links">
            <h2>Other useful links:</h2>
            <div className="link-buttons">
              <Link to="/faq" onClick={toggle}>
                <button>FAQ</button>
              </Link>
              <Link to="/legal/data" onClick={toggle}>
                <button>Data Form</button>
              </Link>
              <Link to="/legal" onClick={toggle}>
                <button>Legal Pages</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
