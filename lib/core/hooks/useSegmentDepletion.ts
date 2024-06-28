import { useCallback } from "react";
import { store } from "../store";
import { calculateEndTimeByBuffer } from "../utils/video.util";
import useController from "./useController";

const useSegmentDepletion = () => {
  const { changeVideoSpeed } = useController();
  const { videoElem } = store((store) => store);

  const checkSegmentDepletion = useCallback(() => {
    const newBufferEndTime = calculateEndTimeByBuffer(
      videoElem?.buffered as TimeRanges
    );
    const currTime = videoElem?.currentTime ?? 0;
    if (
      newBufferEndTime - currTime < 5 &&
      videoElem &&
      videoElem?.playbackRate !== 0.8
    ) {
      changeVideoSpeed(0.8);
      console.warn("Decreased video speed");
    } else if (
      newBufferEndTime - currTime > 5 &&
      videoElem &&
      videoElem?.playbackRate !== 1
    ) {
      changeVideoSpeed(1);
      console.info("Increased video speed");
    }
  }, [videoElem?.buffered]);
  return {
    checkSegmentDepletion,
  };
};

export default useSegmentDepletion;
