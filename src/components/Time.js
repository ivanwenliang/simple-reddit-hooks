import React from "react";
import moment from "moment";

const computeTimeString = (time, isUnixTime) => {
  if (isUnixTime) {
    return moment.unix(time).fromNow();
  } else {
    return moment(time).fromNow();
  }
};

const Time = ({ time, isUnixTime }) => {
  return <span>{computeTimeString(time, isUnixTime)}</span>;
};

export default Time;
