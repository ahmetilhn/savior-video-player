import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import useProgress from "../../hooks/useProgress";
import { store } from "../../store";
import useController from "../../hooks/useController";
const ProgressBar = () => {
  const [currentBarWidth, setCurrentBarWidth] = useState<number>(0); // out of 100
  const [desiredBarWidth, setDesiredBarWidth] = useState<number>(0); // out of 100
  const barRectRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const { currentTime } = store((store) => store);
  const { changeCurrentTime } = useController();
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
  const listenToMouseMoveEvent = useCallback(
    (e: MouseEvent): void => {
      const barClientRect = barRef.current?.getBoundingClientRect();
      if (!barClientRect) return;
      const progressedRate =
        ((e.clientX - barClientRect?.left) / barClientRect.width) * 100;
      if (!isFinite(progressedRate) || isNaN(progressedRate)) {
        return;
      } else if (progressedRate < 0) {
        setDesiredBarWidth(desiredBarWidth);
        return;
      } else if (progressedRate > 100) {
        setDesiredBarWidth(100);
        return;
      }
      setDesiredBarWidth(progressedRate);
    },
    [barRef.current]
  );

  const getNewCurrTime = useMemo(() => {
    return calculateNewCurrTimeByBarWidth(desiredBarWidth);
  }, [desiredBarWidth]);

  useEffect(() => {
    setCurrentBarWidth(calculateBarWidthByPassingTime(getNewCurrTime));
    changeCurrentTime(getNewCurrTime);
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
  }, [barRectRef]);
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
