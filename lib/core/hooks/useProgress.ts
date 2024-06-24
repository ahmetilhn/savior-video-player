import { store } from "../store";

const useProgress = () => {
  const { currentTime, totalDuration } = store((store) => store);
  const calculateBarWidthByPassingTime = (
    currTime: number = currentTime
  ): number => {
    return (currTime / totalDuration) * 100;
  };

  const calculateNewCurrTimeByBarWidth = (desiredBarWidth: number): number => {
    return Math.round((desiredBarWidth / 100) * totalDuration);
  };

  return {
    calculateBarWidthByPassingTime,
    calculateNewCurrTimeByBarWidth,
  };
};

export default useProgress;
