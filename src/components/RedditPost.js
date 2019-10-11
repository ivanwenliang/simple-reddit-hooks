import React, { useState } from "react";
import Voting from "./Voting";

const RedditPost = ({ post }) => {
  const [votes, setVotes] = useState(0);

  return (
    <div>
      <Voting post={post} />
      {post.data.title}
    </div>
  );
};

export default RedditPost;
