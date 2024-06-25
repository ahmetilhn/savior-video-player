import { calculateEndTimeByBuffer } from "./../utils/video.util";
import { useMemo } from "react";
import { store } from "../store";

const useProgress = () => {
  const { currentTime, totalDuration, videoElem } = store((store) => store);
  const calculateBarWidthByPassingTime = useMemo(
    () =>
      (time: number = currentTime): number => {
        return (time / totalDuration) * 100;
      },
    [totalDuration, currentTime]
  );

  const calculateNewCurrTimeByBarWidth = useMemo(
    () => (desiredBarWidth: number) => {
      return Math.round((desiredBarWidth / 100) * totalDuration);
    },
    [totalDuration]
  );

  const loadedBarWidth = useMemo(() => {
    return calculateBarWidthByPassingTime(
      calculateEndTimeByBuffer(videoElem?.buffered as TimeRanges)
    );
  }, [totalDuration, videoElem?.buffered]);

  return {
    calculateBarWidthByPassingTime,
    calculateNewCurrTimeByBarWidth,
    loadedBarWidth,
  };
};

export default useProgress;
