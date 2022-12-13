import styles from '@/components/Header/MenuSection/MenuSectionField/style.module.css';
import { useDevice } from '@/hooks/useDevice';
import Image from 'next/image';
import { FC } from 'react';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';

import { T_NavigationField } from 'src/helpers/types/types';

type T_Props = {
	field: T_NavigationField;
};

const MenuSectionFieldComponent: FC<T_Props> = ({ field }) => {
	const device = useDevice();
	const isMobile = device === DEVICE_TYPES.mobile;
	return (
		<div
			className={
				isMobile
					? styles.menu__section__component__wrapper__mobile
					: styles.menu__section__component__wrapper
			}
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
