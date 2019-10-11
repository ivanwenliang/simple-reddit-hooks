import React, { useState, useEffect } from "react";
import axios from "axios";
import RedditListing from "./RedditListing";

function App() {
  const [posts, setPosts] = useState({});
  useEffect(async () => {
    const result = await axios.get(`https://www.reddit.com/r/reactjs.json`);
    processPosts(result);
  }, []);

  const processPosts = posts => {
    let postsHash = posts.reduce((hash, post) => {
      hash[post.id] = post.data;
      return hash;
    }, {});

    setPosts(postsHash);
  };

  formattedPosts = Object.keys(posts).map(id => posts[id]);

  return (
    <div className="w-full h-screen bg-gray-300">
      <h1 className="font-semibold text-5xl">Reddit</h1>
      <RedditListing posts={formattedPosts} />
    </div>
  );
}

export default App;
