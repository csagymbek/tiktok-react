import React from "react";
import "../styles/App.css";
import VideoCard from "./VideoCard";

export default function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <VideoCard />
      </div>
    </div>
  );
}
