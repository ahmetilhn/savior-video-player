import { store } from "../store";
import useCleaner from "./useCleaner";

const useController = () => {
  const {
    setPlay,
    videoElem,
    setVideoEverPlayed,
    wasVideoEverPlayed,
    setCurrentTime,
    setVideoEnded,
    activeSegment,
    currentTime,
    totalDuration,
  } = store((store) => store);
  const { clearVideoResources } = useCleaner();

  const play = () => {
    videoElem?.play();
    setPlay(true);
    if (!wasVideoEverPlayed) setVideoEverPlayed(true);
  };

  const pause = (): void => {
    videoElem?.pause();
    setPlay(false);
  };

  const changeVideoSpeed = (val: number): void => {
    if (!videoElem) return;
    videoElem.playbackRate = val;
  };
  const seekForward = (second: number = 15): void => {
    if (videoElem && totalDuration > currentTime) {
      changeCurrentTime(currentTime + second);
    }
  };
  const seekBackward = (second: number = 15): void => {
    if (videoElem && currentTime >= second) {
      changeCurrentTime(currentTime - second);
    }
  };

  const changeCurrentTime = (time: number): void => {
    if (!videoElem || time < 0 || time > totalDuration) return;
    videoElem.currentTime = Math.round(time);
  };
  const rePlay = () => {
    clearVideoResources();
    //videoElem?.setAttribute("src", activeSegment?.url.toString() || ""); remove after adding adaptive stream
    setCurrentTime(0);
    videoElem?.play();
    setPlay(true);
    setVideoEverPlayed(true);
    setVideoEnded(false);
  };
  return {
    play,
    pause,
    rePlay,
    changeVideoSpeed,
    seekForward,
    changeCurrentTime,
    seekBackward,
  };
};

export default useController;
