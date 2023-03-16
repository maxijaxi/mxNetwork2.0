import React from "react";

import useTitle from "../../hooks/useTitle";
import useDesc from "../../hooks/useDesc";
import useKeywords from "../../hooks/useKeywords";

import "../../scss/legal.scss";

function Cookies() {
  useTitle("Cookie Policy");
  useDesc(
    "Our Cookies Policy outlines how we use cookies on our website and what information we collect through cookies. We respect your privacy and strive to be transparent about our cookie usage."
  );
  useKeywords(
    "Cookies Policy, Cookies, Cookie Usage, Information Collection, Privacy, Transparency, Website, Services, Third-Party Services, User Rights, Contact Information."
  );

  return (
    <div className="legal">
      <div>
        <h1>COOKIE POLICY</h1>
        <small>
          <strong>Last updated March 07, 2023</strong>
        </small>
        <br />
        <br />
        <br />
        <p>
          <span style={{ display: "inline" }}>
            This Cookie Policy explains how mxNetwork ("<strong>Company</strong>
            ," "<strong>we</strong>," "<strong>us</strong>," and "
            <strong>our</strong>
            "), uses cookies and similar technologies to recognize you when you
            visit our website at&nbsp;
            <a href="https://maxijaxi.net" rel="noreferrer" target="_blank">
              https://www.maxijaxi.net
            </a>
            &nbsp;("
            <strong>Website</strong>"). It explains what these technologies are
            and why we use them, as well as your rights to control our use of
            them.
          </span>
        </p>
        <p>
          In some cases we may use cookies to collect personal information, or
          that becomes personal information if we combine it with other
          information.
        </p>
      </div>
      <div>
        <h2>What are cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners in order to make their websites work, or to work more
          efficiently, as well as to provide reporting information.
        </p>
        <p>
          Cookies set by the website owner (in this case, mxNetwork) are called
          "first-party cookies." Cookies set by parties other than the website
          owner are called "third-party cookies." Third-party cookies enable
          third-party features or functionality to be provided on or through the
          website (e.g., advertising, interactive content, and analytics). The
          parties that set these third-party cookies can recognize your computer
          both when it visits the website in question and also when it visits
          certain other websites.
        </p>
      </div>
      <div>
        <h2>Why do we use cookies?</h2>
        <p>
          We use first- and third-party cookies for several reasons. Some
          cookies are required for technical reasons in order for our Website to
          operate, and we refer to these as "essential" or "strictly necessary"
          cookies. Other cookies also enable us to track and target the
          interests of our users to enhance the experience on our Online
          Properties. Third parties serve cookies through our Website for
          advertising, analytics, and other purposes. This is described in more
          detail below.
        </p>
      </div>
      <div>
        <h2>How can I control cookies?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You
          can exercise your cookie rights by setting your preferences in the
          Cookie Consent Manager. The Cookie Consent Manager allows you to
          select which categories of cookies you accept or reject. Essential
          cookies cannot be rejected as they are strictly necessary to provide
          you with services.
        </p>
        <p>
          The Cookie Consent Manager can be found in the notification banner and
          on our website. If you choose to reject cookies, you may still use our
          website though your access to some functionality and areas of our
          website may be restricted. You may also set or amend your web browser
          controls to accept or refuse cookies.
        </p>
        <p>
          The specific types of first- and third-party cookies served through
          our Website and the purposes they perform are described in the table
          below (please note that the specific cookies served may vary depending
          on the specific Online Properties you visit):
        </p>
        <br />
        <h3>
          <ins>Essential website cookies:</ins>
        </h3>
        <p>
          These cookies are strictly necessary to provide you with services
          available through our Website and to use some of its features, such as
          access to secure areas.
        </p>
        <div className="cookie-box">
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>__cf_bm</td>
              </tr>
              <tr>
                <td>Purpose:</td>
                <td>
                  Cloudflare places the cookie on end-user devices that access
                  customer sites protected by Bot Management or Bot Fight Mode.
                </td>
              </tr>
              <tr>
                <td>Provider:</td>
                <td>.maxijaxi.net</td>
              </tr>
              <tr>
                <td>Service:</td>
                <td>
                  Cloudflare&nbsp;
                  <a
                    href="https://jetpack.com/support/cookies/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    View Service Privacy Policy
                  </a>
                </td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>server_cookie</td>
              </tr>
              <tr>
                <td>Expires in:</td>
                <td>30 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <h3>
          <ins>Analytics and customization cookies:</ins>
        </h3>
        <p>
          These cookies collect information that is used either in aggregate
          form to help us understand how our Website is being used or how
          effective our marketing campaigns are, or to help us customize our
          Website for you.
        </p>
        <div className="cookie-box">
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>_ga_#</td>
              </tr>
              <tr>
                <td>Purpose:</td>
                <td>
                  Used to distinguish individual users by means of designation
                  of a randomly generated number as client identifier, which
                  allows calculation of visits and sessions
                </td>
              </tr>
              <tr>
                <td>Provider:</td>
                <td>.maxijaxi.net</td>
              </tr>
              <tr>
                <td>Service:</td>
                <td>
                  Google&nbsp;
                  <a
                    href="https://policies.google.com/privacy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Analytics View Service Privacy Policy
                  </a>
                </td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>http_cookie</td>
              </tr>
              <tr>
                <td>Expires in:</td>
                <td>1 year 11 months 29 days</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cookie-box">
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>_ga</td>
              </tr>
              <tr>
                <td>Purpose:</td>
                <td>
                  Records a particular ID used to come up with data about
                  website usage by the user
                </td>
              </tr>
              <tr>
                <td>Provider:</td>
                <td>.maxijaxi.net</td>
              </tr>
              <tr>
                <td>Service:</td>
                <td>
                  Google&nbsp;
                  <a
                    href="https://policies.google.com/privacy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Analytics View Service Privacy Policy
                  </a>
                </td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>http_cookie</td>
              </tr>
              <tr>
                <td>Expires in:</td>
                <td>1 year 11 months 29 days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h2>How can I control cookies on my browser?</h2>
        <p>
          As the means by which you can refuse cookies through your web browser
          controls vary from browser to browser, you should visit your browser's
          help menu for more information. The following is information about how
          to manage cookies on the most popular browsers:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies"
              rel="noreferrer"
              target="_blank"
            >
              Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
              rel="noreferrer"
              target="_blank"
            >
              Internet Explorer
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
              rel="noreferrer"
              target="_blank"
            >
              Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac"
              rel="noreferrer"
              target="_blank"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
              rel="noreferrer"
              target="_blank"
            >
              Edge
            </a>
          </li>
          <li>
            <a
              href="https://help.opera.com/en/latest/web-preferences/"
              rel="noreferrer"
              target="_blank"
            >
              Opera
            </a>
          </li>
        </ul>
        <p>
          In addition, most advertising networks offer you a way to opt out of
          targeted advertising. If you would like to find out more information,
          please visit:
        </p>
        <ul>
          <li>
            <a
              href="https://optout.aboutads.info/"
              rel="noreferrer"
              target="_blank"
            >
              Digital Advertising Alliance
            </a>
          </li>
          <li>
            <a
              href="https://youradchoices.ca/"
              rel="noreferrer"
              target="_blank"
            >
              Digital Advertising Alliance of Canada
            </a>
          </li>
          <li>
            <a
              href="https://www.youronlinechoices.com/"
              rel="noreferrer"
              target="_blank"
            >
              European Interactive Digital Advertising Alliance
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>What about other tracking technologies, like web beacons?</h2>
        <p>
          Cookies are not the only way to recognize or track visitors to a
          website. We may use other, similar technologies from time to time,
          like web beacons (sometimes called "tracking pixels" or "clear gifs").
          These are tiny graphics files that contain a unique identifier that
          enables us to recognize when someone has visited our Website or opened
          an email including them. This allows us, for example, to monitor the
          traffic patterns of users from one page within a website to another,
          to deliver or communicate with cookies, to understand whether you have
          come to the website from an online advertisement displayed on a
          third-party website, to improve site performance, and to measure the
          success of email marketing campaigns. In many instances, these
          technologies are reliant on cookies to function properly, and so
          declining cookies will impair their functioning.
        </p>
      </div>
      <div>
        <h2>Do you use Flash cookies or Local Shared Objects?</h2>
        <p>
          Websites may also use so-called "Flash Cookies" (also known as Local
          Shared Objects or "LSOs") to, among other things, collect and store
          information about your use of our services, fraud prevention, and for
          other site operations.
        </p>
        <p>
          <span style={{ display: "inline" }}>
            If you do not want Flash Cookies stored on your computer, you can
            adjust the settings of your Flash player to block Flash Cookies
            storage using the tools contained in the&nbsp;
            <a
              href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html"
              rel="noreferrer"
              target="_blank"
            >
              Website Storage Settings Panel
            </a>
            . You can also control Flash Cookies by going to the&nbsp;
            <a
              href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
              rel="noreferrer"
              target="_blank"
            >
              Global Storage Settings Panel
            </a>
            &nbsp;and following the instructions (which may include instructions
            that explain, for example, how to delete existing Flash Cookies
            (referred to "information" on the Macromedia site), how to prevent
            Flash LSOs from being placed on your computer without your being
            asked, and (for Flash Player 8 and later) how to block Flash Cookies
            that are not being delivered by the operator of the page you are on
            at the time).
          </span>
        </p>
        <p>
          Please note that setting the Flash Player to restrict or limit
          acceptance of Flash Cookies may reduce or impede the functionality of
          some Flash applications, including, potentially, Flash applications
          used in connection with our services or online content.
        </p>
      </div>
      <div>
        <h2>Do you serve targeted advertising?</h2>
        <p>
          Third parties may serve cookies on your computer or mobile device to
          serve advertising through our Website. These companies may use
          information about your visits to this and other websites in order to
          provide relevant advertisements about goods and services that you may
          be interested in. They may also employ technology that is used to
          measure the effectiveness of advertisements. They can accomplish this
          by using cookies or web beacons to collect information about your
          visits to this and other sites in order to provide relevant
          advertisements about goods and services of potential interest to you.
          The information collected through this process does not enable us or
          them to identify your name, contact details, or other details that
          directly identify you unless you choose to provide these.
        </p>
      </div>
      <div>
        <h2>How often will you update this Cookie Policy?</h2>
        <p>
          We may update this Cookie Policy from time to time in order to
          reflect, for example, changes to the cookies we use or for other
          operational, legal, or regulatory reasons. Please therefore revisit
          this Cookie Policy regularly to stay informed about our use of cookies
          and related technologies.
        </p>
        <p>
          The date at the top of this Cookie Policy indicates when it was last
          updated.
        </p>
      </div>
      <div>
        <h2>Where can I get further information?</h2>
        <p>
          If you have any questions about our use of cookies or other
          technologies, please email us at contact@maxijaxi.net or by post to:
        </p>
        <br />
        <p>mxNetwork</p>
        <p>__________________</p>
        <p>
          <span style={{ display: "inline" }}>
            Vienna, <em>[classified]</em>
          </span>
        </p>
        <p>Austria</p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Cookies;
