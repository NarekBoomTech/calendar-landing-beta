import styles from '@/components/Header/MenuSection/MenuSectionField/style.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { T_NavigationField } from 'src/helpers/types/types';

type T_Props = {
	field: T_NavigationField;
	handleMobileMenu: () => void;
	setProductSectionOpen: (argument: boolean) => void;
	isMobile: boolean;
};

const MenuSectionFieldComponent: FC<T_Props> = ({
	field,
	isMobile,
	setProductSectionOpen,
	handleMobileMenu
}) => {
	const router = useRouter();
	const redirectPage = () => {
		router.push(field.path ? field.path : '');
		setProductSectionOpen(false);
		isMobile && handleMobileMenu();
	};

	return (
		<div
			className={
				isMobile
					? styles.menu__section__component__wrapper__mobile
					: styles.menu__section__component__wrapper
			}
			onClick={redirectPage}
		>
			<div>
				<Image
					src={field.icon}
					alt='Picture of the author'
					style={isMobile ? { height: '20px', width: '20px' } : { height: '25px' }}
				/>
				<p style={{ color: field.color, fontFamily: 'Helvetica' }}>{field.title}</p>
			</div>

			<p className={isMobile ? styles.field__decription : ''}>{field.description}</p>
		</div>
	);
};

export default MenuSectionFieldComponent;
