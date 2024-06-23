import { useEffect } from "react";
import { store } from "../store";

const useListener = () => {
  const { videoElem, setPlay, isPlay } = store((store) => store);

  const videoEndingListener = () => {
    setPlay(false);
  };

  const startListeners = () => {
    videoElem?.addEventListener("ended", videoEndingListener);
  };

  const removeListeners = () => {
    videoElem?.removeEventListener("ended", videoEndingListener);
  };
  useEffect(() => {
    return () => {
      removeListeners();
    };
  }, [isPlay]);

  return {
    startListeners,
  };
};

export default useListener;
