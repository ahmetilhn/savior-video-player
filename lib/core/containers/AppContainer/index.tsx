import { store } from "../../store";
import PanelContainer from "../PanelContainer";
import VideoContainer from "../VideoContainer";
import styles from "./index.module.scss";
type Props = {
  className: string;
};
const AppContainer = () => {
  const { isControlPanelVisible } = store((store) => store);
  return (
    <div className={styles["app-container"]}>
      {isControlPanelVisible && <PanelContainer />}
      <VideoContainer />
    </div>
  );
};
export default AppContainer;
