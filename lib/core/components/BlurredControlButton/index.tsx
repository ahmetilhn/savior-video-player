import { ReactNode } from "react";
import styles from "./index.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};
const BlurredControlButton: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick()}
      className={`${styles.btn} ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export default BlurredControlButton;
