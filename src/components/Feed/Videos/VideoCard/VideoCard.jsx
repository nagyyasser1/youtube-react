/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <Link to={`/video/${video.id.videoId}`}>
        <img
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
        />
        <h3 className="video-title">{video.snippet.title}</h3>
      </Link>
      <Link to={`/channel/${video.snippet.channelId}`}>
        <h5 className="channel-name">{video.snippet.channelTitle}</h5>
      </Link>
    </div>
  );
};

export default VideoCard;
