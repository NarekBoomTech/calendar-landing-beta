import { FC } from 'react';
import Image from 'next/image';
import styles from '@/components/Home/Design/style.module.css';
import { T_CalendarStyles, T_RGBA } from 'src/helpers/types/types';
import { stylesIcons } from 'src/helpers/constants/constants';
import { Inter } from '@next/font/google';
import classNames from 'classnames';
const inter = Inter({ subsets: ['latin'] });
type T_Props = {
	isFilledCalendarByClick: T_CalendarStyles;
	setFieldCalendarByClick: (argument: T_CalendarStyles) => void;
	setCalendarHeaderColor: (argument: T_RGBA) => void;
};

const Styles: FC<T_Props> = ({ setFieldCalendarByClick, setCalendarHeaderColor, isFilledCalendarByClick }) => {
	return (
		<div className={styles.styles__wrapper}>
			<h2 className={classNames(inter.className)}>Style</h2>
			<div className={styles.styles__icons__wrapper}>
				{stylesIcons.map((square) => {
					return (
						<div  className={isFilledCalendarByClick.name === square.name ? styles.style__icon : styles.style__icon__simple}>
							<Image
								onClick={() => {
									setFieldCalendarByClick({
										name: square.name,
										icon: square.icon,
										color: square.color
									});
									setCalendarHeaderColor(square.color);
								}}
								style={{ cursor: 'pointer' }}
								src={square.icon}
								alt='Picture of the author'
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Styles;
