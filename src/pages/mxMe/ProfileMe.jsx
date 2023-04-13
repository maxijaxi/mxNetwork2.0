import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownContext } from "../../contexts/dropdownContext";

import SkillBar from "../../components/SkillBar";
import YouTubeEmbed from "../../components/YouTubeEmbed";

import useTitle from "../../hooks/useTitle";
import useDesc from "../../hooks/useDesc";
import useKeywords from "../../hooks/useKeywords";

import "../../scss/mxMe/ProfileMe.scss";

function ProfileMe() {
  useTitle("Maxis");
  useDesc("This is Maxis, owner and creator of the mxNetwork.");
  useKeywords("Maxis, About, Max, Skrable, Skrableguy");

  const { setClick } = useContext(DropdownContext);

  const toggle = () => {
    setClick(!setClick);
  };
  return (
    <div className="maxis">
      <div className="header">
        <h2>Maxis</h2>
      </div>
      <div className="maxis-part">
        <h3>About me</h3>
        <div className="about-me">
          <div className="about-text">
            <p>
              Hello and welcome to my personal corner of the internet! My name
              is Maximilian, but you might also know me as Maxwell or Skable.
              I'm an 18-year-old student with a passion for programming and all
              things tech. When I'm not busy with school, you can find me
              immersed in the world of code, learning about new technologies,
              and exploring the ever-evolving digital landscape.
            </p>
            <br />
            <p>
              As a tech enthusiast, I'm driven by my curiosity and love for
              problem-solving. My ultimate goal is to become a valuable
              full-stack developer and establish my own company. I'm motivated
              by the endless possibilities that technology offers and the
              potential to make a positive impact on people's lives.
            </p>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              <a
                href="https://mschuster.dev/"
                rel="noreferrer"
                target="_blank"
                onClick={toggle}
              >
                <button>My Portfolio</button>
              </a>
              <Link to="/thisIs/mx/social" onClick={toggle}>
                <button className="secondary-button">Find me online</button>
              </Link>
            </div>
          </div>
          <img src="/images/meClass.jpeg" alt="me?" className="round-image" />
        </div>
      </div>
      <div className="maxis-part">
        <h3>Technical Skills</h3>
        <div className="skills-wrap">
          <div>
            <ul>
              <li>Web development</li>
              <li>UI/UX Design</li>
              <li>Backend Development</li>
              <li>Cloud and Distributed Computing</li>
              <li>Application Hosting</li>
              <li>Operating Systems</li>
              <li>Networking</li>
            </ul>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              <a
                href="https://shop.maxijaxi.net"
                rel="noreferrer"
                target="_blank"
                onClick={toggle}
              >
                <button>My Services</button>
              </a>
              <a
                href="https://github.com/maxijaxi"
                rel="noreferrer"
                target="_blank"
                onClick={toggle}
              >
                <button className="secondary-button">My GitHub</button>
              </a>
            </div>
          </div>
          <div>
            <div className="skill-grid">
              <SkillBar
                name="HTML"
                percentage={98}
                color="linear-gradient(90deg, #e34c26 0%, #f06529 100%)"
              />
              <SkillBar
                name="CSS (SCSS)"
                percentage={80}
                color="linear-gradient(90deg, #264de4 0%, #2965f1 100%)"
              />
              <SkillBar name="JavaScript" percentage={56} color="#f0db4f" />
              <SkillBar name="TypeScript" percentage={32} color="#007acc" />
              <SkillBar
                name="C++"
                percentage={12}
                color="linear-gradient(90deg, #044F88 0%, #5E97D0 100%)"
              />
            </div>
            <br />
            <br />
            <div className="skill-grid">
              <SkillBar name="React" percentage={74} color="#61DBFB" />
              <SkillBar name="Next.js" percentage={50} color="#344767" />
              <SkillBar
                name="Angular"
                percentage={40}
                color="linear-gradient(90deg, #a6120d 0%, #dd1b16 100%)"
              />
              <SkillBar name="Nest.js" percentage={32} color="#E0234E" />
            </div>
          </div>
        </div>
      </div>
      <div className="maxis-part">
        <h3>My Journey</h3>
        <p>
          My journey as a self-taught programmer began with web development, but
          it wasn't long before I ventured into other areas like UI/UX design,
          server management, and cloud computing. The more I learned, the more
          fascinated I became with the world of technology. This passion for
          knowledge has driven me to explore various fields and expand my
          skillset, making me a more versatile and well-rounded developer.
        </p>
        <p>
          As I continue to grow and learn, I remain committed to helping others
          and always giving my best in everything I do. With every new
          challenge, I'm inspired to push myself further and develop a deeper
          understanding of the technologies that shape our world.
        </p>
      </div>
      <div className="maxis-part">
        <h3>Favourite Band</h3>
        <div className="skills-wrap">
          <div>
            <p>
              Everyone has that one band that speaks to their soul, and for me,
              that band is Linkin Park. Their unique blend of alternative rock,
              nu-metal, and electronic elements has resonated with me deeply.
              Chester Bennington's powerful vocals, Mike Shinoda's creative
              genius, and the band's overall versatility have left a lasting
              impact on my musical taste. Their music has been a constant source
              of inspiration and motivation throughout my life, reminding me to
              persevere and chase my dreams, no matter the obstacles.
            </p>
            <br />
            <p>
              Did you know that Linkin Park recently released some previously
              unreleased tracks? It's always exciting to discover new gems from
              my favorite band. If you haven't had a chance to check them out
              yet, don't worry—I've got you covered!
            </p>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              <a
                href="https://www.youtube.com/channel/UCZU9T1ceaOgwfLRq7OKFU4Q"
                rel="noreferrer"
                target="_blank"
                onClick={toggle}
              >
                <button>Linkin Park</button>
              </a>
            </div>
          </div>
          <YouTubeEmbed />
        </div>
      </div>
      <div className="maxis-part">
        <h3>Future Goals</h3>
        <p>
          In the short term, I aim to strengthen my expertise in full-stack
          development and gain experience working on diverse projects. In the
          long run, I aspire to establish my own company and create innovative
          solutions that can make a meaningful impact on people's lives. As I
          work towards these goals, I look forward to connecting with fellow
          developers, learning from their experiences, and contributing to the
          vibrant tech community.
        </p>
        <br />
        <p>
          Thank you for taking the time to learn more about me and my passions.
          Feel free to explore the rest of the website, and don't hesitate to
          reach out if you'd like to connect or collaborate on a project. I'm
          always excited to meet new people and learn from their experiences.
        </p>
      </div>
    </div>
  );
}

export default ProfileMe;
