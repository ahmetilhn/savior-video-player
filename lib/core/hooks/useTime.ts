import { useMemo } from "react";
import { timeToString } from "../utils/time.util";

const useTime = () => {
  const getFormattedTime = useMemo(
    () =>
      (time: number): string => {
        return timeToString(time);
      },
    []
  );
  return {
    getFormattedTime,
  };
};

export default useTime;
