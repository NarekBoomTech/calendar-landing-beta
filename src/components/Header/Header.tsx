import styles from '@/components/Header/style.module.css';
import Button from '@/components/Button/Button';
import Logo from '@/assets/images/Logo.svg';
import Burger from '@/assets/images/Burger.svg';
import CloseMobileMenu from '@/assets/images/CloseMobileMenu.svg';
import Image from 'next/image';
import { useDevice } from '@/hooks/useDevice';
import { useRouter } from 'next/router';
import { DEVICE_TYPES, ROUTING_URLS } from 'src/helpers/constants/constants';
import { FC, useState } from 'react';
import MobileMenu from '@/components/Header/MobileMenu';
import MenuSection from '@/components/Header/MenuSection/MenuSection';

type T_Props = {};

const Header: FC<T_Props> = () => {
	const device = useDevice();
	const router = useRouter();
	const isMobile = device === DEVICE_TYPES.mobile;
	const isTablet = device === DEVICE_TYPES.tablet;
	const [isProductSectionOpen, setProductSectionOpen] = useState<boolean>(false);
	const [mobileBurgerOpened, setMobileBurgerOpened] = useState<boolean>(false);
	const handleMobileMenu = () => {
		document.body.style.overflow = mobileBurgerOpened ? 'auto' : 'hidden';
		setMobileBurgerOpened(!mobileBurgerOpened);
	};
	const handleProductSection = () => setProductSectionOpen(!isProductSectionOpen);
	const redirectPage = (url: string | undefined) => router.push(String(url));

	const handleMobileMenuOpen = () => {
		handleMobileMenu(), setProductSectionOpen(false);
	}
	
	return (
		<header>
			{mobileBurgerOpened && (
				<MobileMenu
					handleProductSection={handleProductSection}
					isProductSectionOpen={isProductSectionOpen}
					redirectPage={redirectPage}
					handleMobileMenu={handleMobileMenu}
					isTablet={isTablet}
					isMobile={isMobile}
					setProductSectionOpen={setProductSectionOpen}
				/>
			)}
			<div className={styles.header__wrapper}>
				<div className={styles.header__left__part}>
					<Image
						onClick={() => router.push(ROUTING_URLS.home)}
						width={device === DEVICE_TYPES.mobile ? 24 : 42}
						height={device === DEVICE_TYPES.mobile ? 24 : 42}
						src={Logo}
						alt='Picture of the author'
						className={styles.logo}
					/>

					{device !== DEVICE_TYPES.mobile && (
						<MenuSection
							isProductSectionOpen={isProductSectionOpen}
							handleProductSection={handleProductSection}
							redirectPage={redirectPage}
							isMobile={isMobile}
							isTablet={isTablet}
							setProductSectionOpen={setProductSectionOpen}
							handleMobileMenu={handleMobileMenu}
						/>
					)}
				</div>
				<div className={styles.header__right__part}>
					<li
						onClick={() => redirectPage(process.env.LOG_IN)}
						className={styles.header__login__button}
					>
						Log In
					</li>
					<Button
						skin='dark'
						size={device === DEVICE_TYPES.mobile ? 'small' : 'medium'}
						onClick={() => redirectPage(process.env.SIGN_UP)}
					>
						Get Started
					</Button>
					{device === DEVICE_TYPES.mobile && (
						<Image
							width={16}
							height={12}
							src={mobileBurgerOpened ? CloseMobileMenu : Burger}
							alt='Picture of the author'
							onClick={handleMobileMenuOpen}
						/>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
