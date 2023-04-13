import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownContext } from "../contexts/dropdownContext";

import useTitle from "../hooks/useTitle";
import useDesc from "../hooks/useDesc";
import useKeywords from "../hooks/useKeywords";

import "../scss/about.scss";

//! MAKE BUTTON LINKS AND PAGES
// TODO HTML OLD MXNET

function About() {
  useTitle("About");
  useDesc(
    "Learn about mxNetwork, a personal hub of projects and a showcase of modern web development. Discover the story behind its creation, the technologies used, and the team behind it."
  );
  useKeywords(
    "mxNetwork, personal hub, projects, modern web development, story, technologies, team"
  );

  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };
  return (
    <div className="about">
      <div className="about-head">
        <h2>
          This is the
          <br />
          <span>
            m<span className="fast-flicker">x</span>Netw
            <span className="flicker">o</span>rk
          </span>
        </h2>
      </div>
      <section>
        <div className="container">
          <p>
            Welcome to mxNetwork! Our story begins with a humble homepage,
            created by just one person - me! Initially, it was just a small page
            to connect all my projects, but it quickly became clear that it
            needed a major upgrade. Not only did it look terrible on certain
            screen sizes, but its poor performance was also holding it back.
          </p>
          <br />
          <p>
            That's why I decided to create mxNetwork 2.0 - a sleek,
            high-performance website with cutting-edge features, animations, and
            more. I used the power of React.js to boost productivity and learn
            the essential skills needed for modern web development. And the best
            part? It's all the work of one person. Join us and experience the
            power of mxNetwork today!
          </p>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            <a href="#newsletter">
              <button>Join us</button>
            </a>
            <Link to="" onClick={toggle}>
              <button className="secondary-button">Old mxNetwork</button>
            </Link>
            <Link to="/thisIs/mx/feedback" onClick={toggle}>
              <button className="secondary-button">Feedback</button>
            </Link>
          </div>
        </div>
        <img src="/images/mxnLogo.svg" alt="mxNetwork Logo" />
        <img src="/images/meClass.jpeg" alt="me?" className="round-image" />
        <div className="container">
          <h3>About me</h3>
          <p>
            Welcome to my world of programming and technology! I'm Max, also
            known as Maxwell or Skable, and I'm the creator of mxNetwork and
            maxijaxi.net. When I'm not busy studying, I'm either playing video
            games or coding.
          </p>
          <h3>My programming journey</h3>
          <p>
            I actually started my first project a long time ago, some months
            before the Covid outbreak. I intended to make my own Discord bot,
            although this did not last long. Fast forward to about half a year
            ago, I picked up programming by beginning to learn HTML, CSS, and
            web development. While it was quite overwhelming at first, I managed
            to master it after some time, and now I am moving on to some more
            interesting and modern techniques like React.js (the framework I
            used for this website). I also picked up my old Discord bot and
            started from scratch, but this time it is actually a lot more
            interesting. My guess is that I just lacked the basic knowledge, but
            now that I have it, I enjoy programming a lot.
          </p>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            <Link to="/thisIs/mx/profile" onClick={toggle}>
              <button>My Profile</button>
            </Link>
            <a
              href="https://mschuster.dev/"
              rel="noreferrer"
              target="_blank"
              onClick={toggle}
            >
              <button className="secondary-button">My Portfolio</button>
            </a>
            <a
              href="https://shop.maxijaxi.net"
              rel="noreferrer"
              target="_blank"
              onClick={toggle}
            >
              <button className="secondary-button">My Services</button>
            </a>
          </div>
        </div>
        <div className="container">
          <h3>My big Projects</h3>
          <p>
            In addition to mxNetwork, I am also working on some other exciting
            projects. One of them is mxCloud, an exclusive cloud service that is
            only available to people who have been personally invited by me.
            While the development process is taking longer than expected due to
            security and capacity issues, I am committed to delivering a
            top-quality product. Keep an eye out for updates!
          </p>
          <br />
          <p>
            Another project I'm working on is mxDiscord. This project is still
            in its early stages of development, but I'm excited about its
            potential. The goal of mxDiscord is to provide custom-made websites
            for Discord servers and a dashboard for managing those servers. If
            you want to learn more about these projects and my other works,
            click the button below to visit my Projects page.
          </p>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            <Link to="/projects" onClick={toggle}>
              <button>Projects</button>
            </Link>
            <a
              href="https://cloud.maxijaxi.net"
              rel="noreferrer"
              target="_blank"
              onClick={toggle}
            >
              <button
                className="secondary-button"
                style={{
                  border: "2px solid #4dbec2",
                  backgroundColor: "transparent",
                }}
              >
                mxCloud
              </button>
            </a>
            <a
              href="https://discord.maxijaxi.net"
              rel="noreferrer"
              target="_blank"
              onClick={toggle}
            >
              <button
                className="secondary-button"
                style={{
                  border: "2px solid #5865F2",
                  backgroundColor: "transparent",
                }}
              >
                mxDiscord
              </button>
            </a>
          </div>
        </div>
        <div className="projects-img">
          <img
            src="/images/mxcLogo.svg"
            alt="mxCloud Logo"
            className="img-start"
          />
          <img
            src="/images/mxdLogo.svg"
            alt="mxDiscord Logo"
            className="img-end"
          />
        </div>
      </section>
      <br />
      <br />
    </div>
  );
}

export default About;
