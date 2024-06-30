import { useCallback } from "react";
import { store } from "../store";
import useCaption from "./useCaption";

const useVideo = () => {
  const { activeSegment, activeVideo, setVideoBlobUrl, activeCaption } = store(
    (store) => store
  );
  const { prepareCaption } = useCaption();
  const createVideoBlobUrl = useCallback(async (): Promise<string | null> => {
    try {
      const res = await fetch(activeSegment?.url as URL);
      return URL.createObjectURL(await res.blob());
    } catch (err) {
      console.error(err);
      return null;
    }
  }, [activeSegment?.url]);
  const createVideoPosterBlobUrl = async (): Promise<string | undefined> => {
    try {
      const res = await fetch(activeVideo?.poster as URL);
      return URL.createObjectURL(await res.blob());
    } catch (err) {
      console.error(err);
    }
  };

  const prepareVideoResources = async (): Promise<void> => {
    setVideoBlobUrl(await createVideoBlobUrl());
    if (activeCaption) await prepareCaption();
  };

  return {
    createVideoBlobUrl,
    createVideoPosterBlobUrl,
    prepareVideoResources,
  };
};

export default useVideo;
