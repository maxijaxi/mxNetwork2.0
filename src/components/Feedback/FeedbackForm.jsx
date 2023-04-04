import React, { useState } from "react";
import axios from "axios";
import { containsBannedWords } from "../../javascripts/utils";

import "../../scss/mxMe/Feedback.scss";

const FeedbackForm = ({ onFeedbackSubmitted }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (containsBannedWords(name) || containsBannedWords(comment)) {
      setStatusMessage(
        "Your feedback contains banned words. Please remove them."
      );
      return;
    }

    const feedback = { name, comment };

    try {
      await axios.post(
        "https://server.maxijaxi.net/submit_feedback.php",
        feedback
      );
      setName("");
      setComment("");
      setStatusMessage("Feedback submitted successfully.");
      if (onFeedbackSubmitted) {
        onFeedbackSubmitted(feedback);
      }
    } catch (error) {
      setStatusMessage("Unable to submit feedback.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="feedback-submit">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p style={{ fontSize: "0.8rem"}}>
          Disclaimer: Please be respectful and considerate when leaving
          feedback. Do not post inappropriate, offensive, or harmful content. By
          submitting feedback, you agree to these terms.
        </p>
      </div>
      <textarea
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="feedback-submit">
        <button type="submit">Submit Feedback</button>
        <p className="status-message">{statusMessage}</p>
      </div>
    </form>
  );
};

export default FeedbackForm;
