import PlayPauseButton from "../../components/PlayPauseButton";
import ProgressBar from "../../components/ProgressBar";
import SeekBackwardButton from "../../components/SeekBackwardButton";
import SeekForwardButton from "../../components/SeekForwardButton";
import styles from "./index.module.scss";
type Props = {
  className: string;
};
const PanelContainer: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <div className={`${styles["panel-container"]} ${className ?? ""}`}>
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
