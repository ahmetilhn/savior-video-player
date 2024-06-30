import { findNextEpisode } from "../../helpers/season.helper";
import useCleaner from "../../hooks/useCleaner";
import useController from "../../hooks/useController";
import useListener from "../../hooks/useListener";
import useVideo from "../../hooks/useVideo";
import { store } from "../../store";
import ISeason from "../../types/ISeason";
import IVideo from "../../types/IVideo";
import styles from "./index.module.scss";
const NextEpisodeButton = () => {
  const {
    isControlPanelVisible,
    setControlPanelVisible,
    seasons,
    activeVideo,
    setActiveVideo,
    setActiveSegment,
  } = store((store) => store);
  const { removeListeners } = useListener();
  const { reset } = useController();
  const { prepareVideoResources } = useVideo();
  const { clearVideoResources } = useCleaner();
  const handleClick = (): void => {
    const nextEpisode = findNextEpisode(
      seasons as Array<ISeason>,
      activeVideo as IVideo
    );
    if (!nextEpisode) {
      console.error("Next episode not found");
      return;
    }
    reset();
    clearVideoResources();
    removeListeners();
    setControlPanelVisible(false);
    prepareVideoResources();
    setActiveVideo(nextEpisode);
    setActiveSegment(nextEpisode?.segments[0]);
  };
  return (
    <div
      className={styles.btn}
      style={{ bottom: isControlPanelVisible ? "17%" : "11%" }}
      onClick={handleClick}
    >
      <img
        src="https://www.cnet.com/a/img/resize/088b73f8a694457fcdd0551af892b37971a2b22a/hub/2015/02/05/dacccbeb-a855-4605-b581-d7f61975fdd5/star-wars-vehicles-millennium-falcon-1.jpg?auto=webp&width=1200"
        alt="asddsa"
      />
      <span>Next Episode</span>
    </div>
  );
};

export default NextEpisodeButton;
