import { useEffect, useRef } from "react";
import { store } from "../../store";
import styles from "./index.module.scss";
const VideoElement = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    activeSegment,
    setTotalDuration,
    setVideoReady,
    setVideoElem,
    setWaitingMetaData,
  } = store((store) => store);
  const listenToLoadedMetaData = (): void => {
    if (!videoRef.current) return;
    setVideoElem(videoRef.current);
    setTotalDuration(Math.round(videoRef.current.duration ?? 0));
    setVideoReady(true);
    setWaitingMetaData(false);
  };

  useEffect(() => {
    videoRef.current?.addEventListener(
      "loadedmetadata",
      listenToLoadedMetaData
    );
    return () => {
      videoRef.current?.removeEventListener(
        "loadedmetadata",
        listenToLoadedMetaData
      );
    };
  }, [videoRef.current]);

  return (
    <video
      ref={videoRef}
      id="savior_video_element"
      className={styles.video}
      controls={false}
    >
      <source src={activeSegment?.url} />
    </video>
  );
};
export default VideoElement;
