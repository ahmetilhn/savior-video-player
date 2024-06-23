import styles from "./index.module.scss";
import { store } from "../../store";
const VideoElement = () => {
  const { activeSegment } = store((store) => store);
  return <video src={activeSegment?.url}></video>;
};
export default VideoElement;
