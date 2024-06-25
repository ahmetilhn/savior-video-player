import PlayPauseButton from "../../components/PlayPauseButton";
import ProgressBar from "../../components/ProgressBar";
import SeekBackwardButton from "../../components/SeekBackwardButton";
import SeekForwardButton from "../../components/SeekForwardButton";
import useTime from "../../hooks/useTime";
import styles from "./index.module.scss";
import { store } from "../../store";
import { useEffect, useRef } from "react";
const PanelContainer = () => {
  const panelContainerRef = useRef<HTMLDivElement>(null);
  const {
    activeVideo,
    totalDuration,
    currentTime,
    setControlPanelVisible,
    isControlPanelVisible,
    isPlay,
  } = store((store) => store);
  const { getFormattedTime } = useTime();
  const listenToMouseLeave = () => {
    setControlPanelVisible(false);
  };
  useEffect(() => {
    panelContainerRef.current?.addEventListener(
      "mouseleave",
      listenToMouseLeave
    );
    return () => {
      panelContainerRef.current?.removeEventListener(
        "mouseleave",
        listenToMouseLeave
      );
    };
  }, []);
  return (
    <div
      style={{ display: !isControlPanelVisible ? "none" : "flex" }}
      ref={panelContainerRef}
      className={styles["panel-container"]}
    >
      <div className={styles.overlay}></div>
      <div className={styles.header}></div>
      <div className={styles.middle}>
        <SeekBackwardButton />
        <PlayPauseButton />
        <SeekForwardButton />
      </div>
      <div className={styles.bottom}>
        <div className={styles.info}>
          <span className={styles.title}>{activeVideo?.name}</span>
          <span className={styles.time}>
            {getFormattedTime(currentTime)} / {getFormattedTime(totalDuration)}
          </span>
        </div>
        <ProgressBar />
      </div>
    </div>
  );
};

export default PanelContainer;
