import { store } from "../../store";
import styles from "./index.module.scss";
const VideoElement = () => {
  const { activeSegment, setTotalDuration, videoElem } = store(
    (store) => store
  );
  return (
    <video
      onLoadedMetadata={() => {
        setTotalDuration(Math.round(videoElem?.duration ?? 0));
      }}
      id="savior_video_element"
      className={styles.video}
      src={activeSegment?.url}
    />
  );
};
export default VideoElement;
