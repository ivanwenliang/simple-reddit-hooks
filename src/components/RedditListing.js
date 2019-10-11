import React from "react";
import RedditPost from "./RedditPost";

const RedditListing = ({ posts, onUpvote, onDownvote }) => {
  return (
    <ul className="max-w-4xl p-3 mx-auto bg-gray-100 rounded shadow-md">
      {posts
        .sort((p1, p2) => p2.score - p1.score)
        .map(post => {
          return (
            <li key={post.id}>
              <RedditPost
                post={post}
                onUpvote={onUpvote}
                onDownvote={onDownvote}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default RedditListing;
