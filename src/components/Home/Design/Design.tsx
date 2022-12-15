import styles from '@/components/Home/Design/style.module.css';
import { useState } from 'react';
import { T_CalendarStyles, T_RGBA } from 'src/helpers/types/types';
import CalenDarComponent from './CalenDarComponent';
import Settings from './Settings';
import { Inter } from '@next/font/google';
import classNames from 'classnames';
import Lilac from '@/assets/images/Lilac.svg';
const inter = Inter({ subsets: ['latin'] });

function Design() {
	const [borderColor, setBorderColor] = useState<string>('#efefef');
	const [isFilledCalendarByClick, setFieldCalendarByClick] = useState<T_CalendarStyles>({
		icon: Lilac,
		name: 'Lilac',
		color: { r: 103, g: 64, b: 224, a: 1 }
	});
	const [borderWidth, setBorderWidth] = useState<string>('1');
	const [calendarHeaderColor, setCalendarHeaderColor] = useState<T_RGBA>({
		r: 103,
		g: 64,
		b: 224,
		a: 1
	});
	return (
		<div className={styles.calendar__design__wrapper}>
			<div>
				<h2 className={classNames(styles.celandar__design__title, inter.className)}>
					Make the design {<span>GREAT</span>} again
				</h2>
				<p className={classNames(styles.calendar__design__subtitle, inter.className)}>
					Choose your favorite view and make your design
				</p>
			</div>
			<div className={styles.calendar__design__section}>
				<CalenDarComponent
					borderColor={borderColor}
					calendarHeaderColor={calendarHeaderColor}
					borderWidth={borderWidth}
				/>
				<Settings
					setFieldCalendarByClick={setFieldCalendarByClick}
					isFilledCalendarByClick={isFilledCalendarByClick}
					borderColor={borderColor}
					borderWidth={borderWidth}
					calendarHeaderColor={calendarHeaderColor}
					setBorderColor={setBorderColor}
					setCalendarHeaderColor={setCalendarHeaderColor}
					setBorderWidth={setBorderWidth}
				/>
			</div>
		</div>
	);
}

export default Design;
