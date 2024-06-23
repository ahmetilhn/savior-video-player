import PanelContainer from "../PanelContainer";
import VideoContainer from "../VideoContainer";
import styles from "./index.module.scss";
const AppContainer = () => {
  return (
    <div className={styles["app-container"]}>
      <VideoContainer />
      <PanelContainer />
    </div>
  );
};
export default AppContainer;
