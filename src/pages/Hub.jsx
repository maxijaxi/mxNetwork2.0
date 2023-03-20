import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DropdownContext } from "../contexts/dropdownContext";

import useTitle from "../hooks/useTitle";
import useDesc from "../hooks/useDesc";
import useKeywords from "../hooks/useKeywords";

import Banner from "../components/Hub/Banner";
import LogoTemp from "../components/Hub/LogoTemplate";
import FAQsmall from "../components/Hub/FAQSmall";

import "../scss/hub.scss";

function Hub() {
  useTitle("Hub");
  useDesc(
    "The Hub of the mxNetwork. Here you can navigate to all pages and services maxijaxi.net provides!"
  );
  useKeywords("mxNetwork, mxnetwork, mxNetwork Hub, mxN, Hub");

  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };

  return (
    <div className="hub">
      <div>
        <Banner url="/images/banner.jpg" />
        <div className="LogoTemp-Container">
          <LogoTemp
            name="mxNetwork"
            adress="/images/mxGrayLogo.png"
          />
          <LogoTemp
            name="mxCloud"
            adress="/images/mxGrayLogo.png"
          />
          <LogoTemp
            name="mxDiscord"
            adress="/images/mxGrayLogo.png"
          />
        </div>
        <section>
          <div className="vert-content">
            <div className="vert-line-top">
              <h2>About me</h2>
              <p>
                Hello there! My name is Max, although some people might know me
                as Maxwell or Skrable. I'm the owner and creator of the
                mxNetwork and maxijaxi.net.
              </p>
              <p>
                Currently, I'm 17 years old and live in Vienna, Austria, as a
                student in my final year. I enjoy spending my free time playing
                video games and programming stuff, though I don't have a lot of
                time due to school.
              </p>
              <Link to="/about" onClick={toggle}>
                <button>Learn more</button>
              </Link>
            </div>
            <div className="vert-line">
              <div>
                <h2>The mxNetwork</h2>
                <p>
                  The mxNetwork showcases my personal projects and updates. You
                  can view my completed projects and stay informed about recent
                  changes through the Updates page.
                </p>
              </div>
            </div>
            <div className="vert-line-bottom">
              <h2>The Future</h2>
              <p>
                Future plans for the mxNetwork and its subdomains include
                completing mxNetwork, mxDiscord, and a rework for mxCloud.
              </p>
              <p>
                I'm also considering creating a personal blog, as well as an
                article page for in-depth coding articles that discuss some
                problems I've encountered while coding and how to fix them. I
                want to share the knowledge I've gained and pass it on to
                others. Personally, I believe that these types of articles are
                the most important, as they can often make the difference
                between a work-in-progress project and a finished one.
              </p>
            </div>
          </div>
          <FAQsmall />
        </section>
      </div>
    </div>
  );
}

export default Hub;
