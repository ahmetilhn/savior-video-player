import { store } from "../store";
import useListener from "./useListener";

const useController = () => {
  const { setPlay, videoElem } = store((store) => store);
  const { startListeners, removeListeners } = useListener();
  const play = () => {
    videoElem?.play();
    setPlay(true);
    startListeners();
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
