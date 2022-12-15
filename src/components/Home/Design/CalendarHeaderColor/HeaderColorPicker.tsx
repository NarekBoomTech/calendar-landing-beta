import { FC } from "react";
import { HuePicker } from "react-color";
import styles from './styles.module.css'
type T_RGBA = {
  r: number;
  g: number;
  b: number;
  a: number;
};
type T_HeaderColor = {
  setCalendarHeaderColor: (argument: T_RGBA) => void;
  calendarHeaderColor: T_RGBA;
};

const HeaderColorPicker: FC<T_HeaderColor> = ({
  setCalendarHeaderColor,
  calendarHeaderColor,
}) => {
  const setHeaderColor = (color: any) => {
    console.log(color, "color");
    setCalendarHeaderColor(color.rgb);
  };
  return (
    <HuePicker
 className={styles.picker}
      color={calendarHeaderColor}
      onChange={setHeaderColor}
    />
  );
};
export default HeaderColorPicker;
