import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../scss/mxMe/Feedback.scss";

const FeedbackList = ({ onNewFeedback }) => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  useEffect(() => {
    if (onNewFeedback) {
      setFeedbackList((prevFeedbackList) => [
        onNewFeedback,
        ...prevFeedbackList,
      ]);
    }
  }, [onNewFeedback]);

  const fetchFeedback = async () => {
    try {
      const response = await axios.get(
        "https://server.maxijaxi.net/fetch_feedback.php"
      );
      setFeedbackList(response.data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  return (
    <div>
      {feedbackList.map((feedback) => (
        <div key={feedback.id} className="feedback-comment">
          <div className="feedback-content">
            <h3>{feedback.name}</h3>
            <p>{feedback.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
