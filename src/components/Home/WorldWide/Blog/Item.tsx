import { BLOGS } from 'src/helpers/constants/constants';
import Image from 'next/image';
import styles from '@/components/Home/WorldWide/Blog/style.module.css';
import { Inter } from '@next/font/google';
import { combineClassNames } from 'src/helpers/functions/commons';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const Item = () => {
	return (
		<>
			{BLOGS.map((item) => {
				return (
					<article
						className={styles.section__block}
						key={item.id}
					>
						<Link href={item.link}>
							<Image
								src={item.image}
								alt={item.text}
								className={styles.section__image}
							/>

							<div className={styles.section__content}>
								<h2
									className={combineClassNames([
										styles.section__block_header,
										inter.className
									])}
								>
									{item.text}
								</h2>
							</div>
						</Link>
					</article>
				);
			})}
		</>
	);
};

export default Item;
