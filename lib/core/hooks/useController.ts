import { store } from "../store";
import useCleaner from "./useCleaner";
import useListener from "./useListener";

const useController = () => {
  const {
    setPlay,
    videoElem,
    setVideoEverPlayed,
    wasVideoEverPlayed,
    setCurrentTime,
    setVideoEnded,
    activeSegment,
  } = store((store) => store);
  const { startListeners, removeListeners } = useListener();
  const { clearVideoResources } = useCleaner();
  const play = () => {
    videoElem?.play();
    setPlay(true);
    startListeners();
    if (!wasVideoEverPlayed) setVideoEverPlayed(true);
  };

  const pause = (): void => {
    videoElem?.pause();
    setPlay(false);
    removeListeners();
  };

  const rePlay = () => {
    clearVideoResources();
    videoElem?.setAttribute("src", activeSegment?.url.toString() || "");
    setCurrentTime(0);
    videoElem?.play();
    setPlay(true);
    startListeners();
    setVideoEverPlayed(true);
    setVideoEnded(false);
  };
  return {
    play,
    pause,
    rePlay,
  };
};

export default useController;
