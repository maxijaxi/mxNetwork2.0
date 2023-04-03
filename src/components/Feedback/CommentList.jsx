import React from "react";

function Comment({ comment }) {
  return (
    <div>
      <h4>{comment.name}</h4>
      <p>{comment.comment}</p>
    </div>
  );
}

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
