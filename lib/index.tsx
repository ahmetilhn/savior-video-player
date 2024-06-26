import ReactDOM from "react-dom/client";
import App from "./core/app";
import ParamsType from "./core/types/ParamsType";
import IVideo from "./core/types/IVideo";
import ISeason from "./core/types/ISeason";
import OptionsType from "./core/types/OptionsType";
import { defaultOptions } from "./core/utils/constants";
class SaviorVideoPlayer {
  private video: IVideo | null;
  private targetElemId: string;
  private seasons: Array<ISeason> | null;
  private options: OptionsType = defaultOptions;
  constructor(params: ParamsType) {
    this.video = params.video ?? null;
    this.targetElemId = params.targetElemId;
    this.seasons = params.seasons ?? null;
    this.options = Object.assign(this.options, params.options);
  }
  init() {
    const targetElem = document.getElementById(this.targetElemId);
    if (targetElem) {
      const root = ReactDOM.createRoot(targetElem);
      root.render(
        <App video={this.video} seasons={this.seasons} options={this.options} />
      );
    } else {
      throw new Error("Target elem not found");
    }
  }
}

export default SaviorVideoPlayer;
