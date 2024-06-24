import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import useProgress from "../../hooks/useProgress";
import { store } from "../../store";
import useTime from "../../hooks/useTime";
const ProgressBar = () => {
  const [barWidth, setBarWidth] = useState<number>(0);
  const [passingSliderRate, setPassingSliderRate] = useState<number>(NaN);
  const sliderRectRef = useRef<HTMLSpanElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { currentTime } = store((store) => store);
  const { updateTimeOnVideo } = useTime();
  const { calculateBarWidth, calculateNewCurrTimeBySliderWidth } =
    useProgress();

  const listenToMouseDownEvent = (e: MouseEvent): void => {
    window?.addEventListener("mousemove", listenToMouseMoveEvent);
    window?.addEventListener("mouseup", listenToMouseUpEvent);
  };
  const listenToMouseUpEvent = (e: MouseEvent): void => {
    window?.removeEventListener("mousemove", listenToMouseMoveEvent);
  };
  const listenToMouseMoveEvent = (e: MouseEvent): void => {
    var sliderRect = sliderRef.current?.getBoundingClientRect();
    if (!sliderRect) return;
    setPassingSliderRate((e.clientX - sliderRect?.left) / sliderRect.width);
  };

  useEffect(() => {
    if (passingSliderRate >= 0 && passingSliderRate <= 1) {
      const currTime = calculateNewCurrTimeBySliderWidth(passingSliderRate);
      setBarWidth(calculateBarWidth(currTime));
      updateTimeOnVideo(currTime);
    }
  }, [passingSliderRate]);

  useEffect(() => {
    setBarWidth(calculateBarWidth());
  }, [currentTime]);

  useEffect(() => {
    if (sliderRectRef.current) {
      sliderRectRef.current?.addEventListener(
        "mousedown",
        listenToMouseDownEvent
      );
    }
  }, []);
  return (
    <div className={styles.wrapper}>
      <div ref={sliderRef} className={styles.bar}>
        <div style={{ width: barWidth + "%" }} className={styles.passing}>
          <span ref={sliderRectRef}></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
