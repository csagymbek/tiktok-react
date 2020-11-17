import React, { useRef, useState } from "react";
import "../styles/VideoCard.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

export default function VideoCard() {
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
      <video
        src="https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c001/6f129165e1e241a5a765a6a60ae1a1af/?a=1988&br=1514&bt=757&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1605668238&l=2020111720570801018806121905042D80&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=ajdoZGxscWVneDMzZzczM0ApNTZmNmkzNDtnNzwzN2Y4ZGdfZXNoc2ZrZ21fLS1jMTZzcy9gMDFfMTFiYDRgXzBgM146Yw%3D%3D&signature=e02b8cc4e0b5c706672530f4f91b0449&tk=tt_webid_v2&vl=&vr="
        loop
        ref={videoRef}
        onClick={onVideoPress}
      ></video>
      <VideoFooter
        channel="bellapoarch"
        song="Little Dark Age by MGMT - 𝒮𝓉𝒶𝓇𝒸𝑜𝓊𝓇𝓉 ℳ𝒶𝓁𝓁"
        description=" this was harder than I thought😅😇"
      />
      <VideoSidebar />
    </div>
  );
}
