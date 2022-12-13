import { Inter } from '@next/font/google';
import styles from '@/components/Home/WorldWide/Testimonials/style.module.css';
import classNames from 'classnames';
import CardReview from '@/components/Home/WorldWide/Testimonials/CardReview';
import Score from '@/components/Home/WorldWide/Testimonials/Score';
import { CARD_REVIEWS, TESTIMONIALS } from 'src/helpers/constants/constants';

const inter = Inter({ subsets: ['latin'] });

const Testimonials = () => {
	return (
		<section className={styles.section}>
			<section className={styles.section__first}>
				<h2 className={classNames(styles.section__header, inter.className)}>
					Create your event wordwide
				</h2>

				<p className={classNames(styles.section__text, inter.className)}>
					Create your online events from any spot fast, easy and richable. Your users will
					see your events and even take part in online activites.
				</p>

				<div className={styles.section__statistics}>
					<div className={styles.section__statistics_cube}>
						<Score
							score={TESTIMONIALS[0].score}
							text={TESTIMONIALS[0].text}
						/>
						<Score
							score={TESTIMONIALS[1].score}
							text={TESTIMONIALS[1].text}
							isMargin={true}
						/>
					</div>

					<div className={styles.section__statistics_cube}>
						<Score
							score={TESTIMONIALS[2].score}
							text={TESTIMONIALS[2].text}
						/>
						<Score
							score={TESTIMONIALS[3].score}
							text={TESTIMONIALS[3].text}
							isMargin={true}
						/>
					</div>
				</div>
			</section>

			<section className={styles.section__second}>
				<div className={styles.section__image}>
					<section className={styles.section__cards}>
						<CardReview
							text={CARD_REVIEWS[0].text}
							avatar={CARD_REVIEWS[0].avatar}
							name={CARD_REVIEWS[0].name}
							profession={CARD_REVIEWS[0].profession}
						/>
						<div className={styles.section__cards_container}>
							<CardReview
								text={CARD_REVIEWS[1].text}
								avatar={CARD_REVIEWS[1].avatar}
								name={CARD_REVIEWS[1].name}
								profession={CARD_REVIEWS[1].profession}
							/>
							<CardReview
								text={CARD_REVIEWS[2].text}
								avatar={CARD_REVIEWS[2].avatar}
								name={CARD_REVIEWS[2].name}
								profession={CARD_REVIEWS[2].profession}
							/>
						</div>
					</section>
				</div>
			</section>
		</section>
	);
};

export default Testimonials;
