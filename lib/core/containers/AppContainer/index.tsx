import PanelContainer from "../PanelContainer";
import VideoContainer from "../VideoContainer";
import styles from "./index.module.scss";
type Props = {
  className: string;
};
const AppContainer = () => {
  return (
    <div className={styles["app-container"]}>
      <PanelContainer className={styles["panel-container"]} />
      <VideoContainer />
    </div>
  );
};
export default AppContainer;
