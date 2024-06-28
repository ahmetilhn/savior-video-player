import { useEffect, useState } from "react";
import useCaption from "../../hooks/useCaption";
import { store } from "../../store";
import styles from "./index.module.scss";
const Caption = () => {
  const [captionBlock, setCaptionBlock] = useState<
    CaptionBlockType | undefined
  >(undefined);
  const { currentTime, isControlPanelVisible, isPlay } = store(
    (store) => store
  );
  const { getCaptionByTime } = useCaption();

  useEffect(() => {
    setCaptionBlock(getCaptionByTime(currentTime));
  }, [currentTime]);
  return (
    <>
      {captionBlock ? (
        <div
          style={{ bottom: isControlPanelVisible ? "15%" : "11%" }}
          className={styles.container}
        >
          <span dangerouslySetInnerHTML={{ __html: captionBlock.text }} />
        </div>
      ) : null}
    </>
  );
};

export default Caption;
