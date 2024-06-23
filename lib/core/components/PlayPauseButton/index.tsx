import useController from "../../hooks/useController";
import { store } from "../../store";
import BlurredControlButton from "../BlurredControlButton";
import styles from "./index.module.scss";
const PlayPauseButton = () => {
  const { isPlay } = store((store) => store);
  const controller = useController();
  const handleClick = () => {
    isPlay ? controller.pause() : controller.play();
  };
  return (
    <BlurredControlButton onClick={handleClick} className={styles.btn}>
      {!isPlay ? (
        <svg viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.496 20.5942C32.4975 19.4398 32.4975 16.5513 30.496 15.3968L4.49892 0.401746C2.49892 -0.75185 0 0.691597 0 3.00044V32.9906C0 35.2995 2.49893 36.7429 4.49893 35.5893L30.496 20.5942Z"
            fill="white"
          />
        </svg>
      ) : (
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
