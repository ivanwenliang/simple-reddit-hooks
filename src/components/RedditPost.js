import React from "react";
import Voting from "./Voting";

const RedditPost = ({ post, onUpvote, onDownvote }) => {
  return (
    <div className="flex">
      <Voting post={post} onUpvote={onUpvote} onDownvote={onDownvote} />
      <a href={post.url} className="ml-5 border">
        {post.title}
      </a>
    </div>
  );
};

export default RedditPost;
