import React from "react";
import RedditPost from "./RedditPost";

const RedditListing = ({ posts }) => {
  return (
    <div className="py-1 px-2 mx-3 bg-gray-100 rounded">
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
