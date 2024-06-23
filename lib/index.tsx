import ReactDOM from "react-dom/client";
import VideoPlayer from "./core/video-player";
class SaviorVideoPlayer {
  init(targetElemId: string) {
    const container = document.getElementById(targetElemId);
    if (container) {
      const root = ReactDOM.createRoot(container);
      root.render(<VideoPlayer />);
    }
  }
}

export default SaviorVideoPlayer;