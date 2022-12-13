import styles from '@/components/Home/CalendarsEvents/style.module.css';
import { Inter } from '@next/font/google';
import Products from '@/components/Home/Products/Products';
import classNames from 'classnames';
import Image from 'next/image';
import { CALENDAR_FEATURES, CALENDAR_VIEWS } from 'src/helpers/constants/constants';
import { useState } from 'react';

import Wave from '@/assets/images/Home/CalendarEvents/wave.png';

const inter = Inter({ subsets: ['latin'] });

const CalendarsEvents = () => {
	const featureFirstName = CALENDAR_FEATURES[0].name;

	const [features, setFeatures] = useState({
		name: featureFirstName,
		text: CALENDAR_FEATURES[0].text
	});

	const [image, setImage] = useState(CALENDAR_FEATURES[0].image);

	const [views, setViews] = useState({
		name: CALENDAR_VIEWS[0].name
	});

	return (
		<section className={styles.section}>
			<section className={styles.section__calendar}>
				<h2 className={classNames(styles.section__header, inter.className)}>
					It is all about making events with fun
				</h2>

				<div className={styles.buttons}>
					{CALENDAR_FEATURES.map(({ name, text, image, id }) => {
						return (
							<button
								className={classNames(styles.section__button, inter.className, {
									[styles['section__button--active']]: name === features.name
								})}
								onClick={() => {
									setFeatures({ name, text });

									setImage(image);

									if (name !== featureFirstName) {
										setViews({ name: CALENDAR_VIEWS[0].name });
									}
								}}
								key={id}
							>
								{name}
							</button>
						);
					})}
				</div>

				<section className={styles.section__content}>
					<article className={styles.section__texts}>
						<p className={classNames(styles.section__text, inter.className)}>
							{features.text}
						</p>

						{features.name === featureFirstName && (
							<div className={styles.section__views}>
								{CALENDAR_VIEWS.map(({ name, image }, key) => {
									return (
										<button
											key={key}
											className={classNames(
												styles['section__view-button'],
												{
													[styles['section__view-button--active']]:
														name === views.name
												},
												inter.className
											)}
											onClick={() => {
												setViews({ name });
												setImage(image);
											}}
										>
											{name}
										</button>
									);
								})}
							</div>
						)}
					</article>

					<article className={styles.section__image_container}>
						<Image
							className={styles.section__image}
							src={image}
							alt='Picture of the author'
						/>
					</article>
				</section>
			</section>

			<Image
				src={Wave}
				alt='Wave'
				className={styles.section__wave}
			/>

			<Products />
		</section>
	);
};

export default CalendarsEvents;
