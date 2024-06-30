import { store } from "../store";

const useCleaner = () => {
  const { videoElem } = store((store) => store);
  const clearVideoResources = () => {
    videoElem?.removeAttribute("src");
    URL.revokeObjectURL(videoElem?.src as string);
    videoElem?.load();
  };
  return {
    clearVideoResources,
  };
};

export default useCleaner;
