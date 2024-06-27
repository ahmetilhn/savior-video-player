import { useCallback } from "react";
import { store } from "../store";

const useVideo = () => {
  const { activeSegment } = store((store) => store);
  const createVideoBlobUrl = useCallback(async (): Promise<
    string | undefined
  > => {
    try {
      const res = await fetch(activeSegment?.url as URL);
      return URL.createObjectURL(await res.blob());
    } catch (err) {
      console.error(err);
    }
  }, [activeSegment?.url]);

  return {
    createVideoBlobUrl,
  };
};

export default useVideo;
