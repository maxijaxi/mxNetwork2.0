import React from "react";

import useTitle from "../hooks/useTitle";
import useDesc from "../hooks/useDesc";
import useKeywords from "../hooks/useKeywords";

import SmallBanner from "../components/SmallBanner";
import Container from "../components/Containers";

import "../styles/about.css";

function About() {
  useTitle("About me");
  useDesc("This is text");
  useKeywords("This, is, test"); 
  return (
    <div>
      <SmallBanner url="/images/smallBanner.jpg" />
      <section>
        <div className="grid-wrapper">
          <Container name="About me" id="aboutMe" className="about-container">
            <h3>Who am I?</h3>
            <p>
              Hello, my name is Max, but some people know me as Maxwell or
              Skable. I'm the creator of the mxNetwork and maxijaxi.net, and as
              a student, my time is mostly devoted to school. Despite my busy
              schedule, my passion for technology and programming fuels my free
              time, which I often spend either playing video games or coding.
            </p>
            <br />
            <h3>My programming journey</h3>
            <p>
              I actually started my first project a long time ago, some months
              before the Covid outbreak. I intended to make my own Discord bot,
              although this did not last long. Fast forward to about half a year
              ago, I picked up programming by beginning to learn HTML, CSS, and
              web development. While it was quite overwhelming at first, I
              managed to master it after some time, and now I am moving on to
              some more interesting and modern techniques like React.js (the
              framework I used for this website).
            </p>
            <p>
              I also picked up my old Discord bot and started from scratch, but
              this time it is actually a lot more interesting. My guess is that
              I just lacked the basic knowledge, but now that I have it, I enjoy
              programming a lot.
            </p>
            <br />
          </Container>
          <article>
            <div>
              <h3>mxNetwork</h3>
              <p>
                The name mxNetwork comes from my first homepage, which was
                initially just a small page to connect all my projects and
                served as a hub. That is also the origin of both its name and
                the home page title. After moving on with development, I
                realized the importance of improving it, not only because it
                looked horrible on certain screen sizes but also because of its
                poor performance due to its background gif (although I can't
                deny that I still like its design).
              </p>
              <p>
                So mxNetwork 2.0 was born, with better looks, performance,
                features, animations, and much more. I also used React.js to
                increase productivity, performance and to learn an essential
                framework in modern web development.
              </p>
            </div>
            <br />
            <div>
              <h3>mxCloud</h3>
              <p>
                The mxCloud's original name was 21er Cloud, but I changed this
                fairly quickly (some people probably know why, but I won't tell
                everyone). So as the name implies, the mxCloud is an exclusive
                cloud. In this case, exclusive means that it is only available
                to people who have been personally invited by me.
              </p>
              <p>
                While development is taking longer than expected due to security
                and capacity problems, it is only a matter of time until it will
                be finished. Stay tuned for updates!
              </p>
            </div>
            <br />
            <div>
              <h3>mxDiscord</h3>
              <aside>
                <img src="https://maxijaxi.net/mxdLogo.png" alt="" />
              </aside>
              <p>
                The mxDiscord is the newest of these three projects. In fact, it
                is so new that it is still only in early development.
              </p>

              <p>
                Let me tell you about what the mxDiscord is supposed to become.
                Its main purpose will be the routing and display of custom-made
                websites for the Discord servers of my bot. Furthermore, it
                should hold a dashboard for specific settings and management of
                these servers.
              </p>
              <p>
                Let me tell you about what the mxDiscord is supposed to become.
                Its main purpose will be the routing and display of custom-made
                websites for the Discord servers of my bot. Furthermore, it
                should hold a dashboard for specific settings and management of
                these servers.
              </p>
            </div>
          </article>
          <Container name="My favorite band" className="about-container">
            <p>
              Linkin Park is my favorite band. Although they were most active
              before I was born or when I was very young, I discovered their
              music fairly early on, and it became a major part of my youth.
              When I learned about the passing of Chester Bennington, it made me
              very sad and had a profound impact on me. So, when I found out
              about the release of their old unreleased tracks, I was overjoyed.
              One particular song called "Lost" immediately resonated with me,
              and I fell in love with it.
            </p>
            <div className="iframeWrapper">
              <iframe
                id="ifm"
                src="https://www.youtube.com/embed/7NK_JOkuSVY"
                title="Lost - Linkin Park"
              />
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default About;
