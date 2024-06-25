export const timeToString = (time: number): string => {
  let timeStr = "";
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor((time - hours * 60 * 60) / 60);
  const seconds = time % 60;
  if (hours > 0) {
    timeStr += hours.toString() + ":";
    if (minutes < 10) timeStr += "0";
  }
  timeStr += minutes.toString() + ":";
  if (seconds < 10) timeStr += "0";
  timeStr += seconds.toString();
  return timeStr;
};
