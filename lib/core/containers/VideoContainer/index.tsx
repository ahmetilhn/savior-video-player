import { useEffect, useRef } from "react";
import VideoElement from "../../components/VideoELement";
import styles from "./index.module.scss";
import { store } from "../../store";
import Loader from "../../components/Loader";
const VideoContainer = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const {
    setControlPanelVisible,
    isControlPanelVisible,
    isWaitingMetaData,
    isVideoPlayable,
  } = store((store) => store);
  const listenToMouseEnter = () => {
    setControlPanelVisible(true);
  };

  useEffect(() => {
    videoContainerRef.current?.addEventListener(
      "mouseenter",
      listenToMouseEnter
    );
    return () => {
      videoContainerRef.current?.removeEventListener(
        "mouseenter",
        listenToMouseEnter
      );
    };
  }, []);
  return (
    <div ref={videoContainerRef} className={styles["video-container"]}>
      {!isVideoPlayable && !isControlPanelVisible && <Loader />}
      <VideoElement />
    </div>
  );
};

export default VideoContainer;
