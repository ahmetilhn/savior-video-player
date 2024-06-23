import { useEffect } from "react";
import ISeason from "../types/ISeason";
import IVideo from "../types/IVideo";
import OptionsType from "../types/OptionsType";
import { store } from "../store";
import VideoElement from "../components/VideoELement";
import styles from "./index.module.scss";
type Props = {
  options: OptionsType;
  video: IVideo;
  seasons: Array<ISeason>;
};
const VideoPlayer: React.FC<React.PropsWithChildren<Props>> = ({
  options,
  video,
  seasons,
}) => {
  const { setActiveSegment, setActiveVideo, setSeasons, setOptions } = store(
    (store) => store
  );
  useEffect(() => {
    setOptions(options);
    setActiveVideo(video);
    setActiveSegment(video.segments[0]);
    setSeasons(seasons);
  }, []);
  return (
    <div className={styles["savior-video-player"]}>
      <VideoElement />
    </div>
  );
};

export default VideoPlayer;
