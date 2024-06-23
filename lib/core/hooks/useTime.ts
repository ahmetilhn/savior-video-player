import { store } from "../store";

const useTime = () => {
  const { currentTime, videoElem, isVideoReady, totalDuration } = store(
    (store) => store
  );

  const seekForward = (second: number = 1): void => {
    if (isVideoReady && videoElem && totalDuration > currentTime) {
      videoElem.currentTime = currentTime + second;
    }
  };
  const seekBackward = (second: number = 1) => {
    if (isVideoReady && videoElem && currentTime >= second) {
      videoElem.currentTime = currentTime - second;
    }
  };

  const getFormattedTime = (): string => {
    const timeStr = "";
    const minutes = Math.round(currentTime / 60);
    const hours = Math.floor(minutes / 60);
    const seconds = currentTime % 60;
    if (hours > 0) timeStr.concat(hours.toString() + ":");
    timeStr.concat(minutes.toString() + ":");
    timeStr.concat(seconds.toString());
    return timeStr;
  };

  return {
    seekForward,
    seekBackward,
    getFormattedTime,
  };
};

export default useTime;
