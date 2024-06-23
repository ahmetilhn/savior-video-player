import VideoElement from "../../components/VideoELement";
import styles from "./index.module.scss";
const VideoContainer = () => {
  return (
    <div className={styles["video-container"]}>
      <VideoElement />
    </div>
  );
};

export default VideoContainer;
