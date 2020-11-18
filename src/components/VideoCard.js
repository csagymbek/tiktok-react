import React, { useRef, useState } from "react";
import "../styles/VideoCard.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

export default function VideoCard({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="videoCard">
      <video src={url} loop ref={videoRef} onClick={onVideoPress}></video>
      <VideoFooter channel={channel} song={song} description={description} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}
