import { store } from "../store";

const useProgress = () => {
  const { currentTime, totalDuration } = store((store) => store);
  const calculateBarWidth = (currTime: number = currentTime): number => {
    return (currTime / totalDuration) * 100;
  };

  const calculateNewCurrTimeBySliderWidth = (
    sliderPassingRate: number
  ): number => {
    return sliderPassingRate * totalDuration;
  };

  return {
    calculateBarWidth,
    calculateNewCurrTimeBySliderWidth,
  };
};

export default useProgress;
