import useController from "../../hooks/useController";
import BlurredControlButton from "../BlurredControlButton";
const SeekForwardButton = () => {
  const { seekForward } = useController();
  return (
    <BlurredControlButton onClick={seekForward}>
      <svg viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 24V14L11 15.875"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 23.3752C17.5223 23.7675 18.1715 24 18.875 24C20.6009 24 22 22.6009 22 20.875C22 19.1491 20.6009 17.75 18.875 17.75C18.1715 17.75 17.5223 17.9825 17 18.3748L17.625 14H22"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.5479 8.42028C31.2027 13.6588 31.5121 22.4595 26.2389 28.0771C20.9657 33.6948 12.1069 34.0021 6.45206 28.7636C0.797264 23.525 0.487906 14.7244 5.76109 9.10671C8.76048 5.91139 12.92 4.43414 16.9901 4.71831M15 1.5L18.5658 4.87773L15 8.5"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BlurredControlButton>
  );
};

export default SeekForwardButton;
