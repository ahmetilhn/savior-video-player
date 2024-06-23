import { store } from "../store";

const useTime = () => {
  const { currentTime, setCurrentTime } = store((store) => store);

  const seekForward = (time: number): void => {
    setCurrentTime(currentTime + time);
  };
  const seekBackward = (time: number) => {
    setCurrentTime(currentTime - time);
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
