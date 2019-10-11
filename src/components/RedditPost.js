import React from "react";
import Voting from "./Voting";
import Thumbnail from "./Thumbnail";

const RedditPost = ({ post, onUpvote, onDownvote }) => {
  return (
    <div className="flex p-3">
      <Voting post={post} onUpvote={onUpvote} onDownvote={onDownvote} />
      <Thumbnail post={post} />
      <a href={post.url} className="ml-5 border">
        {post.title}
      </a>
    </div>
  );
};

export default RedditPost;
