import useController from "../../hooks/useController";
import useListener from "../../hooks/useListener";
import { store } from "../../store";
import BlurredControlButton from "../BlurredControlButton";
import styles from "./index.module.scss";
const PlayPauseButton = () => {
  const { isPlay, isVideoEnded } = store((store) => store);
  const { startListeners, removeListeners } = useListener();
  const controller = useController();
  const handleClick = () => {
    if (isPlay) {
      controller.pause();
      removeListeners();
    } else if (!isPlay && isVideoEnded) {
      startListeners();
      controller.rePlay();
    } else {
      startListeners();
      controller.play();
    }
  };
  return (
    <BlurredControlButton onClick={handleClick} className={styles.btn}>
      {!isPlay && !isVideoEnded && (
        <svg viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.496 20.5942C32.4975 19.4398 32.4975 16.5513 30.496 15.3968L4.49892 0.401746C2.49892 -0.75185 0 0.691597 0 3.00044V32.9906C0 35.2995 2.49893 36.7429 4.49893 35.5893L30.496 20.5942Z"
            fill="white"
          />
        </svg>
      )}
      {isVideoEnded && (
        <svg viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.80387 21.1839C11.1975 26.0309 18.5787 26.296 23.2903 21.7761C28.0019 17.2563 28.2596 9.66296 23.866 4.81599C19.4724 -0.0309779 12.0912 -0.296142 7.37959 4.22373C4.69964 6.79464 3.46065 10.3599 3.69899 13.8486M0.999756 12.1428L3.83269 15.1992L6.87073 12.1428"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {isPlay && (
        <svg viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 2C18 0.895432 18.8954 0 20 0H26C27.1046 0 28 0.895431 28 2V34C28 35.1046 27.1046 36 26 36H20C18.8954 36 18 35.1046 18 34V2Z"
            fill="white"
          />
          <path
            d="M0 2C0 0.895432 0.895431 0 2 0H8C9.10457 0 10 0.895431 10 2V34C10 35.1046 9.10457 36 8 36H2C0.89543 36 0 35.1046 0 34V2Z"
            fill="white"
          />
        </svg>
      )}
    </BlurredControlButton>
  );
};

export default PlayPauseButton;
