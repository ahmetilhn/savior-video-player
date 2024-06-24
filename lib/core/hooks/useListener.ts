import { useEffect } from "react";
import { store } from "../store";
import useSegmentDepletion from "./useSegmentDepletion";

const useListener = () => {
  const { videoElem, setPlay, setCurrentTime, isPlay } = store(
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

  const startListeners = (): void => {
    videoElem?.addEventListener("ended", videoEndingListener);
    videoElem?.addEventListener("timeupdate", videoTimeListener);
    videoElem?.addEventListener("progress", checkSegmentDepletion);
    videoElem?.addEventListener("seeked", seekedListener);
  };

  const removeListeners = (): void => {
    videoElem?.removeEventListener("ended", videoEndingListener);
    videoElem?.removeEventListener("timeupdate", videoTimeListener);
    videoElem?.removeEventListener("progress", checkSegmentDepletion);
    videoElem?.removeEventListener("seeked", seekedListener);
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
