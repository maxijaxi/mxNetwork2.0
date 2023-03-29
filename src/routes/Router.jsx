import React from "react";
import { Routes, Route } from "react-router-dom";

//! DELETE:
import NewAbout from "../pages/newabout";

// Main Pages "./"
import Hub from "../pages/Hub";
import About from "../pages/About";
import FAQbig from "../pages/FAQ";
import Projects from "../pages/Projects";
import Updates from "../pages/Updates";
import Issues from "../pages/Issues";
import Contact from "../pages/Contact";

// ? "./" ist vllt besser?
// mxMe "./thisIs/mx/"
import ProfileMe from "../pages/mxMe/ProfileMe";
import Services from "../pages/mxMe/Services";
import Feedback from "../pages/mxMe/Feedback";
// !mxMe social "./thisIs/mx/social/"
import Social from "../pages/mxMe/social/Social";
import WatchMe from "../pages/mxMe/social/WatchMe";
import Events from "../pages/mxMe/social/Events";

// !Blog "./blog/"
import Blog from "../pages/Blog/Blog";

// !Dev "./dev/"
import Resources from "../pages/dev/Resources";
import Articles from "../pages/dev/Articles";
import Form from "../pages/Form/Form";

// Legal Pages "./legal/"
import Privacy from "../pages/legal/Privacy";
import Cookies from "../pages/legal/Cookies";
import Data from "../pages/legal/Data";
import Disclaimer from "../pages/legal/Disclaimer";
import Legal from "../pages/legal/Legal";

// Error Pages "./*"
import Error404 from "../error/Error404.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/newabout" element={<NewAbout />} />

      <Route index element={<Hub />} />
      <Route path="/" element={<Hub />} />
      <Route path="/home" element={<Hub />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQbig />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/updates" element={<Updates />} />
      <Route path="/issues" element={<Issues />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/thisIs/mx/profile" element={<ProfileMe />} />
      <Route path="/thisIs/mx/services" element={<Services />} />
      <Route path="/thisIs/mx/feedback" element={<Feedback />} />

      <Route path="/thisIs/mx/social" element={<Social />} />
      <Route path="/thisIs/mx/social/watchme" element={<WatchMe />} />
      <Route path="/thisIs/mx/social/events" element={<Events />} />

      <Route path="/blog" element={<Blog />} />

      <Route path="/form" element={<Form />} />

      <Route path="/dev/resources" element={<Resources />} />
      <Route path="/dev/articles" element={<Articles />} />

      <Route path="/legal/privacy" element={<Privacy />} />
      <Route path="/legal/cookies" element={<Cookies />} />
      <Route path="/legal/data" element={<Data />} />
      <Route path="/legal/disclaimer" element={<Disclaimer />} />
      <Route path="/legal" element={<Legal />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Router;
