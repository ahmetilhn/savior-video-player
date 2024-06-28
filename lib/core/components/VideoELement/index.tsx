import { useEffect, useRef, useState } from "react";
import { store } from "../../store";
import styles from "./index.module.scss";
import useListener from "../../hooks/useListener";
import useVideo from "../../hooks/useVideo";
import useCaption from "../../hooks/useCaption";
const VideoElement = () => {
  const [videoBlobUrl, setVideoBlobUrl] = useState<string | undefined>(
    undefined
  );
  const [posterBlobUrl, setPosterBlobUrl] = useState<string | undefined>(
    undefined
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    activeSegment,
    activeVideo,
    setTotalDuration,
    setVideoElem,
    setWaitingMetaData,
    videoElem,
    activeCaption,
  } = store((store) => store);
  const { listenToLoadedFirstData } = useListener();
  const { createVideoBlobUrl, createPosterBlobUrl } = useVideo();
  const { initCaption } = useCaption();
  const listenToLoadedMetaData = (): void => {
    if (!videoRef.current) return;
    setVideoElem(videoRef.current);
    setTotalDuration(Math.round(videoRef.current.duration ?? 0));
    setWaitingMetaData(false);
    videoRef.current.addEventListener("loadeddata", listenToLoadedFirstData);
  };

  const init = async (): Promise<void> => {
    if (activeVideo?.poster) {
      setPosterBlobUrl(await createPosterBlobUrl());
    }
    if (!activeSegment?.url) return;
    setVideoBlobUrl(await createVideoBlobUrl());
    if (activeCaption) {
      initCaption();
    }
    videoRef.current?.addEventListener(
      "loadedmetadata",
      listenToLoadedMetaData
    );
  };

  useEffect(() => {
    init();
    return () => {
      videoElem?.removeEventListener("loadedmetadata", listenToLoadedMetaData);
      videoElem?.removeEventListener("loadeddata", listenToLoadedFirstData);
    };
  }, [videoRef.current]);
  return (
    <video
      id="savior_video_element"
      ref={videoRef}
      src={videoBlobUrl}
      className={styles.video}
      controls={false}
      poster={posterBlobUrl}
    />
  );
};
export default VideoElement;
