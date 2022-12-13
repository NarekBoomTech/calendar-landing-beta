import styles from '@/components/Header/style.module.css';
import { FC } from 'react';
import Button from '@/components/Button/Button';
import MenuSection from './MenuSection/MenuSection';

type T_Props = {
	handleProductSection: () => void;
	isProductSectionOpen: boolean;
	redirectPage: (url: string | undefined) => void;
	handleMobileMenu: () => void;
	isMobile: boolean;
	isTablet: boolean
};

const MobileMenu: FC<T_Props> = ({ redirectPage, handleProductSection, isProductSectionOpen, handleMobileMenu, isMobile, isTablet }) => {
	return (
		<div className={styles.mobile_menu}>
			<MenuSection
				isProductSectionOpen={isProductSectionOpen}
				handleProductSection={handleProductSection}
				redirectPage={redirectPage}
				isTablet={isTablet}
				isMobile={isMobile}
				handleMobileMenu={handleMobileMenu}
			/>
			<div className={styles.button__wrapper}>
				<Button
					skin='dark'
					size='large'
					onClick={() => redirectPage(process.env.SIGN_UP)}
				>
					Get Started
				</Button>
				<Button
					skin='light'
					buttonName='Log In'
					size='large'
					onClick={() => redirectPage(process.env.LOG_IN)}
					color={'#3E1AAA'}
				>
					Log In
				</Button>
			</div>
		</div>
	);
};

export default MobileMenu;
