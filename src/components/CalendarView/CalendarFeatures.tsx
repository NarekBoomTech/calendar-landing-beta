import Button from '@/components/Button/Button';
import styles from '@/components/CalendarView/style.module.css';
import { useDevice } from '@/hooks/useDevice';
import { useRedirect } from '@/hooks/useRedirect';
import { Inter } from '@next/font/google';
import classNames from 'classnames';
import { FC } from 'react';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';
import Image from 'next/image';
import Shape from '../Home/Shape/Shape';
import BlueWave from '@/assets/images/BlueWave.svg';
type T_Props = {
	header: string;
	text: string;
	image: HTMLImageElement;
	bottomText: string;
	// imageWidth: string;
	// imageHeight: string;
	marginBottom: string
};

const inter = Inter({ subsets: ['latin'] });

const CalendarFeatures: FC<T_Props> = ({
	header,
	text,
	image,
	bottomText,
	// imageWidth,
	// imageHeight,
	marginBottom
}) => {
	const redirect = useRedirect();
	const device = useDevice();
	return (
		<section className={styles.section__wrapper}>
			{/* <div style={{ position: 'relative' }}> */}
				<section className={styles.section}
						style={{marginBottom}}
				>
					<Image
						src={BlueWave}
						alt='Wave'
						className={styles.section__wave}
					/>
					<h1 className={classNames(styles.section__header, inter.className)}>
						{header}
					</h1>

					<p className={classNames(styles.section__text, inter.className)}>{text}</p>

					<Button
						skin='dark'
						size={
							device === DEVICE_TYPES.mobile
								? 'small'
								: device === DEVICE_TYPES.laptop || device === DEVICE_TYPES.tablet
								? 'medium'
								: 'big'
						}
						onClick={() => redirect(process.env.SIGN_UP)}
					>
						Get Started
					</Button>

					<Image
						src={image}
						alt='Integrations'
						className={styles.section__image}
						// style={
						// 	device === DEVICE_TYPES.desktop
						// 		? { width: imageWidth, height: imageHeight }
						// 		: {}
						// }
					/>
					<p className={classNames(styles.section__bottom__text, inter.className)}>
						{bottomText}
					</p>
					<Shape />
				</section>
			{/* </div> */}
		</section>
	);
};
export default CalendarFeatures;
