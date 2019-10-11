import React from "react";

const Voting = ({ post, onUpvote, onDownvote }) => {
  return (
    <div className="flex flex-col items-center">
      <button className="border rounded" onClick={() => onUpvote(post.id)}>
        Upvote
      </button>
      {post.score}
      <button className="border rounded" onClick={() => onDownvote(post.id)}>
        Downvote
      </button>
    </div>
  );
};

export default Voting;
