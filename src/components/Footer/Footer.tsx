import { FC } from 'react';
import styles from '@/components/Footer/style.module.css';
import { footerColumns } from 'src/helpers/constants/constants';
import ColumnComponent from '@/components/Footer/ColumnComponent';
import Image from 'next/image';
import facebook from '@/assets/images/facebook.svg';
import twitter from '@/assets/images/twitter.svg';
import Instagram from '@/assets/images/Instagram.svg';
import youtube from '@/assets/images/youtube.svg';
import logo from '@/assets/images/Logo.svg';
type T_Props = {};

const Footer: FC<T_Props> = () => {
	return (
		<footer className={styles.footer}>
			<Image
				className={styles.footer__logo}
				src={logo}
				alt='Picture of the author'
			/>
			{footerColumns.map((column, key) => (
				<ColumnComponent
					key={key}
					column={column}
				/>
			))}

			<div className={styles.social__wrapper}>
				<h3>FIND US ON SOCIAL</h3>
				<div className={styles.social__icon__wrapper}>
					<Image
						className={styles.social__icon}
						src={facebook}
						alt='Picture of the author'
					/>
					<Image
						className={styles.social__icon}
						src={twitter}
						alt='Picture of the author'
					/>
					<Image
						className={styles.social__icon}
						src={Instagram}
						alt='Picture of the author'
					/>
					<Image
						className={styles.social__icon}
						src={youtube}
						alt='Picture of the author'
					/>
				</div>
				<div className={styles.footer__privacy}>
					<div>
						<a href=''>Terms of Use</a>
						<a href=''>Contact</a>
					</div>
					<div>
						<a href=''>Privacy Policy</a>
						<a href=''>Help</a>
					</div>
					<div>
						<a href=''>Jobs</a>
						<a href=''>Help</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
