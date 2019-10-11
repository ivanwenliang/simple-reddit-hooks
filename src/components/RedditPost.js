import React, { useState } from "react";
import Voting from "./Voting";

const RedditPost = ({ post }) => {
  const [votes, setVotes] = useState(0);

  const addVote = () => {
    setVotes(votes + 1);
  };

  const removeVote = () => {
    setVotes(votes - 1);
  };

  return (
    <div className="flex">
      <Voting votes={votes} onAddVote={addVote} onRemoveVote={removeVote} />
      <a href={post.data.url} className="ml-5 border">
        {post.data.title}
      </a>
    </div>
  );
};

export default RedditPost;
