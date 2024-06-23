import { useEffect } from "react";
import { store } from "../store";

const useListener = () => {
  const { videoElem, setPlay, setCurrentTime, isPlay, setTotalDuration } =
    store((store) => store);

  const videoEndingListener = (): void => {
    setPlay(false);
    setCurrentTime(0);
  };

  const videoTimeListener = (): void => {
    setCurrentTime(Math.round(videoElem?.currentTime as number));
  };

  const startListeners = (): void => {
    videoElem?.addEventListener("ended", videoEndingListener);
    videoElem?.addEventListener("timeupdate", videoTimeListener);
  };

  const removeListeners = (): void => {
    videoElem?.removeEventListener("ended", videoEndingListener);
    videoElem?.removeEventListener("timeupdate", videoTimeListener);
  };
  useEffect(() => {
    return () => {
      removeListeners();
    };
  }, [isPlay]);

  return {
    startListeners,
  };
};

export default useListener;
