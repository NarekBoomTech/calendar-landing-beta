import Button from '@/components/Button/Button';
import styles from '@/components/Home/GetToKnow/style.module.css';
import { useDevice } from '@/hooks/useDevice';
import { useRedirect } from '@/hooks/useRedirect';
import { Inter } from '@next/font/google';
import classNames from 'classnames';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';

const inter = Inter({ subsets: ['latin'] });

const GetToKnow = () => {
	const redirect = useRedirect();
	const device = useDevice();

	return (
		<section className={styles.section}>
			<h1 className={classNames(styles.section__header, inter.className)}>
				Get to know{' '}
				<span className={classNames(styles['section__header--ative'], inter.className)}>
					BoomCalendar
				</span>
			</h1>

			<p className={classNames(styles.section__text, inter.className)}>
				The Boom Event Calendar allows you to make events with many features
			</p>

			<Button
				skin='dark'
				size={device === DEVICE_TYPES.mobile ? 'small' : 'big'}
				onClick={() => redirect(process.env.SIGN_UP)}
			>
				Get Started
			</Button>
		</section>
	);
};

export default GetToKnow;
