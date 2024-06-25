import { useEffect } from "react";
import { store } from "../store";
import useSegmentDepletion from "./useSegmentDepletion";

const useListener = () => {
  const { videoElem, setPlay, setCurrentTime, isPlay, setWaitingMetaData } =
    store((store) => store);
  const { checkSegmentDepletion } = useSegmentDepletion();

  const listenToVideoEnding = (): void => {
    setPlay(false);
    setCurrentTime(0);
  };

  const listenToVideoTimeChanging = (): void => {
    setCurrentTime(Math.round(videoElem?.currentTime as number));
  };
  const listenToSeeking = (): void => {
    if (!videoElem) return;
    videoElem.playbackRate = 1;
  };

  const listenToWaiting = () => {
    setWaitingMetaData(true);
  };

  const listenToCanplay = () => {
    setWaitingMetaData(false);
  };

  const startListeners = (): void => {
    videoElem?.addEventListener("ended", listenToVideoEnding);
    videoElem?.addEventListener("timeupdate", listenToVideoTimeChanging);
    videoElem?.addEventListener("progress", checkSegmentDepletion);
    videoElem?.addEventListener("seeked", listenToSeeking);
    videoElem?.addEventListener("waiting", listenToWaiting);
    videoElem?.addEventListener("canplay", listenToCanplay);
  };

  const removeListeners = (): void => {
    videoElem?.removeEventListener("ended", listenToVideoEnding);
    videoElem?.removeEventListener("timeupdate", listenToVideoTimeChanging);
    videoElem?.removeEventListener("progress", checkSegmentDepletion);
    videoElem?.removeEventListener("seeked", listenToSeeking);
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
