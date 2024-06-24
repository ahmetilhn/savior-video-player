import { store } from "../../store";
import styles from "./index.module.scss";
const VideoElement = () => {
  const { activeSegment, setTotalDuration, videoElem, setVideoReady } = store(
    (store) => store
  );
  const handleLoadedMetaDataEvent = (): void => {
    setTotalDuration(Math.round(videoElem?.duration ?? 0));
    setVideoReady(true);
  };
  return (
    <video
      onLoadedMetadata={handleLoadedMetaDataEvent}
      id="savior_video_element"
      className={styles.video}
      controls={false}
    >
      <source src={activeSegment?.url} />
    </video>
  );
};
export default VideoElement;
