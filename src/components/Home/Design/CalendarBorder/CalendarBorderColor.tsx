import { FC } from "react";
import { HuePicker } from "react-color";
import styles from './styles.module.css'

type T_CalendarBorderColor = {
  setBorderColor: (argument: string) => void;
  borderColor: string;
};

const CalendarBorderColor: FC<T_CalendarBorderColor> = ({
    setBorderColor,
  borderColor,
}) => {
  const setHeaderColor = (color: any) => {
    setBorderColor(color.hex);
  };
  return (
    <HuePicker
 className={styles.picker}
      color={borderColor}
      onChange={setHeaderColor}
    />
  );
};
export default  CalendarBorderColor