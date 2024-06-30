import ISeason from "../types/ISeason";
import IVideo from "../types/IVideo";

export const findNextEpisode = (
  seasons: Array<ISeason>,
  activeVideo: IVideo
): IVideo | undefined => {
  const activeSeason = seasons?.find((_season) =>
    _season.episodes.find((_episode) => _episode === activeVideo)
  );
  const activeIndex = activeSeason?.episodes.findIndex(
    (_episode) => _episode === activeVideo
  );
  if (typeof activeIndex === "number") {
    return activeSeason?.episodes[activeIndex + 1];
  }
  return undefined;
};
