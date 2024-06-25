import { store } from "../store";

const useTime = () => {
  const { currentTime, videoElem, totalDuration } = store((store) => store);

  const seekForward = (second: number = 15): void => {
    if (videoElem && totalDuration > currentTime) {
      updateTimeOnVideo(currentTime + second);
    }
  };
  const seekBackward = (second: number = 15) => {
    if (videoElem && currentTime >= second) {
      updateTimeOnVideo(currentTime - second);
    }
  };

  const getFormattedTime = (val: number): string => {
    let timeStr = "";
    const hours = Math.floor(val / 60 / 60);
    const minutes = Math.floor((val - hours * 60 * 60) / 60);
    const seconds = val % 60;
    if (hours > 0) {
      timeStr += hours.toString() + ":";
      if (minutes < 10) timeStr += "0";
    }
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
