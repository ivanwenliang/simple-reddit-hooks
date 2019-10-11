import React from "react";
import RedditPost from "./RedditPost";

const RedditListing = ({ posts, onUpvote, onDownvote }) => {
  return (
    <ul className="py-1 px-2 mx-3 bg-gray-100 rounded">
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
