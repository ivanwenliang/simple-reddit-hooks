import React from "react";

const Voting = ({ post }) => {
  return <div>Votes: {post.data.score}</div>;
};

export default Voting;
