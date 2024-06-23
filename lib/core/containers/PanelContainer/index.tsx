import PlayPauseButton from "../../components/PlayPauseButton";
import styles from "./index.module.scss";
const PanelContainer = () => {
  return (
    <div className={styles["panel-container"]}>
      <div className={styles.header}></div>
      <div className={styles.center}>
        <PlayPauseButton />
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default PanelContainer;
