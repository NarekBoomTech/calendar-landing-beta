import Button from '@/components/Button/Button';
import styles from '@/components/Home/WorldWide/ManageModal/style.module.css';
import { useDevice } from '@/hooks/useDevice';
import { useRedirect } from '@/hooks/useRedirect';
import { Inter } from '@next/font/google';
import classNames from 'classnames';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';

const inter = Inter({ subsets: ['latin'] });

const ManageModal = () => {
	const redirect = useRedirect();
	const device = useDevice();

	return (
		<section className={styles.section}>
			<h2 className={classNames(styles.section__header, inter.className)}>
				Manage your event easly with BoomCalendar
			</h2>

			<Button
				skin='transparent'
				width={device === DEVICE_TYPES.mobile ? 157 : 191}
				size={'medium'}
				borderRadius={105}
				onClick={() => redirect(process.env.SIGN_UP)}
			>
				Get Started
			</Button>
		</section>
	);
};

export default ManageModal;
