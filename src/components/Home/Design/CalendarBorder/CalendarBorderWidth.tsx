import { FC } from "react";
import styles from "./styles.module.css";
import { CustomPicker } from "react-color";
type T_CalendarBorderWidth = {
  setBorderWidth: (argumnet: string) => void;
  borderWidth: string;
};

const CalendarBorderWidth: FC<T_CalendarBorderWidth> = ({
  setBorderWidth,
  borderWidth,
}) => {
  return (
    <>
      <div className={styles.slider}>
        <input
          type="range"
          min="0"
          max="10"
          value={borderWidth}
          onChange={(e) => setBorderWidth(e.target.value)}
        ></input>
      </div>
    </>
  );
};
export default CustomPicker(CalendarBorderWidth);
