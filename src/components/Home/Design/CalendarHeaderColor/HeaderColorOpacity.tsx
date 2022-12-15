import { FC } from "react";
import { AlphaPicker } from "react-color";
import styles from "./styles.module.css";
type T_RGBA = {
  r: number;
  g: number;
  b: number;
  a: number;
};
type T_HeaderOpacity = {
  setCalendarHeaderColor: (argument: T_RGBA) => void;
  calendarHeaderColor: T_RGBA;
};

const HeaderColorOpacity: FC<T_HeaderOpacity> = ({
  calendarHeaderColor,
  setCalendarHeaderColor,
}) => {
  const setOpacity = (color: any) => {
    setCalendarHeaderColor({ ...calendarHeaderColor, a: color.rgb.a });
  };
  return (
    <AlphaPicker
      className={styles.picker}
      color={calendarHeaderColor || "#000000"}
      onChange={setOpacity}
    />
  );
};
export default HeaderColorOpacity;
