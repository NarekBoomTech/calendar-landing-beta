import styles from '@/components/Home/Integrations/style.module.css';
import IntegrationsImage from '@/assets/images/Home/Integrations/integration.png';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

const Integrations = () => {
	return (
		<section className={styles.section}>
			<section className={styles.section__first}>
				<h2 className={classNames(styles.section__header, inter.className)}>
					Make easier to create event with our Integrations
				</h2>
				<p className={classNames(styles.section__text, inter.className)}>
					Discover milions of events, get alerts about your favorite artists, teams, plays
					and more. Plus alway s secure, effortless ticketing.
				</p>
			</section>

			<section>
				<Image
					src={IntegrationsImage}
					alt='Integrations'
					className={styles.section__image}
				/>
			</section>
		</section>
	);
};

export default Integrations;
