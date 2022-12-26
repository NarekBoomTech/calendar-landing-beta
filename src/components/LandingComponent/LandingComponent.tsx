import { FC } from 'react';
import Image from 'next/image';
import styles from '@/components/LandingComponent/style.module.css';
import { Inter } from '@next/font/google';
import classNames from 'classnames';
import { useDevice } from '@/hooks/useDevice';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';

type T_Props = {
	header: string;
	text: string;
	image: HTMLImageElement;
	articlePadding: string;
	isReversed?: boolean;
	imageHeight: string;
};
const inter = Inter({ subsets: ['latin'] });
const LandingComponent: FC<T_Props> = ({
	header,
	text,
	image,
	articlePadding,
	imageHeight,
	isReversed = false
}) => {
	const device = useDevice();

	const isMobile = device === DEVICE_TYPES.mobile;
	return (
		<section
			className={styles.block}
			style={
				isMobile
					? { flexDirection: 'column-reverse', alignItems: 'center' }
					: { flexDirection: isReversed ? 'row-reverse' : 'row' }
			}
		>
			{!isMobile && (
				<Image
					src={image}
					alt='Integrations'
					className={styles.block__image}
					style={{ height: imageHeight }}
				/>
			)}
			<article
				className={styles.block__article}
				style={!isMobile ? { paddingTop: articlePadding } : {}}
			>
				<h3 className={classNames(styles.block__header, inter.className)}>{header}</h3>
				{isMobile && (
					<Image
						src={image}
						alt='Integrations'
						className={styles.block__image}
						style={{ height: imageHeight }}
					/>
				)}
				<p className={classNames(styles.block__text, inter.className)}>{text}</p>
			</article>
		</section>
	);
};

export default LandingComponent;
