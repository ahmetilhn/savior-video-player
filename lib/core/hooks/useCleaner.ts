import { store } from "../store";

const useCleaner = () => {
  const { videoElem } = store((store) => store);
  const clearVideoResources = () => {
    videoElem?.removeAttribute("src"); // remove after adding adaptive streaming
    //URL.revokeObjectURL(videoElem?.src as string); // add after adding adaptive streaming
    videoElem?.load();
  };
  return {
    clearVideoResources,
  };
};

export default useCleaner;
