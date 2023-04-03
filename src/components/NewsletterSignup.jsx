import React, { useState } from "react";
import { ses } from "../javascripts/awsConfig.js";

import "../scss/newsletter.scss";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email: ${email}`);

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("email", email);

    fetch("https://server.maxijaxi.net/db_email_upload.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        console.log("Response body:", data);

        if (data.success) {
          const verificationLink = `https://server.maxijaxi.net/verify_email.php?email=${email}&code=${data.verificationCode}`;
          const unsubscribeLink = `https://server.maxijaxi.net/unsubscribe_email.php?email=${email}&code=${data.verificationCode}`;
          const duplicate = data.checkDupli;

          const emailBody = `
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Newsletter Verification</title>
</head>

<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td style="background-color: #f9f9f9;">
                <table role="presentation" align="center" width="600" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td style="padding: 20px 0; text-align: center;">
                            <img src="https://server.maxijaxi.net/images/mxnLogo.png" alt=""
                                style="font-family: Arial, Helvetica, sans-serif;height: clamp(3rem, 20vw, 12rem);">
                            <h1 style="font-family: Arial, Helvetica, sans-serif;font-size: clamp(2rem, 10vw, 5rem);">
                                mxNetwork</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px;">
                            <h2 style="font-family: Arial, Helvetica, sans-serif;font-size: clamp(1.5rem, 3vh, 4rem);">
                                Hey there!</h2>
                            <p style="font-family: Arial, Helvetica, sans-serif;font-size: clamp(1.2rem, 2vh, 3rem);">
                                Welcome to mxNetwork!</p>
                            <p style="font-family: Arial, Helvetica, sans-serif;font-size: clamp(1.2rem, 2vh, 3rem);">
                                Please verify your email address by clicking <strong
                                    style="font-family: Arial, Helvetica, sans-serif;">Verify Email</strong> below.</p>
                            <a href="${verificationLink}" style="font-family: Arial, Helvetica, sans-serif;">
                                <button
                                    style="font-family: Arial, Helvetica, sans-serif;padding: clamp(0.5rem, 1%, 2rem);font-size: clamp(1.2rem, 2vh, 3rem);color: #fff;border: none;border-radius: 10px;background-color: #8e4dea;cursor: pointer;transition: background-color 0.2s ease-in-out;margin: 1rem;">Verify
                                    Email</button>
                            </a>
                            <p style="font-family: Arial, Helvetica, sans-serif;font-size: clamp(1.2rem, 2vh, 3rem);">
                                This will confirm your identity
                                and grant you access to the newsletter.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px; background-color: #f2f2f2; text-align: center;">
                            <p
                                style="font-family: Arial, Helvetica, sans-serif;color: gray;font-size: clamp(0.8rem, 2vh, 1.8rem);">
                                If you ever want to stop receiving our regular
                                updates and newsletters, you can&nbsp;<a href="${unsubscribeLink}"
                                    style="font-family: Arial, Helvetica, sans-serif;color: darkgray;">unsubscribe</a>&nbsp;at
                                any
                                time.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html> 
          `;
          const params = {
            Destination: {
              ToAddresses: [email],
            },
            Message: {
              Body: {
                Html: { Data: emailBody },
              },
              Subject: { Data: "Newsletter Signup Confirmation" },
            },
            Source: "news@maxijaxi.net",
          };

          ses.sendEmail(params, (err, data) => {
            if (err) {
              console.error(err);
              if (duplicate) {
                setMessage("This email has already been registered.");
              }
              setMessage("Error sending confirmation email.");
            } else {
              console.log(data);
              setMessage(
                "Thank you for signing up! Check email to verify address."
              );
            }
          });
        } else {
          setMessage("Error adding email. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setMessage("Error adding email. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="newsletter-signup">
      <h3 id="newsletter">Newsletter Sign-up</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email-input">Enter your email:</label>
        <div className="input-row">
          <input
            type="text"
            id="email-input"
            placeholder="you@example.com"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Sign up"}
          </button>
          <div className="response">{message && <p>{message}</p>}</div>
        </div>
      </form>
    </div>
  );
}

export default NewsletterSignup;
