import styles from '@/components/Header/MenuSection/style.module.css';
import { FC } from 'react';
import { FEATURES_FIELDS, PLANS_FIELD } from 'src/helpers/constants/constants';
import MenuSectionFieldComponent from './MenuSectionField/MenuSectionFieldComponent';


type T_Props = {
	isProductSectionOpen: boolean;
	isMobile: boolean;
};

const Navigation: FC<T_Props> = ({ isProductSectionOpen, isMobile }) => {
	return (
		<nav
			className={
				isMobile
					? isProductSectionOpen
						? styles.navigation__wrapper__mobile
						: styles.navigation__wrapper__mobile__none
					: styles.navigation__wrapper
			}
		>
			<div>
				{!isMobile && <p className={styles.plans__titles}>Features</p>}
				<div
					className={
						isMobile
							? styles.feature__wrapper__mobile
							: styles.feature__wrapper
					}
				>
					{FEATURES_FIELDS.map((field) => (
						<MenuSectionFieldComponent  field={field} />
					))}
				</div>
			</div>
			{!isMobile && <div className={styles.divider__line}></div>}
			<div>
				{!isMobile && <p className={styles.plans__titles}>Plans</p>}
				<div
					className={
						isMobile
							? styles.plans__wrapper__mobile
							: styles.plans__wrapper
					}
				>
					{PLANS_FIELD.map((field) => (
						<MenuSectionFieldComponent field={field} />
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
