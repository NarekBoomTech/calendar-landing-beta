import styles from '@/components/Header/MenuSection/style.module.css';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Prefix from '@/assets/images/Prefix.svg';
import Image from 'next/image';
import { ROUTING_URLS } from 'src/helpers/constants/constants';
import Navigation from '@/components/Header/MenuSection/Navigation';
type T_Props = {
	isProductSectionOpen: boolean;
	setProductSectionOpen: (argument: boolean) => void;
	redirectPage: (url: string | undefined) => void;
	handleProductSection: () => void;
	handleMobileMenu: () => void;
	isMobile: boolean;
	isTablet: boolean;
};

const MenuSection: FC<T_Props> = ({
	isMobile,
	isTablet,
	isProductSectionOpen,
	setProductSectionOpen,
	redirectPage,
	handleProductSection,
	handleMobileMenu
}) => {
	const router = useRouter();
	const path = router.asPath;
	return (
		<ul
			className={
				isMobile
					? styles.header__sections__wrapper__mobile
					: styles.header__sections__wrapper
			}
		>
			<div
				className={
					isMobile
						? styles.product__section__opened__mobile
						: isTablet
						? styles.header__sections__wrapper__tablet
						: styles.product__section__opened
				}
				onMouseEnter={!isMobile && !isTablet ? handleProductSection : () => null}
				onMouseLeave={!isMobile && !isTablet ? handleProductSection : () => null}
			>
				<li
					onClick={isMobile || isTablet ? handleProductSection : () => null}
					className={isMobile ? styles.product__section__mobile : styles.product__section}
					style={
						(!isProductSectionOpen && isTablet) || (isProductSectionOpen && isMobile)
							? { border: 'none' }
							: {}
					}
				>
					Product
					<Image
						className={styles.product__prefic__icon}
						src={Prefix}
						alt='Picture of the author'
						style={isProductSectionOpen ? { transform: 'rotate(180deg)' } : {}}
					/>
				</li>
				{isProductSectionOpen && (
					<Navigation
						isTablet={isTablet}
						isMobile={isMobile}
						isProductSectionOpen={isProductSectionOpen}
						setProductSectionOpen={setProductSectionOpen}
						handleMobileMenu={handleMobileMenu}
					/>
				)}
			</div>

			<li
				onClick={() => {
					router.push(ROUTING_URLS.support);
					isMobile && handleMobileMenu?.();
				}}
				style={
					path === ROUTING_URLS.support && !isMobile && !isProductSectionOpen
						? { borderBottom: '1px solid #3E1AAB' }
						: {}
				}
			>
				Support
			</li>

			<li
				onClick={() => {
					router.push(ROUTING_URLS.pricing);
					isMobile && handleMobileMenu?.();
				}}
				style={
					path === ROUTING_URLS.pricing && !isMobile && !isProductSectionOpen
						? { borderBottom: '1px solid #3E1AAB' }
						: {}
				}
			>
				Pricing
			</li>

			<li
				onClick={() => {
					redirectPage(process.env.BLOG);
				}}
			>
				Blog
			</li>
		</ul>
	);
};

export default MenuSection;
