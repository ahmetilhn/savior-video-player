import { useEffect } from "react";
import { store } from "../store";
import useSegmentDepletion from "./useSegmentDepletion";

const useListener = () => {
  const { videoElem, setPlay, setCurrentTime, isPlay, setWaitingData } = store(
    (store) => store
  );
  const { checkSegmentDepletion } = useSegmentDepletion();

  const videoEndingListener = (): void => {
    setPlay(false);
    setCurrentTime(0);
  };

  const videoTimeListener = (): void => {
    setCurrentTime(Math.round(videoElem?.currentTime as number));
  };
  const seekedListener = (): void => {
    if (!videoElem) return;
    videoElem.playbackRate = 1;
  };

  const listenToWaiting = () => {
    setWaitingData(true);
  };

  const listenToCanplay = () => {
    setWaitingData(false);
  };

  const startListeners = (): void => {
    videoElem?.addEventListener("ended", videoEndingListener);
    videoElem?.addEventListener("timeupdate", videoTimeListener);
    videoElem?.addEventListener("progress", checkSegmentDepletion);
    videoElem?.addEventListener("seeked", seekedListener);
    videoElem?.addEventListener("waiting", listenToWaiting);
    videoElem?.addEventListener("canplay", listenToCanplay);
  };

  const removeListeners = (): void => {
    videoElem?.removeEventListener("ended", videoEndingListener);
    videoElem?.removeEventListener("timeupdate", videoTimeListener);
    videoElem?.removeEventListener("progress", checkSegmentDepletion);
    videoElem?.removeEventListener("seeked", seekedListener);
    videoElem?.removeEventListener("waiting", listenToWaiting);
    videoElem?.removeEventListener("canplay", listenToCanplay);
  };
  useEffect(() => {
    if (!isPlay) {
      removeListeners();
    }
    return () => {
      removeListeners();
    };
  }, [videoElem, isPlay]);

  return {
    startListeners,
    removeListeners,
  };
};

export default useListener;
