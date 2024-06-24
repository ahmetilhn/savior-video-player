import { store } from "../store";

const useTime = () => {
  const { currentTime, videoElem, isVideoReady, totalDuration } = store(
    (store) => store
  );

  const seekForward = (second: number = 1): void => {
    if (isVideoReady && videoElem && totalDuration > currentTime) {
      updateTimeOnVideo(currentTime + second);
    }
  };
  const seekBackward = (second: number = 1) => {
    if (isVideoReady && videoElem && currentTime >= second) {
      updateTimeOnVideo(currentTime - second);
    }
  };

  const getFormattedTime = (val: number): string => {
    let timeStr = "";
    const minutes = Math.round(val / 60);
    const hours = Math.floor(minutes / 60);
    const seconds = val % 60;
    if (hours > 0) timeStr += hours.toString() + ":";
    timeStr += minutes.toString() + ":";
    if (seconds < 10) timeStr += "0";
    timeStr += seconds.toString();
    return timeStr;
  };

  const updateTimeOnVideo = (time: number): void => {
    if (!videoElem || time < 0 || time > totalDuration) return;
    videoElem.currentTime = Math.round(time);
  };

  return {
    seekForward,
    seekBackward,
    getFormattedTime,
    updateTimeOnVideo,
  };
};

export default useTime;
