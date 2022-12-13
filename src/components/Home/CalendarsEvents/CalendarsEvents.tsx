import styles from '@/components/Home/CalendarsEvents/style.module.css';
import { Inter } from '@next/font/google';
import Products from '@/components/Home/Products/Products';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

const CalendarsEvents = () => {
	return (
		<section className={styles.section}>
			<section className={styles.section__calendar}>
				<h2 className={classNames(styles.section__header, inter.className)}>
					It is all about making events with fun
				</h2>
			</section>

			<Products />
		</section>
	);
};

export default CalendarsEvents;
