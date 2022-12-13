import classNames from 'classnames';
import styles from '@/components/Home/WorldWide/Testimonials/style.module.css';
import { Inter } from '@next/font/google';
import { FC } from 'react';
import { T_Testimonials } from 'src/helpers/types/types';

const inter = Inter({ subsets: ['latin'] });

const Score: FC<T_Testimonials> = ({ score, text, isMargin }) => {
	return (
		<article className={isMargin ? styles.section__statistics_container : ''}>
			<p className={classNames(styles.section__statistics_title, inter.className)}>{score}</p>
			<p className={classNames(inter.className, styles.section__statistics_text)}>{text}</p>
		</article>
	);
};

export default Score;
