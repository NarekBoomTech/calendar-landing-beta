import { FC } from 'react';
import styles from '@/components/Footer/style.module.css';
import { footerColumns } from 'src/helpers/constants/constants';
import Image from 'next/image';
import facebook from '@/assets/images/facebook.svg';
import twitter from '@/assets/images/twitter.svg';
import Instagram from '@/assets/images/Instagram.svg';
import youtube from '@/assets/images/youtube.svg';
import logo from '@/assets/images/Logo.svg';
import ColumnComponent from './ColumnComponent';
import classNames from 'classnames';
import Shape from '@/components/Home/Shape/Shape'
import { Inter } from '@next/font/google';
import { useRouter } from 'next/router';
import { combineClassNames } from 'src/helpers/functions/commons';

type T_Props = {};
const inter = Inter({ subsets: ['latin'] });
const Footer: FC<T_Props> = () => {
	const router = useRouter();
	const path = router.asPath;

	return (
		<footer
			className={combineClassNames([
				styles.footer,
				path.substring(1) && styles.footer__with__background
			])}
		>
			{path.substring(1) && <Shape top />}
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
				<h3 className={classNames(inter.className)}>FIND US ON SOCIAL MEDIA</h3>
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
				</div>
			</div>
		</footer>
	);
};

export default Footer;
