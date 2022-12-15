import { FC } from 'react';
import styles from '@/components/Home/Design/style.module.css';
import HeaderColorPicker from './CalendarHeaderColor/HeaderColorPicker';
import HeaderColorOpacity from './CalendarHeaderColor/HeaderColorOpacity';
import CalendarBorderColor from './CalendarBorder/CalendarBorderColor';
import CalendarBorderWidth from './CalendarBorder/CalendarBorderWidth';
import { T_CalendarStyles, T_RGBA } from 'src/helpers/types/types';
import { Inter } from '@next/font/google';
import Styles from './Styles';
import classNames from 'classnames';
const inter = Inter({ subsets: ['latin'] });
type T_Props = {
	calendarHeaderColor: T_RGBA;
	borderColor: string;
	borderWidth: string;
	isFilledCalendarByClick: T_CalendarStyles;
	setFieldCalendarByClick: (argument: T_CalendarStyles) => void;
	setCalendarHeaderColor: (argument: T_RGBA) => void;
	setBorderColor: (argument: string) => void;
	setBorderWidth: (argument: string) => void;
};
const Settings: FC<T_Props> = ({
	calendarHeaderColor,
	borderColor,
	borderWidth,
	setCalendarHeaderColor,
	setBorderColor,
	setBorderWidth,
	isFilledCalendarByClick,
	setFieldCalendarByClick
}) => {
	return (
		<div className={styles.settings__wrapper}> 
			<Styles 
			setCalendarHeaderColor={setCalendarHeaderColor}
				setFieldCalendarByClick={setFieldCalendarByClick}
				isFilledCalendarByClick={isFilledCalendarByClick}
				 />
			<div className={styles.radioRange}>
				<h2 className={classNames( inter.className)}>Header</h2>
				<div className={styles.inputs__wrapper}>
					<div>
					<p className={classNames( inter.className)}>Color</p>
					<HeaderColorPicker
						calendarHeaderColor={calendarHeaderColor}
						setCalendarHeaderColor={setCalendarHeaderColor}
					/></div>
					<div>
					<p className={classNames( inter.className)}>Opacity</p>
					<HeaderColorOpacity
						setCalendarHeaderColor={setCalendarHeaderColor}
						calendarHeaderColor={calendarHeaderColor}
					/>
					</div>
				</div>
				<h2 className={classNames( inter.className)}>Skeleton</h2>
			<div className={styles.skeleton__wrapper}>
				<div className={styles.input__wrapper__border}>
					<div className={styles.input__text__wrapper}>
						<p className={classNames( inter.className)}>Width</p>
						<p>{borderWidth}</p>
					</div>

					<CalendarBorderWidth
						borderWidth={borderWidth}
						setBorderWidth={setBorderWidth}
					/>
			</div>
				<div className={styles.input__wrapper}>
					<p className={classNames( inter.className)}>Color</p>
					<CalendarBorderColor
						borderColor={borderColor}
						setBorderColor={setBorderColor}
					/>
				</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
