import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import useProgress from "../../hooks/useProgress";
import { store } from "../../store";
import useTime from "../../hooks/useTime";
import { debounce } from "../../utils/awesome.util";
const ProgressBar = () => {
  const [currentBarWidth, setCurrentBarWidth] = useState<number>(0); // out of 100
  const [desiredBarWidth, setDesiredBarWidth] = useState<number>(0); // out of 100
  const barRectRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const { currentTime } = store((store) => store);
  const { updateTimeOnVideo } = useTime();
  const {
    calculateNewCurrTimeByBarWidth,
    calculateBarWidthByPassingTime,
    loadedBarWidth,
  } = useProgress();

  const listenToMouseDownEvent = (e: MouseEvent): void => {
    window?.addEventListener("mousemove", listenToMouseMoveEvent);
    window?.addEventListener("mouseup", listenToMouseUpEvent);
  };
  const listenToMouseUpEvent = (e: MouseEvent): void => {
    window?.removeEventListener("mousemove", listenToMouseMoveEvent);
  };
  const listenToMouseMoveEvent = (e: MouseEvent): void => {
    const barClientRect = barRef.current?.getBoundingClientRect();
    if (!barClientRect) return;
    const progressedRate =
      ((e.clientX - barClientRect?.left) / barClientRect.width) * 100;
    if (progressedRate < 0) {
      setDesiredBarWidth(0);
      return;
    } else if (progressedRate > 100) {
      setDesiredBarWidth(100);
      return;
    }
    setDesiredBarWidth(progressedRate);
  };

  const getNewCurrTime = useMemo<number>(() => {
    return calculateNewCurrTimeByBarWidth(desiredBarWidth);
  }, [desiredBarWidth]);

  const debouncedTimeSetter = useCallback(
    debounce(() => updateTimeOnVideo(getNewCurrTime), 500),
    [getNewCurrTime]
  );

  useEffect(() => {
    setCurrentBarWidth(calculateBarWidthByPassingTime(getNewCurrTime));
    debouncedTimeSetter();
  }, [desiredBarWidth]);

  useEffect(() => {
    setCurrentBarWidth(calculateBarWidthByPassingTime());
  }, [currentTime]);

  useEffect(() => {
    if (barRectRef.current) {
      barRectRef.current?.addEventListener("mousedown", listenToMouseDownEvent);
    }
    return () => {
      barRectRef.current?.removeEventListener(
        "mousedown",
        listenToMouseDownEvent
      );
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <div ref={barRef} className={styles.bar}>
        <div
          style={{ width: currentBarWidth + "%" }}
          className={styles.passing}
        >
          <span ref={barRectRef}></span>
        </div>
        <div
          style={{ width: loadedBarWidth + "%" }}
          className={styles.loaded}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
