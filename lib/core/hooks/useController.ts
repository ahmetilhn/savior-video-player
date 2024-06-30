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
    currentTime,
    totalDuration,
    setCaptionBlocks,
    setTotalDuration,
    setVideoBlobUrl,
    setVideoPlayable,
    setActiveCaption,
    setActiveSegment,
    activeSegment,
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
    setCurrentTime(0);
    videoElem?.setAttribute("src", activeSegment?.url.toString() || "");
    videoElem?.play();
    setPlay(true);
    setVideoEverPlayed(true);
    setVideoEnded(false);
  };

  const reset = () => {
    setPlay(false);
    setCurrentTime(0);
    setVideoBlobUrl(null);
    setVideoEverPlayed(false);
    setVideoEnded(false);
    setCaptionBlocks(null);
    setActiveCaption(null);
    setActiveSegment(null);
    setTotalDuration(0);
    setVideoPlayable(false);
  };
  return {
    play,
    pause,
    rePlay,
    changeVideoSpeed,
    seekForward,
    changeCurrentTime,
    seekBackward,
    reset,
  };
};

export default useController;
