import { useEffect } from "react";
import ISeason from "./types/ISeason";
import IVideo from "./types/IVideo";
import OptionsParamType from "./types/OptionsType";
import { store } from "./store";

type Props = {
  options: OptionsParamType;
  video: IVideo;
  seasons: Array<ISeason>;
};
const VideoPlayer: React.FC<React.PropsWithChildren<Props>> = ({
  options,
  video,
  seasons,
}) => {
  const { setActiveSegment, setActiveVideo, setSeasons, setOptions } = store(
    (state) => state
  );
  useEffect(() => {
    setOptions(options);
    setActiveVideo(video);
    setActiveSegment(video.segments[0]);
    setSeasons(seasons);
  }, []);
  return (
    <div>
      Test
      <h1>Ahmet</h1>
    </div>
  );
};

export default VideoPlayer;
