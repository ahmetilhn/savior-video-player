import { useEffect, useRef } from "react";
import { store } from "../../store";
import PanelContainer from "../PanelContainer";
import VideoContainer from "../VideoContainer";
import styles from "./index.module.scss";
const AppContainer = () => {
  const appContainerRef = useRef<HTMLDivElement>(null);
  const { setControlPanelVisible, isVideoPlayable } = store((store) => store);
  const handleMouseLeaveEvent = () => {
    setControlPanelVisible(false);
  };
  const handleMouseEnterEvent = () => {
    setControlPanelVisible(true);
    appContainerRef.current?.addEventListener(
      "mouseleave",
      handleMouseLeaveEvent
    );
  };
  useEffect(() => {
    return () => {
      appContainerRef.current?.removeEventListener(
        "mouseleave",
        handleMouseLeaveEvent
      );
      appContainerRef.current?.removeEventListener(
        "mouseenter",
        handleMouseEnterEvent
      );
    };
  }, []);
  useEffect(() => {
    if (isVideoPlayable) {
      appContainerRef.current?.addEventListener(
        "mouseenter",
        handleMouseEnterEvent
      );
    }
  }, [isVideoPlayable]);
  return (
    <div
      id="savior_video_player"
      ref={appContainerRef}
      className={styles.container}
    >
      <PanelContainer />
      <VideoContainer />
    </div>
  );
};
export default AppContainer;
