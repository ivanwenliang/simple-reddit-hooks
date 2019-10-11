import React from "react";
import Voting from "./Voting";
import Thumbnail from "./Thumbnail";
import Time from "./Time";

const RedditPost = ({ post, onUpvote, onDownvote }) => {
  return (
    <div className="flex p-3">
      <Voting post={post} onUpvote={onUpvote} onDownvote={onDownvote} />
      <Thumbnail post={post} />
      <div className="border-b border-gray-300 flex-1 pb-5">
        <h3 className="text-lg text-red-600 font-medium ">
          <a href={post.url}>{post.title}</a>
        </h3>
        <div className="text-gray-500">
          Submitted <Time time={post.created} isUnixTime={true} />
        </div>
        <a
          className="text-red-600"
          href={`https://www.reddit.com${post.permalink}`}
        >
          {post.num_comments} comments
        </a>
        <span className="ml-2 text-gray-500 text-sm">share</span>
        <span className="ml-2 text-gray-500 text-sm">save</span>
        <span className="ml-2 text-gray-500 text-sm">hide</span>
      </div>
    </div>
  );
};

export default RedditPost;
