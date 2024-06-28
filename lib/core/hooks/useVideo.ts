import { useCallback } from "react";
import { store } from "../store";

const useVideo = () => {
  const { activeSegment, activeVideo } = store((store) => store);
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
  const createPosterBlobUrl = async (): Promise<string | undefined> => {
    try {
      const res = await fetch(activeVideo?.poster as URL);
      return URL.createObjectURL(await res.blob());
    } catch (err) {
      console.error(err);
    }
  };
  return {
    createVideoBlobUrl,
    createPosterBlobUrl,
  };
};

export default useVideo;
