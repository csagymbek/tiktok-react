import React, { useEffect, useState } from "react";
import "../styles/App.css";
import VideoCard from "./VideoCard";
import { db } from "../configs/firebase";

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <VideoCard
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}
