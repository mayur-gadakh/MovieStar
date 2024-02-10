import React from "react";
import ReactPlayer from "react-player/youtube";

import "./videoPopUp.scss";

const VideoPopUp = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopUp = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopUp}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopUp}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          // playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopUp;
