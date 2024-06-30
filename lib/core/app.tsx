import { useEffect } from "react";
import ISeason from "./types/ISeason";
import IVideo from "./types/IVideo";
import OptionsType from "./types/OptionsType";
import { store } from "./store";
import AppContainer from "./containers/AppContainer";
import ISegment from "./types/ISegment";
type Props = {
  options: OptionsType;
  video: IVideo | null;
  seasons: Array<ISeason> | null;
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
    const _video = (video && video) ?? (seasons && seasons[0].episodes[0]);
    setOptions(options);
    setActiveVideo(_video);
    setActiveSegment(_video?.segments[0] as ISegment);
    setSeasons(seasons);
    if (_video?.captions?.length) setActiveCaption(_video.captions[0]);
  };
  return <AppContainer />;
};

export default App;
