import React from "react";
import { Link } from "react-router-dom";

import useTitle from "../../hooks/useTitle";
import useDesc from "../../hooks/useDesc";
import useKeywords from "../../hooks/useKeywords";

import "../../scss/legal.scss";

function Privacy() {
  useTitle("Privacy Policy");
  useDesc(
    "Our Privacy Policy explains how we collect, use, and protect your personal information. We take your privacy seriously and strive to be transparent about our practices. This policy applies to our website and any related services."
  );
  useKeywords(
    "Privacy Policy, Personal Information, Data Collection, Data Use, Data Protection, Transparency, Website, Services, Cookies, Third-Party Services, User Rights, Contact Information"
  );
  return (
    <div className="legal">
      <div>
        <h1>PRIVACY POLICY</h1>
        <small>
          <strong>Last updated March 02, 2023</strong>
        </small>
        <br />
        <br />
        <br />
        <p>
          <span style={{ display: "inline" }}>
            This privacy notice for mxNetwork ("<strong>Company</strong>," "
            <strong>we</strong>," "<strong>us</strong>," or "
            <strong>our</strong>
            "), describes how and why we might collect, store, use, and/or share
            ("<strong>process</strong>") your information when you use our
            services ("
            <strong>Services</strong>"), such as when you:
          </span>
        </p>
        <ul>
          <li>
            Visit our website at&nbsp;
            <a href="https://maxijaxi.net" rel="noreferrer" target="_blank">
              https://www.maxijaxi.net
            </a>
            &nbsp;, or any website of ours that links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>
        <p>
          <span style={{ display: "inline" }}>
            <strong>Questions or concerns?</strong> Reading this privacy notice
            will help you understand your privacy rights and choices. If you do
            not agree with our policies and practices, please do not use our
            Services. If you still have any questions or concerns, please
            contact us at contact@maxijaxi.net .
          </span>
        </p>
      </div>
      <br />
      <div>
        <h2>SUMMARY OF KEY POINTS</h2>
        <i>
          <span style={{ display: "inline" }}>
            <strong>
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our table of
              contents below to find the section you are looking for. You can
              also click&nbsp;
              <a href="#toc">here</a>&nbsp;to go directly to our table of
              contents.
            </strong>
          </span>
        </i>
        <p>
          <span style={{ display: "inline" }}>
            <strong>What personal information do we process?</strong> When you
            visit, use, or navigate our Services, we may process personal
            information depending on how you interact with mxNetwork and the
            Services, the choices you make, and the products and features you
            use. Click&nbsp;<a href="#personalinfo">here</a>&nbsp;to learn more.
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            <strong>Do we process any sensitive personal information?</strong>
            &nbsp;We do not process sensitive personal information.
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            <strong>Do we receive any information from third parties?</strong>
            We may receive information from public databases, marketing
            partners, social media platforms, and other outside sources.
            Click&nbsp;
            <a href="#othersources">here</a>&nbsp;to learn more.
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            <strong>How do we process your information?</strong> We process your
            information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to
            comply with law. We may also process your information for other
            purposes with your consent. We process your information only when we
            have a valid legal reason to do so. Click&nbsp;
            <a href="#infouse">here</a>
            &nbsp;to learn more.
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            <strong>
              In what situations and with which parties do we share personal
              information?
            </strong>
            We may share information in specific situations and with specific
            third parties. Click&nbsp;<a href="#whoshare">here</a>&nbsp;to learn
            more.
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            <strong>How do we keep your information safe?</strong>We have
            organizational and technical processes and procedures in place to
            protect your personal information. However, no electronic
            transmission over the internet or information storage technology can
            be guaranteed to be 100% secure, so we cannot promise or guarantee
            that hackers, cybercriminals, or other unauthorized third parties
            will not be able to defeat our security and improperly collect,
            access, steal, or modify your information. Click&nbsp;
            <a href="#infosafe">here</a>&nbsp;to learn more.
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            <strong>What are your rights?</strong> Depending on where you are
            located geographically, the applicable privacy law may mean you have
            certain rights regarding your personal information. Click&nbsp;
            <a href="#privacyrights">here</a>&nbsp;to learn more.
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            <strong>How do you exercise your rights?</strong> The easiest way to
            exercise your rights is by filling out our data subject request form
            available here:&nbsp;
            <Link to="/legal/data" target="_blank">
              https://maxijaxi.net/legal/data
            </Link>
            , or by contacting us. We will consider and act upon any request in
            accordance with applicable data protection laws.
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            Want to learn more about what mxNetwork does with any information we
            collect? Click&nbsp;<a href="#toc">here</a>
            &nbsp;to review the notice in full.
          </span>
        </p>
      </div>
      <br />
      <div>
        <h2 id="toc">TABLE OF CONTENTS</h2>
        <ol>
          <a href="#infocollect">
            <li>WHAT INFORMATION DO WE COLLECT?</li>
          </a>
          <a href="#infouse">
            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
          </a>
          <a href="#legalbases">
            <li>
              WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
              INFORMATION?
            </li>
          </a>
          <a href="#whoshare">
            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
          </a>
          <a href="#pwebsites">
            <li>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</li>
          </a>
          <a href="#cookies">
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
          </a>
          <a href="#sociallogins">
            <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
          </a>
          <a href="#inforetain">
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
          </a>
          <a href="#infosafe">
            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
          </a>
          <a href="#privacyrights">
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
          </a>
          <a href="#DNT">
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
          </a>
          <a href="#caresidents">
            <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
          </a>
          <a href="#policyupdates">
            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
          </a>
          <a href="#contact">
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
          </a>
          <a href="#request">
            <li>
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </li>
          </a>
        </ol>
      </div>
      <br />
      <div>
        <h2 id="infocollect">1. WHAT INFORMATION DO WE COLLECT?</h2>
        <h3 id="personalinfo">Personal information you disclose to us</h3>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> We collect personal information that you
            provide to us.
          </span>
        </i>
        <p>
          <span style={{ display: "inline" }}>
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the Services, or otherwise when you
            contact us.
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            <strong>Personal Information Provided by You.</strong> The personal
            information that we collect depends on the context of your
            interactions with us and the Services, the choices you make, and the
            products and features you use. The personal information we collect
            may include the following:
          </span>
        </p>
        <ul>
          <li>usernames</li>
          <li>passwords</li>
          <li>contact or authentication data</li>
          <li>email addresses</li>
        </ul>
        <p>
          <span style={{ display: "inline" }}>
            <strong>Sensitive Information.</strong>&nbsp;We do not process
            sensitive information.
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            <strong>Social Media Login Data.</strong>&nbsp;We may provide you
            with the option to register with us using your existing social media
            account details, like your Facebook, Twitter, or other social media
            account. If you choose to register in this way, we will collect the
            information described in the section called&nbsp; "
            <a href="#sociallogins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>
            "&nbsp;below.
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </span>
        </p>
        <h3 id="othersources">Information automatically collected</h3>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong>&nbsp;Some information — such as your
            Internet Protocol (IP) address and/or browser and device
            characteristics — is collected automatically when you visit our
            Services.
          </span>
        </i>
        <p>
          <span style={{ display: "inline" }}>
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            Like many businesses, we also collect information through cookies
            and similar technologies. You can find out more about this in our
            Cookie Notice:&nbsp;
            <Link to="/legal/cookies" target="_blank">
              https://maxijaxi.net/legal/cookies
            </Link>
            .
          </span>
        </p>
        <p>The information we collect includes:</p>
        <ul>
          <li>
            <span style={{ display: "inline" }}>
              <i>Log and Usage Data.</i> Log and usage data is service-related,
              diagnostic, usage, and performance information our servers
              automatically collect when you access or use our Services and
              which we record in log files. Depending on how you interact with
              us, this log data may include your IP address, device information,
              browser type, and settings and information about your activity in
              the Services (such as the date/time stamps associated with your
              usage, pages and files viewed, searches, and other actions you
              take such as which features you use), device event information
              (such as system activity, error reports (sometimes called "crash
              dumps"), and hardware settings).
            </span>
          </li>
          <li>
            <span style={{ display: "inline" }}>
              <i>Device Data.</i> We collect device data such as information
              about your computer, phone, tablet, or other device you use to
              access the Services. Depending on the device used, this device
              data may include information such as your IP address (or proxy
              server), device and application identification numbers, location,
              browser type, hardware model, Internet service provider and/or
              mobile carrier, operating system, and system configuration
              information.
            </span>
          </li>
          <li>
            <span style={{ display: "inline" }}>
              <i>Location Data.</i> We collect location data such as information
              about your device's location, which can be either precise or
              imprecise. How much information we collect depends on the type and
              settings of the device you use to access the Services. For
              example, we may use GPS and other technologies to collect
              geolocation data that tells us your current location (based on
              your IP address). You can opt out of allowing us to collect this
              information either by refusing access to the information or by
              disabling your Location setting on your device. However, if you
              choose to opt out, you may not be able to use certain aspects of
              the Services.
            </span>
          </li>
        </ul>
        <h3>Information collected from other sources</h3>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> We may collect limited data from public
            databases, marketing partners, social media platforms, and other
            outside sources.
          </span>
        </i>
        <p>
          <span style={{ display: "inline" }}>
            In order to enhance our ability to provide relevant marketing,
            offers, and services to you and update our records, we may obtain
            information about you from other sources, such as public databases,
            joint marketing partners, affiliate programs, data providers, social
            media platforms, and from other third parties. This information
            includes mailing addresses, job titles, email addresses, phone
            numbers, intent data (or user behavior data), Internet Protocol (IP)
            addresses, social media profiles, social media URLs, and custom
            profiles, for purposes of targeted advertising and event promotion.
            If you interact with us on a social media platform using your social
            media account (e.g., Facebook or Twitter), we receive personal
            information about you such as your name, email address, and gender.
            Any personal information that we collect from your social media
            account depends on your social media account's privacy settings.
          </span>
        </p>
      </div>
      <br />
      <div>
        <h2 id="infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> We process your information to provide,
            improve, and administer our Services, communicate with you, for
            security and fraud prevention, and to comply with law. We may also
            process your information for other purposes with your consent.
          </span>
        </i>
        <strong>
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </strong>
        <ul>
          <li>
            <span style={{ display: "inline" }}>
              <strong>
                To facilitate account creation and authentication and otherwise
                manage user accounts.
              </strong>
              &nbsp;We may process your information so you can create and log in
              to your account, as well as keep your account in working order.
            </span>
          </li>
          <li>
            <span style={{ display: "inline" }}>
              <strong>To send administrative information to you.</strong>
              &nbsp;We may process your information to send you details about
              our products and services, changes to our terms and policies, and
              other similar information.
            </span>
          </li>
          <li>
            <span style={{ display: "inline" }}>
              <strong>To enable user-to-user communications.</strong>&nbsp;We
              may process your information if you choose to use any of our
              offerings that allow for communication with another user.
            </span>
          </li>
          <li>
            <span style={{ display: "inline" }}>
              <strong>
                To save or protect an individual's vital interest.
              </strong>
              &nbsp;We may process your information when necessary to save or
              protect an individual's vital interest, such as to prevent harm.
            </span>
          </li>
        </ul>
      </div>
      <br />
      <div>
        <h2 id="legalbases">
          3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
        </h2>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> We only process your personal information
            when we believe it is necessary and we have a valid legal reason
            (i.e. , legal basis) to do so under applicable law, like with your
            consent, to comply with laws, to provide you with services to enter
            into or fulfill our contractual obligations, to protect your rights,
            or to fulfill our legitimate business interests.
          </span>
        </i>
        <br />
        <br />
        <ins>
          <strong>
            <i>
              If you are located in the EU or UK, this section applies to you.
            </i>
          </strong>
        </ins>
        <p>
          The General Data Protection Regulation (GDPR) and UK GDPR require us
          to explain the valid legal bases we rely on in order to process your
          personal information. As such, we may rely on the following legal
          bases to process your personal information:
        </p>
        <ul>
          <li>
            <span style={{ display: "inline" }}>
              <strong>Consent.</strong>
              &nbsp;We may process your information if you have given us
              permission (i.e. , consent) to use your personal information for a
              specific purpose. You can withdraw your consent at any time.
              Click&nbsp;<a href="#withdrawconsent">here</a>&nbsp;to learn more.
            </span>
          </li>
          <li>
            <span style={{ display: "inline" }}>
              <strong>Performance of a Contract.</strong>
              &nbsp;We may process your personal information when we believe it
              is necessary to fulfill our contractual obligations to you,
              including providing our Services or at your request prior to
              entering into a contract with you.
            </span>
          </li>
          <li>
            <span style={{ display: "inline" }}>
              <strong>Legal Obligations.</strong>
              &nbsp;We may process your information where we believe it is
              necessary for compliance with our legal obligations, such as to
              cooperate with a law enforcement body or regulatory agency,
              exercise or defend our legal rights, or disclose your information
              as evidence in litigation in which we are involved.
            </span>
          </li>
          <li>
            <span style={{ display: "inline" }}>
              <strong>Vital Interests.</strong>
              &nbsp;We may process your information where we believe it is
              necessary to protect your vital interests or the vital interests
              of a third party, such as situations involving potential threats
              to the safety of any person.
            </span>
          </li>
        </ul>
        <ins>
          <strong>
            <i>If you are located in Canada, this section applies to you.</i>
          </strong>
        </ins>
        <p>
          <span style={{ display: "inline" }}>
            We may process your information if you have given us specific
            permission (i.e. , express consent) to use your personal information
            for a specific purpose, or in situations where your permission can
            be inferred (i.e. , implied consent). You can withdraw your consent
            at any time. Click&nbsp;<a href="#withdrawconsent">here</a>&nbsp;to
            learn more.
          </span>
        </p>
        <p>
          In some exceptional cases, we may be legally permitted under
          applicable law to process your information without your consent,
          including, for example:
        </p>
        <ul>
          <li>
            If collection is clearly in the interests of an individual and
            consent cannot be obtained in a timely way
          </li>
          <li>For investigations and fraud detection and prevention</li>
          <li>For business transactions provided certain conditions are met</li>
          <li>
            If it is contained in a witness statement and the collection is
            necessary to assess, process, or settle an insurance claim
          </li>
          <li>
            For identifying injured, ill, or deceased persons and communicating
            with next of kin
          </li>
          <li>
            If we have reasonable grounds to believe an individual has been, is,
            or may be victim of financial abuse
          </li>
          <li>
            If it is reasonable to expect collection and use with consent would
            compromise the availability or the accuracy of the information and
            the collection is reasonable for purposes related to investigating a
            breach of an agreement or a contravention of the laws of Canada or a
            province
          </li>
          <li>
            If disclosure is required to comply with a subpoena, warrant, court
            order, or rules of the court relating to the production of records
          </li>
          <li>
            If it was produced by an individual in the course of their
            employment, business, or profession and the collection is consistent
            with the purposes for which the information was produced
          </li>
          <li>
            If the collection is solely for journalistic, artistic, or literary
            purposes
          </li>
          <li>
            If the information is publicly available and is specified by the
            regulations
          </li>
        </ul>
      </div>
      <br />
      <div>
        <h2 id="whoshare">
          4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </h2>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> We may share information in specific
            situations described in this section and/or with the following third
            parties.
          </span>
        </i>
        <p>
          <span style={{ display: "inline" }}>
            <strong>
              Vendors, Consultants, and Other Third-Party Service Providers.
            </strong>
            We may share your data with third-party vendors, service providers,
            contractors, or agents ("<strong>third parties</strong>") who
            perform services for us or on our behalf and require access to such
            information to do that work. We have contracts in place with our
            third parties, which are designed to help safeguard your personal
            information. This means that they cannot do anything with your
            personal information unless we have instructed them to do it. They
            will also not share your personal information with any organization
            apart from us. They also commit to protect the data they hold on our
            behalf and to retain it for the period we instruct. The third
            parties we may share personal information with are as follows:
          </span>
        </p>
        <ul>
          <li>
            <strong>Advertising, Direct Marketing, and Lead Generation</strong>
            <br />
            <br />
            Google AdSense
          </li>
          <li>
            <strong>
              Allow Users to Connect to Their Third-Party Accounts
            </strong>
            <br />
            <br />
            Discord account, Battle.net account, Github account, Steam account,
            Youtube account and Reddit account
          </li>
          <li>
            <strong>Cloud Computing Services</strong>
            <br />
            <br />
            Amazon Web Services (AWS)
          </li>
          <li>
            <strong>Content Optimization</strong>
            <br />
            <br />
            YouTube video embed
          </li>
          <li>
            <strong>Functionality and Infrastructure Optimization</strong>
            <br />
            <br />
            Amazon Web Services and GitHub Pages
          </li>
          <li>
            <strong>Social Media Sharing and Advertising</strong>
            <br />
            <br />
            Reddit plugins
          </li>
          <li>
            <strong>Web and Mobile Analytics</strong>
            <br />
            <br />
            Google Analytics, Google Tag Manager and Google Ads
          </li>
        </ul>
        <p>
          We also may need to share your personal information in the following
          situations:
        </p>
        <ul>
          <li>
            <span style={{ display: "inline" }}>
              <strong>Business Transfers.</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </span>
          </li>
          <li>
            <span style={{ display: "inline" }}>
              <strong>Other Users.</strong> When you share personal information
              (for example, by posting comments, contributions, or other content
              to the Services) or otherwise interact with public areas of the
              Services, such personal information may be viewed by all users and
              may be publicly made available outside the Services in perpetuity.
              If you interact with other users of our Services and register for
              our Services through a social network (such as Facebook), your
              contacts on the social network will see your name, profile photo,
              and descriptions of your activity. Similarly, other users will be
              able to view descriptions of your activity, communicate with you
              within our Services, and view your profile.
            </span>
          </li>
        </ul>
      </div>
      <br />
      <div>
        <h2 id="pwebsites">5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h2>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> We are not responsible for the safety of
            any information that you share with third parties that we may link
            to or who advertise on our Services, but are not affiliated with,
            our Services.
          </span>
        </i>
        <p>
          The Services may link to third-party websites, online services, or
          mobile applications and/or contain advertisements from third parties
          that are not affiliated with us and which may link to other websites,
          services, or applications. Accordingly, we do not make any guarantee
          regarding any such third parties, and we will not be liable for any
          loss or damage caused by the use of such third-party websites,
          services, or applications. The inclusion of a link towards a
          third-party website, service, or application does not imply an
          endorsement by us. We cannot guarantee the safety and privacy of data
          you provide to any third parties. Any data collected by third parties
          is not covered by this privacy notice. We are not responsible for the
          content or privacy and security practices and policies of any third
          parties, including other websites, services, or applications that may
          be linked to or from the Services. You should review the policies of
          such third parties and contact them directly to respond to your
          questions.
        </p>
      </div>
      <br />
      <div>
        <h2 id="cookies">
          6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </h2>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> We may use cookies and other tracking
            technologies to collect and store your information.
          </span>
        </i>
        <p>
          <span style={{ display: "inline" }}>
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to access or store information. Specific
            information about how we use such technologies and how you can
            refuse certain cookies is set out in our Cookie Notice:&nbsp;
            <a
              href="https://maxijaxi.net/legal/cookies"
              rel="noreferrer"
              target="_blank"
            >
              https://maxijaxi.net/legal/cookies
            </a>
            .
          </span>
        </p>
      </div>
      <br />
      <div>
        <h2 id="sociallogins">7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> If you choose to register or log in to
            our Services using a social media account, we may have access to
            certain information about you.
          </span>
        </i>
        <p>
          Our Services offer you the ability to register and log in using your
          third-party social media account details (like your Facebook or
          Twitter logins). Where you choose to do this, we will receive certain
          profile information about you from your social media provider. The
          profile information we receive may vary depending on the social media
          provider concerned, but will often include your name, email address,
          friends list, and profile picture, as well as other information you
          choose to make public on such a social media platform.
        </p>
        <p>
          We will use the information we receive only for the purposes that are
          described in this privacy notice or that are otherwise made clear to
          you on the relevant Services. Please note that we do not control, and
          are not responsible for, other uses of your personal information by
          your third-party social media provider. We recommend that you review
          their privacy notice to understand how they collect, use, and share
          your personal information, and how you can set your privacy
          preferences on their sites and apps.
        </p>
      </div>
      <br />
      <div>
        <h2 id="inforetain">8. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> We keep your information for as long as
            necessary to fulfill the purposes outlined in this privacy notice
            unless otherwise required by law.
          </span>
        </i>
        <p>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than the
          period of time in which users have an account with us.
        </p>
        <p>
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>
      </div>
      <br />
      <div>
        <h2 id="infosafe">9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> We aim to protect your personal
            information through a system of organizational and technical
            security measures.
          </span>
        </i>
        <p>
          We have implemented appropriate and reasonable technical and
          organizational security measures designed to protect the security of
          any personal information we process. However, despite our safeguards
          and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorized third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Although we will do our best to protect your
          personal information, transmission of personal information to and from
          our Services is at your own risk. You should only access the Services
          within a secure environment.
        </p>
      </div>
      <br />
      <div>
        <h2 id="privacyrights">10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> In some regions, such as the European
            Economic Area (EEA), United Kingdom (UK), and Canada , you have
            rights that allow you greater access to and control over your
            personal information. You may review, change, or terminate your
            account at any time.
          </span>
        </i>
        <p>
          <span style={{ display: "inline" }}>
            In some regions (like the EEA, UK, and Canada ), you have certain
            rights under applicable data protection laws. These may include the
            right (i) to request access and obtain a copy of your personal
            information, (ii) to request rectification or erasure; (iii) to
            restrict the processing of your personal information; and (iv) if
            applicable, to data portability. In certain circumstances, you may
            also have the right to object to the processing of your personal
            information. You can make such a request by contacting us by using
            the contact details provided in the section "
            <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>"
            below.
          </span>
        </p>
        <p>
          We will consider and act upon any request in accordance with
          applicable data protection laws.
        </p>
        <p>
          <span style={{ display: "inline" }}>
            If you are located in the EEA or UK and you believe we are
            unlawfully processing your personal information, you also have the
            right to complain to your local data protection supervisory
            authority. You can find their contact details here:&nbsp;
            <a
              href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
              rel="noreferrer"
              target="_blank"
            >
              https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
            </a>
            .
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            If you are located in Switzerland, the contact details for the data
            protection authorities are available here:&nbsp;
            <a
              href="https://www.edoeb.admin.ch/edoeb/en/home.html"
              rel="noreferrer"
              target="_blank"
            >
              https://www.edoeb.admin.ch/edoeb/en/home.html
            </a>
            .
          </span>
        </p>
        <p>
          <span style={{ display: "inline" }}>
            <ins>
              <strong>Withdrawing your consent:</strong>
            </ins>
            &nbsp;If we are relying on your consent to process your personal
            information, which may be express and/or implied consent depending
            on the applicable law, you have the right to withdraw your consent
            at any time. You can withdraw your consent at any time by contacting
            us by using the contact details provided in the section "
            <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>"
            below or updating your preferences.
          </span>
        </p>
        <p>
          However, please note that this will not affect the lawfulness of the
          processing before its withdrawal nor, when applicable law allows, will
          it affect the processing of your personal information conducted in
          reliance on lawful processing grounds other than consent.
        </p>
        <p>
          <span style={{ display: "inline" }}>
            <ins>
              <strong>
                Opting out of marketing and promotional communications:
              </strong>
            </ins>
            &nbsp;You can unsubscribe from our marketing and promotional
            communications at any time by clicking on the unsubscribe link in
            the emails that we send, or by contacting us using the details
            provided in the section "
            <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>"
            below. You will then be removed from the marketing lists. However,
            we may still communicate with you — for example, to send you
            service-related messages that are necessary for the administration
            and use of your account, to respond to service requests, or for
            other non-marketing purposes.
          </span>
        </p>
        <h3>Account Information</h3>
        <p>
          If you would at any time like to review or change the information in
          your account or terminate your account, you can:
        </p>
        <ul>
          <li>Log in to your account settings and update your user account.</li>
          <li>Contact us using the contact information provided.</li>
        </ul>
        <p>
          Upon your request to terminate your account, we will deactivate or
          delete your account and information from our active databases.
          However, we may retain some information in our files to prevent fraud,
          troubleshoot problems, assist with any investigations, enforce our
          legal terms and/or comply with applicable legal requirements.
        </p>
        <p>
          <span style={{ display: "inline" }}>
            <ins>
              <strong>Cookies and similar technologies:</strong>
            </ins>
            &nbsp;Most Web browsers are set to accept cookies by default. If you
            prefer, you can usually choose to set your browser to remove cookies
            and to reject cookies. If you choose to remove cookies or reject
            cookies, this could affect certain features or services of our
            Services. To opt out of interest-based advertising by advertisers on
            our Services visit&nbsp;
            <a
              href="http://www.aboutads.info/choices/"
              rel="noreferrer"
              target="_blank"
            >
              http://www.aboutads.info/choices/
            </a>
            . For further information, please see our Cookie Notice:&nbsp;
            <a
              href="https://maxijaxi.net/legal/cookies"
              rel="noreferrer"
              target="_blank"
            >
              https://maxijaxi.net/legal/cookies
            </a>
            .
          </span>
        </p>
        <p>
          If you have questions or comments about your privacy rights, you may
          email us at support@maxijaxi.net.
        </p>
      </div>
      <br />
      <div>
        <h2 id="DNT">11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track ( "DNT" ) feature or setting you
          can activate to signal your privacy preference not to have data about
          your online browsing activities monitored and collected. At this stage
          no uniform technology standard for recognizing and implementing DNT
          signals has been finalized . As such, we do not currently respond to
          DNT browser signals or any other mechanism that automatically
          communicates your choice not to be tracked online. If a standard for
          online tracking is adopted that we must follow in the future, we will
          inform you about that practice in a revised version of this privacy
          notice.
        </p>
      </div>
      <br />
      <div>
        <h2 id="caresidents">
          12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
        </h2>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> Yes, if you are a resident of California,
            you are granted specific rights regarding access to your personal
            information.
          </span>
        </i>
        <p>
          California Civil Code Section 1798.83, also known as the "Shine The
          Light" law, permits our users who are California residents to request
          and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third
          parties for direct marketing purposes and the names and addresses of
          all third parties with which we shared personal information in the
          immediately preceding calendar year. If you are a California resident
          and would like to make such a request, please submit your request in
          writing to us using the contact information provided below.
        </p>
        <p>
          If you are under 18 years of age, reside in California, and have a
          registered account with Services, you have the right to request
          removal of unwanted data that you publicly post on the Services. To
          request removal of such data, please contact us using the contact
          information provided below and include the email address associated
          with your account and a statement that you reside in California. We
          will make sure the data is not publicly displayed on the Services, but
          please be aware that the data may not be completely or comprehensively
          removed from all our systems (e.g. , backups, etc.).
        </p>
      </div>
      <br />
      <div>
        <h2 id="policyupdates">13. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <i>
          <span style={{ display: "inline" }}>
            <strong>In Short:</strong> Yes, we will update this notice as
            necessary to stay compliant with relevant laws.
          </span>
        </i>
        <p>
          We may update this privacy notice from time to time. The updated
          version will be indicated by an updated "Revised" date and the updated
          version will be effective as soon as it is accessible. If we make
          material changes to this privacy notice, we may notify you either by
          prominently posting a notice of such changes or by directly sending
          you a notification. We encourage you to review this privacy notice
          frequently to be informed of how we are protecting your information.
        </p>
      </div>
      <br />
      <div>
        <h2 id="contact">14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>
          If you have questions or comments about this notice, you may email us
          at support@maxijaxi.net or by&nbsp;<del>post</del>&nbsp;to:
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
      </div>
      <br />
      <div>
        <h2 id="request">
          15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
          YOU?
        </h2>
        <p>
          <span style={{ display: "inline" }}>
            You have the right to request access to the personal information we
            collect from you, change that information, or delete it. To request
            to review, update, or delete your personal information, please
            visit:&nbsp;
            <a
              href="https://maxijaxi.net/legal/erase"
              rel="noreferrer"
              target="_blank"
            >
              https://maxijaxi.net/legal/erase
            </a>
            .
          </span>
        </p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Privacy;
