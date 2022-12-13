import styles from '@/components/Header/MenuSection/style.module.css';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Prefix from '@/assets/images/Prefix.svg';
import Image from 'next/image';
import {  ROUTING_URLS } from 'src/helpers/constants/constants';
import Navigation from '@/components/Header/MenuSection/Navigation';
type T_Props = {
	isProductSectionOpen: boolean;
	redirectPage: (url: string | undefined) => void;
	handleProductSection: () => void;
	handleMobileMenu?: () => void;
	isMobile: boolean;
	isTablet: boolean;
};

const MenuSection: FC<T_Props> = ({
	isMobile,
	isTablet,
	isProductSectionOpen,
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
					: isTablet
					? styles.header__sections__wrapper__tablet
					: styles.header__sections__wrapper
			}
		>
			<div
				className={
					isMobile
						? styles.product__section__opened__mobile
						: styles.product__section__opened
				}
			>
				<li
					onClick={handleProductSection}
					className={isMobile ? styles.product__section__mobile : styles.product__section}
					style={isProductSectionOpen ? { border: 'none' } : {}}
				>
					Product
					<Image
						className={styles.product__prefic__icon}
						src={Prefix}
						alt='Picture of the author'
						style={isProductSectionOpen ? { transform: 'rotate(180deg)' } : {}}
					/>
				</li>
				<Navigation
					isMobile={isMobile}
					isProductSectionOpen={isProductSectionOpen}
				/>
			</div>

			<li
				onClick={() => {
					router.push(ROUTING_URLS.support);
					handleMobileMenu?.();
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
					handleMobileMenu?.();
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
