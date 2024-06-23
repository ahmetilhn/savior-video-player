import PlayPauseButton from "../../components/PlayPauseButton";
import ProgressBar from "../../components/ProgressBar";
import SeekBackwardButton from "../../components/SeekBackwardButton";
import SeekForwardButton from "../../components/SeekForwardButton";
import styles from "./index.module.scss";
const PanelContainer = () => {
  return (
    <div className={styles["panel-container"]}>
      <div className={styles.header}></div>
      <div className={styles.middle}>
        <SeekBackwardButton />
        <PlayPauseButton />
        <SeekForwardButton />
      </div>
      <div className={styles.bottom}>
        <ProgressBar />
      </div>
    </div>
  );
};

export default PanelContainer;
