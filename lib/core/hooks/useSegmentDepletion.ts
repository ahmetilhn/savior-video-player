import { store } from "../store";

const useSegmentDepletion = () => {
  const { videoElem } = store((store) => store);
  const checkSegmentDepletion = () => {
    const _buffered: TimeRanges | undefined = videoElem?.buffered ?? undefined;
    if (!_buffered || _buffered.length === 0) return;
    const currTime = videoElem?.currentTime ?? 0;
    const newBufferEndTime = _buffered?.end(_buffered?.length - 1);
    if (
      newBufferEndTime - currTime < 5 &&
      videoElem &&
      videoElem?.playbackRate !== 0.8
    ) {
      videoElem.playbackRate = 0.8;
      console.warn("Decreased video speed");
    } else if (
      newBufferEndTime - currTime > 5 &&
      videoElem &&
      videoElem?.playbackRate !== 1
    ) {
      videoElem.playbackRate = 1;
      console.info("Increased video speed");
    }
  };
  return {
    checkSegmentDepletion,
  };
};

export default useSegmentDepletion;
