import React from "react";

const Voting = ({ post, onUpvote, onDownvote }) => {
  return (
    <div className="w-3 flex flex-col items-center text-gray-500">
      <i
        className="fas fa-arrow-up hover:text-orange-500"
        onClick={() => onUpvote(post.id)}
      />
      <div>{post.score}</div>
      <i
        className="fas fa-arrow-down hover:text-orange-500"
        onClick={() => onDownvote(post.id)}
      />
    </div>
  );
};

export default Voting;
