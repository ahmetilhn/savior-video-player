import { useEffect, useRef } from "react";
import { store } from "../../store";
import styles from "./index.module.scss";
import useVideo from "../../hooks/useVideo";
import useController from "../../hooks/useController";
import useListener from "../../hooks/useListener";
const VideoElement = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    setTotalDuration,
    setVideoElem,
    setWaitingMetaData,
    videoPosterBlobUrl,
    videoBlobUrl,
    activeVideo,
    setVideoPosterBlobUrl,
    setVideoPlayable,
    isVideoPlayable,
    wasVideoEverPlayed,
  } = store((store) => store);
  const { createVideoPosterBlobUrl } = useVideo();
  const { play } = useController();
  const { startListeners } = useListener();
  const handleLoadedMetaData = (): void => {
    setVideoElem(videoRef.current as HTMLVideoElement);
    setTotalDuration(Math.round(videoRef.current?.duration ?? 0));
    setWaitingMetaData(false);
  };

  const handleLoadedFirstData = () => {
    setVideoPlayable(true);
  };

  const preparePoster = async (): Promise<void> => {
    if (activeVideo?.poster)
      setVideoPosterBlobUrl(await createVideoPosterBlobUrl());
  };

  useEffect(() => {
    videoRef.current?.addEventListener("loadedmetadata", handleLoadedMetaData);
    videoRef.current?.addEventListener("loadeddata", handleLoadedFirstData);
    return () => {
      videoRef.current?.removeEventListener(
        "loadedmetadata",
        handleLoadedMetaData
      );
      videoRef.current?.removeEventListener(
        "loadeddata",
        handleLoadedFirstData
      );
    };
  }, [videoRef.current?.src]);

  useEffect(() => {
    if (isVideoPlayable && !wasVideoEverPlayed) {
      play();
      startListeners();
    }
  }, [isVideoPlayable]);

  useEffect(() => {
    preparePoster();
  }, [activeVideo?.poster]);
  return (
    <video
      id="savior_video_element"
      ref={videoRef}
      src={videoBlobUrl}
      className={styles.video}
      controls={false}
      poster={videoPosterBlobUrl}
    />
  );
};
export default VideoElement;
