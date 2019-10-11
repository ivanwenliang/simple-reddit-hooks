import React, { useState, useEffect } from "react";
import axios from "axios";
import RedditListing from "./RedditListing";

function App() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://www.reddit.com/r/reactjs.json`);
      processPosts(result.data.data.children);
    };
    fetchData();
  }, []);

  const processPosts = posts => {
    let postsHash = posts.reduce((hash, post) => {
      hash[post.data.id] = post.data;
      return hash;
    }, {});
    setPosts(postsHash);
  };

  const handleUpvote = postId => {
    setPosts({
      ...posts,
      [postId]: {
        ...posts[postId],
        score: posts[postId].score + 1
      }
    });
  };

  const handleDownvote = postId => {
    setPosts({
      ...posts,
      [postId]: {
        ...posts[postId],
        score: posts[postId].score - 1
      }
    });
  };

  let formattedPosts = Object.keys(posts).map(id => posts[id]);

  return (
    <div>
      <h1 className="font-semibold text-5xl text-center">Simple Reddit</h1>
      <RedditListing
        posts={formattedPosts}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
    </div>
  );
}

export default App;
