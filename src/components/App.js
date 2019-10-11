import React from "react";
import RedditListing from "./RedditListing";
import { posts } from "../static-data";

function App() {
  return (
    <div>
      <h1>Reddit</h1>
      <RedditListing posts={posts.data.children} />
    </div>
  );
}

export default App;
