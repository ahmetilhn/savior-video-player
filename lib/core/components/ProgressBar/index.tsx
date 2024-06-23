import { useEffect,  useState } from "react";
import styles from "./index.module.scss";
import useProgress from "../../hooks/useProgress";
import { store } from "../../store";
const ProgressBar = () => {
  const { currentTime } = store((store) => store);
  const [barWidth, setBarWidth] = useState<number>(0);
  const { calculateBarWidth } = useProgress();

  useEffect(() => {
    setBarWidth(calculateBarWidth());
  }, [currentTime]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.bar}>
        <div style={{ width: barWidth + "%" }} className={styles.passing}>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
