import { useMemo } from "react";
import { store } from "../store";
import { timeToString } from "../utils/time.util";

const useTime = () => {
  const { currentTime, videoElem, totalDuration } = store((store) => store);

  const seekForward = (second: number = 15): void => {
    if (videoElem && totalDuration > currentTime) {
      updateTimeOnVideo(currentTime + second);
    }
  };
  const seekBackward = (second: number = 15): void => {
    if (videoElem && currentTime >= second) {
      updateTimeOnVideo(currentTime - second);
    }
  };

  const getFormattedTime = useMemo(
    () =>
      (time: number): string => {
        return timeToString(time);
      },
    []
  );

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
