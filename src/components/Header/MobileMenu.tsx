import styles from '@/components/Header/style.module.css';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';
import Button from '@/components/Button/Button';
import MenuSection from './MenuSection/MenuSection';

type T_Props = {
	handleProductSection: () => void;
	isProductSectionOpen: boolean;
	redirectPage: (url: string | undefined) => void;
	handleMobileMenu: () => void
};

const MobileMenu: FC<T_Props> = ({ redirectPage, handleProductSection, isProductSectionOpen, handleMobileMenu }) => {
	return (
		<div className={styles.mobile_menu}>
			<MenuSection
				isProductSectionOpen={isProductSectionOpen}
				handleProductSection={handleProductSection}
				redirectPage={redirectPage}
				deviceType={DEVICE_TYPES.mobile}
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
