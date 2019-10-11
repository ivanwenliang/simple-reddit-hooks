import React from "react";

const Thumbnail = ({ post }) => {
  if (post.is_self) {
    return (
      <span
        style={{
          background: `url(
            "//b.thumbs.redditmedia.com/XWINAyK1fHqmkcRwoZGwsASV7l6fl_cRG_5u_o9Dwqk.png"
          )`
        }}
      />
    );
  } else if (post.thumbnail === "default") {
    return (
      <span
        style={{
          background: `url("//b.thumbs.redditmedia.com/XWINAyK1fHqmkcRwoZGwsASV7l6fl_cRG_5u_o9Dwqk.png") -143px -80px`
        }}
      />
    );
  } else {
    return (
      <img
        src={post.thumbnail}
        alt="thumbnail"
        className="w-16 h-16 my-0 mx-2"
      />
    );
  }
};

export default Thumbnail;
