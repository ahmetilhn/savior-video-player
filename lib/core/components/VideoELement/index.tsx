import { store } from "../../store";
import styles from "./index.module.scss";
const VideoElement = () => {
  const { activeSegment } = store((store) => store);
  return <video className={styles.video} src={activeSegment?.url}></video>;
};
export default VideoElement;
