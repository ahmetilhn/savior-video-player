import { useMemo } from "react";
import { parseSrtData } from "../helpers/srt.helper";
import { store } from "../store";

const useCaption = () => {
  const { setCaptionBlocks, captionBlocks } = store((store) => store);
  const { activeCaption } = store((store) => store);
  const fetchSrtFile = async (): Promise<void> => {
    try {
      const res = await fetch(activeCaption?.url as URL);
      const data = await res.text();
      setCaptionBlocks(parseSrtData(data));
    } catch (err) {
      console.error(err);
    }
  };
  const getCaptionByTime = useMemo(
    () =>
      (time: number): CaptionBlockType | undefined => {
        let _time = time * 1000;
        return captionBlocks?.find(
          (item) => item.start < _time && item.end > _time
        );
      },
    [captionBlocks]
  );

  const initCaption = (): void => {
    fetchSrtFile();
  };
  return {
    initCaption,
    getCaptionByTime,
  };
};

export default useCaption;
