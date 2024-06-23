import ReactDOM from "react-dom/client";
import VideoPlayer from "./core/video-player";
import ParamsType from "./core/types/ParamsType";
class SaviorVideoPlayer {
  private params: ParamsType;
  constructor(params: ParamsType) {
    this.params = params;
  }
  init() {
    const container = document.getElementById(this.params.targetElemId);
    if (container) {
      const root = ReactDOM.createRoot(container);
      root.render(
        <VideoPlayer
          video={this.params.video}
          seasons={this.params.seasons}
          options={this.params.options}
        />
      );
    }
  }
}

export default SaviorVideoPlayer;
