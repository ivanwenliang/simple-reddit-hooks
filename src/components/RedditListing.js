import React from "react";
import RedditPost from "./RedditPost";

const RedditListing = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map(post => {
          return (
            <li>
              <RedditPost post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RedditListing;
