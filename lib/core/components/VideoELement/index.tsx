import { useEffect, useRef, useState } from "react";
import { store } from "../../store";
import styles from "./index.module.scss";
import useListener from "../../hooks/useListener";
const VideoElement = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    activeSegment,
    activeVideo,
    setTotalDuration,
    setVideoElem,
    setWaitingMetaData,
    videoElem,
  } = store((store) => store);
  const { listenToLoadedFirstData } = useListener();
  const listenToLoadedMetaData = (): void => {
    if (!videoRef.current) return;
    setVideoElem(videoRef.current);
    setTotalDuration(Math.round(videoRef.current.duration ?? 0));
    setWaitingMetaData(false);
    videoRef.current.addEventListener("loadeddata", listenToLoadedFirstData);
  };

  useEffect(() => {
    videoRef.current?.addEventListener(
      "loadedmetadata",
      listenToLoadedMetaData
    );
    return () => {
      videoElem?.removeEventListener("loadedmetadata", listenToLoadedMetaData);
      videoElem?.removeEventListener("loadeddata", listenToLoadedFirstData);
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
