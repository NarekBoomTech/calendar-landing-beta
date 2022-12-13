import styles from '@/components/Home/Products/style.module.css';
import { Inter } from '@next/font/google';
import classNames from 'classnames';
import Block from '@/components/Home/Products/Block';
import { PRODUCTS } from 'src/helpers/constants/constants';

const inter = Inter({ subsets: ['latin'] });

const Products = () => {
	return (
		<section className={styles.section}>
			<h2 className={classNames(styles.section__header, inter.className)}>
				BoomCalendar is used to sell hundreds of millions of tickets to people in every
				country in the world.
			</h2>

			<div className={styles.section__blocks}>
				{PRODUCTS.map(({ id, text, title, image }) => {
					return (
						<Block
							key={id}
							image={image}
							title={title}
							text={text}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Products;
