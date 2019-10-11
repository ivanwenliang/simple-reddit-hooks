import React from "react";

const Voting = ({ post, onUpvote, onDownvote }) => {
  return (
    <div className="flex flex-col items-center">
      <i className="fas fa-arrow-up" onClick={() => onUpvote(post.id)} />
      <div>{post.score}</div>
      <i className="fas fa-arrow-down" onClick={() => onDownvote(post.id)} />
    </div>
  );
};

export default Voting;
