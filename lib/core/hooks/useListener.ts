import { useEffect } from "react";
import { store } from "../store";

const useListener = () => {
  const { videoElem, setPlay, setCurrentTime, isPlay } = store(
    (store) => store
  );

  const videoEndingListener = (): void => {
    setPlay(false);
    setCurrentTime(0);
  };

  const videoTimeListener = () => {
    setCurrentTime(Math.round(videoElem?.currentTime as number));
  };

  const startListeners = (): void => {
    videoElem?.addEventListener("ended", videoEndingListener);
    videoElem?.addEventListener("timeupdate", videoTimeListener);
  };

  const removeListeners = (): void => {
    videoElem?.removeEventListener("ended", videoEndingListener);
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
