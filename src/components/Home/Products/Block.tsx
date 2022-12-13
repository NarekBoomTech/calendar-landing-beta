import { FC } from 'react';
import styles from '@/components/Home/Products/style.module.css';
import { Inter } from '@next/font/google';
import Image from 'next/image';
import classNames from 'classnames';
import { T_Products } from 'src/helpers/types/types';

const inter = Inter({ subsets: ['latin'] });

const Block: FC<T_Products> = ({ title, text, image }) => {
	return (
		<article className={styles.block}>
			<article>
				<Image
					src={image}
					alt='Celebrate'
					className={styles.block__image}
				/>
			</article>

			<article>
				<h3 className={classNames(styles.block__header, inter.className)}>{title}</h3>
				<p className={classNames(styles.block__text, inter.className)}>{text}</p>
			</article>
		</article>
	);
};

export default Block;
