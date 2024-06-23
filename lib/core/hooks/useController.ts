import { store } from "../store";
import useListener from "./useListener";

const useController = () => {
  const { setPlay, videoElem } = store((store) => store);
  const { startListeners } = useListener();
  const play = () => {
    videoElem?.play();
    setPlay(true);
    startListeners();
  };

  const pause = (): void => {
    videoElem?.pause();
    setPlay(false);
  };
  return {
    play,
    pause,
  };
};

export default useController;
