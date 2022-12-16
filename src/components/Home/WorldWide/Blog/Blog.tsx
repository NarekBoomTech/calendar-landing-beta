import styles from '@/components/Home/WorldWide/Blog/style.module.css';
import { Inter } from '@next/font/google';
import classNames from 'classnames';
import { useDevice } from '@/hooks/useDevice';
import Button from '@/components/Button/Button';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';
import { useRedirect } from '@/hooks/useRedirect';
import Item from '@/components/Home/WorldWide/Blog/Item';

const inter = Inter({ subsets: ['latin'] });

const Blog = () => {
	const device = useDevice();
	const redirect = useRedirect();

	return (
		<section className={styles.section}>
			{device === DEVICE_TYPES.mobile && (
				<h2 className={classNames(styles.section__header, inter.className)}>
					Read Our Blog
				</h2>
			)}

			<div className={styles.section__slider}>
				{device !== DEVICE_TYPES.mobile && (
					<h2 className={classNames(styles.section__header, inter.className)}>
						Read Our Blog
					</h2>
				)}

				<div className={styles.section__slides}>
					<Item />
				</div>

				{device !== DEVICE_TYPES.mobile && (
					<div className={styles.setion__button}>
						<Button
							skin='dark'
							width={device === DEVICE_TYPES.tablet ? 173 : 232}
							size={device === DEVICE_TYPES.mobile ? 'small' : 'medium'}
							borderRadius={105}
							onClick={() => redirect(process.env.BLOG)}
						>
							Discover More
						</Button>
					</div>
				)}
			</div>

			{device === DEVICE_TYPES.mobile && (
				<div className={styles.setion__button}>
					<Button
						skin='dark'
						width={170}
						size={'medium'}
						borderRadius={105}
						onClick={() => redirect(process.env.BLOG)}
					>
						Discover More
					</Button>
				</div>
			)}
		</section>
	);
};

export default Blog;
