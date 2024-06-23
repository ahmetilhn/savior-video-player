import { store } from "../store";

const useDuration = () => {
  const { currentTime, setCurrentTime } = store((store) => store);

  const seekForward = (val: number): void => {
    setCurrentTime(currentTime + val);
  };

  const getFormattedTime = () => {
    const floatedTime = currentTime
    return 
  }

  return {};
};
