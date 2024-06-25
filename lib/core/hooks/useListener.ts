import { useEffect } from "react";
import { store } from "../store";
import useSegmentDepletion from "./useSegmentDepletion";

const useListener = () => {
  const { videoElem, setPlay, setCurrentTime, isPlay, setVideoPlayable } =
    store((store) => store);
  const { checkSegmentDepletion } = useSegmentDepletion();

  const listenToVideoEnding = (): void => {
    setPlay(false);
    setCurrentTime(0);
  };

  const listenToVideoTimeChanging = (): void => {
    setCurrentTime(Math.round(videoElem?.currentTime as number));
  };
  const listenToSeeked = (): void => {
    if (!videoElem) return;
    videoElem.playbackRate = 1;
  };

  const listenToSeeking = () => {
    setVideoPlayable(false);
  };

  const listenToWaiting = () => {
    setVideoPlayable(false);
  };

  const listenToCanplay = () => {
    setVideoPlayable(true);
  };

  const startListeners = (): void => {
    videoElem?.addEventListener("ended", listenToVideoEnding);
    videoElem?.addEventListener("timeupdate", listenToVideoTimeChanging);
    videoElem?.addEventListener("progress", checkSegmentDepletion);
    videoElem?.addEventListener("seeked", listenToSeeked);
    videoElem?.addEventListener("seeking", listenToSeeking);
    videoElem?.addEventListener("waiting", listenToWaiting);
    videoElem?.addEventListener("canplay", listenToCanplay);
  };

  const removeListeners = (): void => {
    videoElem?.removeEventListener("ended", listenToVideoEnding);
    videoElem?.removeEventListener("timeupdate", listenToVideoTimeChanging);
    videoElem?.removeEventListener("progress", checkSegmentDepletion);
    videoElem?.removeEventListener("seeked", listenToSeeked);
    videoElem?.removeEventListener("seeking", listenToSeeking);
    videoElem?.removeEventListener("waiting", listenToWaiting);
    videoElem?.removeEventListener("canplay", listenToCanplay);
  };
  useEffect(() => {
    if (!isPlay) {
      removeListeners();
    }
  }, [isPlay]);

  return {
    startListeners,
    removeListeners,
  };
};

export default useListener;
