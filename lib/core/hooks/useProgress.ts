import { store } from "../store";

const useProgress = () => {
  const { currentTime, totalDuration } = store((store) => store);
  const calculateBarWidth = (): number => {
    return (currentTime / totalDuration) * 100;
  };

  return {
    calculateBarWidth,
  };
};

export default useProgress;
