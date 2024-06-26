import PlayPauseButton from "../../components/PlayPauseButton";
import ProgressBar from "../../components/ProgressBar";
import SeekBackwardButton from "../../components/SeekBackwardButton";
import SeekForwardButton from "../../components/SeekForwardButton";
import useTime from "../../hooks/useTime";
import styles from "./index.module.scss";
import { store } from "../../store";
import FullScreenButton from "../../components/FullScreenButton";
const PanelContainer = () => {
  const {
    activeVideo,
    totalDuration,
    currentTime,
    isControlPanelVisible,
    wasVideoEverPlayed,
    isPlay,
  } = store((store) => store);
  const { getFormattedTime } = useTime();
  return (
    <div
      style={{ display: !isControlPanelVisible && isPlay ? "none" : "flex" }}
      className={styles["panel-container"]}
    >
      <div className={styles.overlay}></div>
      <div className={styles.top}>
        <FullScreenButton />
      </div>
      <div className={styles.middle}>
        {wasVideoEverPlayed && <SeekBackwardButton />}
        <PlayPauseButton />
        {wasVideoEverPlayed && <SeekForwardButton />}
      </div>
      <div className={styles.bottom}>
        <div className={styles.info}>
          <span className={styles.title}>{activeVideo?.name}</span>
          <span className={styles.time}>
            {getFormattedTime(currentTime)} / {getFormattedTime(totalDuration)}
          </span>
        </div>
        {wasVideoEverPlayed && <ProgressBar />}
      </div>
    </div>
  );
};

export default PanelContainer;
