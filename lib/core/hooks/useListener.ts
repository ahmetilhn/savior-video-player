import { useEffect } from "react";
import { store } from "../store";
import useSegmentDepletion from "./useSegmentDepletion";
import useController from "./useController";

const useListener = () => {
  const {
    videoElem,
    setPlay,
    setCurrentTime,
    isPlay,
    setVideoPlayable,
    setVideoEnded,
    setControlPanelVisible,
  } = store((store) => store);
  const { checkSegmentDepletion } = useSegmentDepletion();
  const { changeVideoSpeed } = useController();
  const handleVideoEnding = (): void => {
    setPlay(false);
    setVideoEnded(true);
    setControlPanelVisible(true);
  };

  const handleVideoTimeChanging = (): void => {
    setCurrentTime(Math.round(videoElem?.currentTime as number));
  };
  const handleSeeked = (): void => {
    if (!videoElem) return;
    changeVideoSpeed(1);
  };

  const handleSeeking = () => {
    setVideoPlayable(false);
  };

  const handleWaiting = () => {
    setVideoPlayable(false);
  };

  const handleCanplay = () => {
    setVideoPlayable(true);
  };

  const startListeners = (): void => {
    videoElem?.addEventListener("ended", handleVideoEnding);
    videoElem?.addEventListener("timeupdate", handleVideoTimeChanging);
    videoElem?.addEventListener("progress", checkSegmentDepletion);
    videoElem?.addEventListener("seeked", handleSeeked);
    videoElem?.addEventListener("seeking", handleSeeking);
    videoElem?.addEventListener("waiting", handleWaiting);
    videoElem?.addEventListener("canplay", handleCanplay);
  };

  const removeListeners = (): void => {
    videoElem?.removeEventListener("ended", handleVideoEnding);
    videoElem?.removeEventListener("timeupdate", handleVideoTimeChanging);
    videoElem?.removeEventListener("progress", checkSegmentDepletion);
    videoElem?.removeEventListener("seeked", handleSeeked);
    videoElem?.removeEventListener("seeking", handleSeeking);
    videoElem?.removeEventListener("waiting", handleWaiting);
    videoElem?.removeEventListener("canplay", handleCanplay);
  };
  useEffect(() => {
    return () => {
      removeListeners();
    };
  }, []);

  return {
    startListeners,
    removeListeners,
  };
};

export default useListener;
