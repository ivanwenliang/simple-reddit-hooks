import React, { useState } from "react";

const Voting = ({ votes, onAddVote, onRemoveVote }) => {
  // const [upClicked, setUpClicked] = useState(false);
  // const [downClicked, setDownClicked] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button className="border rounded" onClick={onAddVote}>
        Upvote
      </button>
      Votes: {votes}
      <button className="border rounded" onClick={onRemoveVote}>
        Downvote
      </button>
    </div>
  );
};

export default Voting;
