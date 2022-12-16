import styles from '@/components/Home/Line/style.module.css';
import BoomLogo from '@/assets/images/Home/Line/boom_logo.svg';
import Circle from '@/assets/images/Home/Line/circle.svg';
import Pencil from '@/assets/images/Home/Line/pencil.svg';
import Smile from '@/assets/images/Home/Line/smile.svg';
import Heart from '@/assets/images/Home/Line/heart.svg';
import Image from 'next/image';
import classNames from 'classnames';

const Line = () => {
	return (
		<div className={styles.container}>
			<Image
				src={BoomLogo}
				alt='A'
				className={styles.boom_logo}
			/>

			<div className={classNames(styles.line_one, styles.line)}></div>

			<Image
				src={Circle}
				className={styles.circle}
				alt='A'
			/>

			<div className={classNames(styles.line_two, styles.line)}></div>

			<Image
				src={Circle}
				className={styles.circle}
				alt='A'
			/>

			<div className={classNames(styles.line_three, styles.line)}></div>

			<Image
				src={Circle}
				className={styles.circle}
				alt='A'
			/>

			<div className={classNames(styles.line_four, styles.line)}></div>

			<Image
				src={Pencil}
				className={styles.pencil}
				alt='A'
			/>

			<div className={classNames(styles.line_five, styles.line)}></div>

			<Image
				src={Smile}
				className={styles.smile}
				alt='A'
			/>

			<div className={classNames(styles.line_six, styles.line)}></div>

			<Image
				src={Heart}
				alt='heart'
				className={styles.heart}
			/>
		</div>
	);
};

export default Line;
