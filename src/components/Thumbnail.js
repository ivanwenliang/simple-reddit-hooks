import React from "react";

const Thumbnail = ({ post }) => {
  return (
    <img src={post.thumbnail} alt="thumbnail" className="w-16 h-16 my-0 mx-3" />
  );
};

export default Thumbnail;
