import { useEffect } from "react";
import ISeason from "./types/ISeason";
import IVideo from "./types/IVideo";
import OptionsType from "./types/OptionsType";
import { store } from "./store";
import AppContainer from "./containers/AppContainer";
type Props = {
  options: OptionsType;
  video: IVideo;
  seasons: Array<ISeason>;
};
const App: React.FC<React.PropsWithChildren<Props>> = ({
  options,
  video,
  seasons,
}) => {
  const {
    setActiveSegment,
    setActiveVideo,
    setSeasons,
    setOptions,
    setActiveCaption,
  } = store((store) => store);
  useEffect(() => {
    initStore();
  }, []);

  const initStore = () => {
    setOptions(options);
    setActiveVideo(video);
    setActiveSegment(video.segments[0]);
    setSeasons(seasons);
    if (video.captions?.length) setActiveCaption(video.captions[0]);
  };
  return <AppContainer />;
};

export default App;
