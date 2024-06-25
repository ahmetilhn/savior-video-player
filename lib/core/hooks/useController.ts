import { store } from "../store";
import useListener from "./useListener";

const useController = () => {
  const { setPlay, videoElem, setVideoEverPlayed, wasVideoEverPlayed } = store(
    (store) => store
  );
  const { startListeners, removeListeners } = useListener();
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
  return {
    play,
    pause,
  };
};

export default useController;
