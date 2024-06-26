import { useRef } from "react";
import VideoElement from "../../components/VideoELement";
import styles from "./index.module.scss";
import { store } from "../../store";
import Loader from "../../components/Loader";
const VideoContainer = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { isControlPanelVisible, isVideoPlayable } = store((store) => store);
  return (
    <div ref={videoContainerRef} className={styles["video-container"]}>
      {!isVideoPlayable && !isControlPanelVisible && <Loader />}
      <VideoElement />
    </div>
  );
};

export default VideoContainer;
