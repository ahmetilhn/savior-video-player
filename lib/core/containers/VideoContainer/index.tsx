import { useRef } from "react";
import VideoElement from "../../components/VideoELement";
import styles from "./index.module.scss";
import { store } from "../../store";
import Loader from "../../components/Loader";
import Caption from "../../components/Caption";
import NextEpisodeButton from "../../components/NextEpisodeButton";
const VideoContainer = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const {
    isControlPanelVisible,
    isVideoPlayable,
    activeCaption,
    totalDuration,
    currentTime,
    seasons,
  } = store((store) => store);
  return (
    <div ref={videoContainerRef} className={styles["video-container"]}>
      {!isVideoPlayable && !isControlPanelVisible && <Loader />}
      <VideoElement />
      {activeCaption && <Caption />}
      {totalDuration - currentTime < 180 &&
        isVideoPlayable &&
        seasons?.length && <NextEpisodeButton />}
    </div>
  );
};

export default VideoContainer;
