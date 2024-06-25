import { useCallback, useMemo } from "react";
import { store } from "../store";

const useProgress = () => {
  const { currentTime, totalDuration, videoElem } = store((store) => store);
  const calculateBarWidthByPassingTime = useCallback(
    (time: number = currentTime): number => {
      return (time / totalDuration) * 100;
    },
    [currentTime]
  );

  const calculateNewCurrTimeByBarWidth = useCallback(
    (desiredBarWidth: number) => {
      return Math.round((desiredBarWidth / 100) * totalDuration);
    },
    [totalDuration]
  );

  const loadedBarWidth = useMemo<number>(() => {
    const buffered: TimeRanges | undefined = videoElem?.buffered ?? undefined;
    if (!buffered || buffered.length === 0) return 0;
    const bufferedTime = buffered?.end(buffered?.length - 1);
    return calculateBarWidthByPassingTime(bufferedTime);
  }, [videoElem?.buffered]);

  return {
    calculateBarWidthByPassingTime,
    calculateNewCurrTimeByBarWidth,
    loadedBarWidth,
  };
};

export default useProgress;
