import React, { useState } from "react";
import FeedbackForm from "../../components/Feedback/FeedbackForm";
import FeedbackList from "../../components/Feedback/FeedbackList";

import "../../scss/mxMe/Feedback.scss";

const Feedback = () => {
  const [newFeedback, setNewFeedback] = useState(null);

  const handleFeedbackSubmitted = (feedback) => {
    setNewFeedback(feedback);
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback">
        <h2>Feedback</h2>
        <FeedbackForm onFeedbackSubmitted={handleFeedbackSubmitted} />
        <div className="feedback-list">
          <FeedbackList onNewFeedback={newFeedback} />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
