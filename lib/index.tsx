import ReactDOM from "react-dom/client";
import VideoPlayer from "./core/VideoPlayer";
import ParamsType from "./core/types/ParamsType";
import IVideo from "./core/types/IVideo";
import ISeason from "./core/types/ISeason";
import OptionsType from "./core/types/OptionsType";
import { defaultOptions } from "./core/utils/constants";
class SaviorVideoPlayer {
  private video: IVideo;
  private targetElemId: string;
  private seasons: Array<ISeason> = [];
  private options: OptionsType = defaultOptions;
  constructor(params: ParamsType) {
    this.video = params.video;
    this.targetElemId = params.targetElemId;
    this.seasons = params.seasons || [];
    this.options = Object.assign(this.options, params.options);
  }
  init() {
    const targetElem = document.getElementById(this.targetElemId);
    if (targetElem) {
      console.log("zzz");
      const root = ReactDOM.createRoot(targetElem);
      root.render(
        <VideoPlayer
          video={this.video}
          seasons={this.seasons}
          options={this.options}
        />
      );
    } else {
      throw new Error("Target elem not found");
    }
  }
}

export default SaviorVideoPlayer;
