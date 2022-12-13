import styles from '@/components/Home/WorldWide/Testimonials/style.module.css';
import { Inter } from '@next/font/google';
import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { T_CardReviews } from 'src/helpers/types/types';

const inter = Inter({ subsets: ['latin'] });

const CardReview: FC<T_CardReviews> = ({ text, avatar, name, profession }) => {
	return (
		<article className={styles.card}>
			<div>
				<h3 className={classNames(styles.card__header, inter.className)}>{text}</h3>

				<div className={styles.card__flex}>
					<Image
						src={avatar}
						alt={name}
						className={styles.card_avatar}
					/>

					<div>
						<h5 className={classNames(styles.card__name, inter.className)}>{name}</h5>
						<p className={classNames(styles.card__profession, inter.className)}>
							{profession}
						</p>
					</div>
				</div>
			</div>
		</article>
	);
};

export default CardReview;
