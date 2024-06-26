import { store } from "../../store";
import BlurredControlButton from "../BlurredControlButton";
import styles from "./index.module.scss";
const FullScreenButton = () => {
  const { isFullScreen, setFullScreen } = store((store) => store);
  const handleClick = () => {
    const appContainer = document.getElementById("savior_video_player");
    if (!isFullScreen) {
      setFullScreen(true);
      appContainer?.requestFullscreen();
    } else {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };
  return (
    <BlurredControlButton onClick={handleClick} className={styles.btn}>
      {isFullScreen ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 4V7C9 8.10457 8.10457 9 7 9H4"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 20L15 17C15 15.8954 15.8954 15 17 15L20 15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 9L17 9C15.8954 9 15 8.10457 15 7L15 4"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 15L7 15C8.10457 15 9 15.8954 9 17L9 20"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 9L4 6C4 4.89543 4.89543 4 6 4L9 4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 15V18C20 19.1046 19.1046 20 18 20H15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 4L18 4C19.1046 4 20 4.89543 20 6L20 9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 20L6 20C4.89543 20 4 19.1046 4 18L4 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </BlurredControlButton>
  );
};

export default FullScreenButton;
