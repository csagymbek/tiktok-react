import React, { useState } from "react";
import "../styles/VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

export default function VideoSidebar({ likes, shares, messages }) {
  const [like, setLike] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {like ? (
          <FavoriteIcon onClick={(e) => setLike(false)} fontSize="large" />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setLike(true)} fontSize="large" />
        )}
        <p>{like ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}
