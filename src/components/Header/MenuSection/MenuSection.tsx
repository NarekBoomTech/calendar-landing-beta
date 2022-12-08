import styles from '@/components/Header/MenuSection/style.module.css';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Prefix from '@/assets/images/Prefix.svg';
import Image from 'next/image';
import { DEVICE_TYPES, ROUTING_URLS } from 'src/helpers/constants/constants';
type T_Props = {
	deviceType?: string;
	isProductSectionOpen: boolean;
	redirectPage: (url: string | undefined) => void;
	handleProductSection: () => void;
	handleMobileMenu?: () => void;
};

const MenuSection: FC<T_Props> = ({
	deviceType,
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
				deviceType === DEVICE_TYPES.mobile
					? styles.header__sections__wrapper__mobile
					: deviceType === DEVICE_TYPES.tablet
					? styles.header__sections__wrapper__tablet
					: styles.header__sections__wrapper
			}
		>
			<li
				onClick={handleProductSection}
				className={
					deviceType === DEVICE_TYPES.mobile
						? styles.product__section__mobile
						: styles.product__section
				}
			>
				Product
				<Image
					src={Prefix}
					alt='Picture of the author'
					style={isProductSectionOpen ? { transform: 'rotate(180deg)' } : {}}
				/>
			</li>
			<li
				onClick={() => {
					router.push(ROUTING_URLS.support);
					handleMobileMenu?.();
				}}
				style={
					path === ROUTING_URLS.support &&
					(deviceType === DEVICE_TYPES.desktop || deviceType === DEVICE_TYPES.tablet)
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
					path === ROUTING_URLS.pricing &&
					(deviceType === DEVICE_TYPES.desktop || deviceType === DEVICE_TYPES.tablet)
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
