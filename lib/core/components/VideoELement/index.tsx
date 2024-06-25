import { useEffect, useRef, useState } from "react";
import { store } from "../../store";
import styles from "./index.module.scss";
const VideoElement = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    activeSegment,
    activeVideo,
    setTotalDuration,
    setVideoElem,
    setWaitingMetaData,
  } = store((store) => store);
  const listenToLoadedMetaData = (): void => {
    if (!videoRef.current) return;
    setVideoElem(videoRef.current);
    setTotalDuration(Math.round(videoRef.current.duration ?? 0));
    setWaitingMetaData(false);
  };

  useEffect(() => {
    const currVideRef = videoRef.current;
    currVideRef?.addEventListener("loadedmetadata", listenToLoadedMetaData);
    return () => {
      currVideRef?.removeEventListener(
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
      poster={activeVideo?.poster}
    >
      <source src={activeSegment?.url} />
    </video>
  );
};
export default VideoElement;
