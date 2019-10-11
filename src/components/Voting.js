import React, { useState } from "react";

const Voting = ({ votes, onAddVote, onRemoveVote }) => {
  // const [upClicked, setUpClicked] = useState(false);
  // const [downClicked, setDownClicked] = useState(false);

  return (
    <div>
      <button onClick={onAddVote}>Upvote</button>
      Votes: {votes}
      <button onClick={onRemoveVote}>Downvote</button>
    </div>
  );
};

export default Voting;
