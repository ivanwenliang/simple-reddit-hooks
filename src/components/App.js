import React from "react";
import RedditListing from "./RedditListing";
import { posts } from "../static-data";

function App() {
  return (
    <div className="w-full h-screen bg-gray-300">
      <h1 className="font-semibold text-5xl">Reddit</h1>
      <RedditListing posts={posts.data.children} />
    </div>
  );
}

export default App;
