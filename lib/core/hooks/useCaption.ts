import { useMemo } from "react";
import { parseSrtData } from "../helpers/srt.helper";
import { store } from "../store";

const useCaption = () => {
  const { setCaptionBlocks, captionBlocks } = store((store) => store);
  const { activeCaption } = store((store) => store);
  const getCaptionData = async (): Promise<string | undefined> => {
    try {
      const res = await fetch(activeCaption?.url as URL);
      const data = await res.text();
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  const getCaptionByTime = useMemo(
    () =>
      (time: number): CaptionBlockType | undefined => {
        let _time = time * 1000;
        return captionBlocks?.find(
          (item) =>
            Math.floor(item.start) <= _time && Math.round(item.end + 1) >= _time
        );
      },
    [captionBlocks]
  );

  const prepareCaption = async (): Promise<void> => {
    const captionData = await getCaptionData();
    if (captionData) setCaptionBlocks(parseSrtData(captionData));
  };
  return {
    prepareCaption,
    getCaptionByTime,
  };
};

export default useCaption;
