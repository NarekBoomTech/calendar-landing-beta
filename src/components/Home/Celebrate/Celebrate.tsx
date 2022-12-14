import styles from '@/components/Home/Celebrate/style.module.css';
import Image from 'next/image';
import Celebrate from '@/assets/images/Home/Celebrate/celebrate.png';
import CelebrateMobile from '@/assets/images/Home/Celebrate/celebrate-mobile.png';
import Button from '@/components/Button/Button';
import { useRedirect } from '@/hooks/useRedirect';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';
import { useDevice } from '@/hooks/useDevice';
import PlaIcon from '@/assets/images/Home/Celebrate/play.svg';
import GooglePlay from '@/assets/images/Home/Celebrate/google-play.svg';
import AppleStore from '@/assets/images/Home/Celebrate/apple-store.svg';
import classNames from 'classnames';
import MainPic from '@/assets/images/Home/Celebrate/main-image.png';
import MainMobilePic from '@/assets/images/Home/Celebrate/main_image_mobile.png';
import { Inter } from '@next/font/google';
import VideoModal from '@/components/Modal/VideoModal';
import { useState } from 'react';
import Line from '../Line/Line';
import Shape from '../Shape/Shape';

const inter = Inter({ subsets: ['latin'] });

const CelebrateComp = () => {
	const redirect = useRedirect();
	const device = useDevice();

	const [isOpen, setIsOpen] = useState(false);

	const isMobile = device === DEVICE_TYPES.mobile;
	const isTablet = device === DEVICE_TYPES.tablet;

	return (
		<div style={{ position: 'relative' }}>
			<section className={styles.section}>
				{!isMobile && <Shape />}

				<section className={styles.section__first}>
					<Line />

					{isMobile && <Shape />}

					<div className={styles.section__first_container}>
						<Image
							className={styles['section__celebrate-image']}
							src={isMobile ? CelebrateMobile : Celebrate}
							alt='Celebrate'
						/>

						<p className={classNames(styles.section__text, inter.className)}>
							Discover milions of events, get alerts about your favorite artists,
							teams, plays and more. Plus always secure, effortless ticketing.
						</p>

						<div className={styles.section__flex}>
							<Button
								skin='dark'
								size={isMobile ? 'small' : isTablet ? 'medium' : 'big'}
								onClick={() => redirect(process.env.SIGN_UP)}
							>
								Get Start
							</Button>

							<div
								className={styles['section__watch-container']}
								onClick={() => setIsOpen(true)}
							>
								<p className={classNames(styles.section__watch, inter.className)}>
									Watch video
								</p>
								<Image
									alt='PlayIon'
									src={PlaIcon}
								/>
							</div>
						</div>

						<div className={styles.section__compaines}>
							<Image
								src={GooglePlay}
								alt='GooglePlay'
							/>

							<Image
								src={AppleStore}
								alt='AppleStore'
							/>
						</div>
					</div>
				</section>

				<div>
					<Image
						src={MainPic}
						className={styles.section__image}
						alt='MainPic'
					/>
				</div>

				{isOpen && <VideoModal onClose={() => setIsOpen(false)} />}
			</section>

			{isMobile && (
				<Image
					src={MainMobilePic}
					className={styles['section__image--mobile']}
					alt='MainPic'
				/>
			)}
		</div>
	);
};

export default CelebrateComp;
