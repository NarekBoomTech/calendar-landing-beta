import { FC } from 'react';
import styles from '@/components/Footer/style.module.css';
import { Inter } from '@next/font/google';
import classNames from 'classnames';
import { T_FooterFields } from 'src/helpers/types/types';
const inter = Inter({ subsets: ['latin'] });
type T_Props = {
	column: T_FooterFields;
};

const ColumnComponent: FC<T_Props> = ({ column }) => {
	return (
		<div className={styles.footer__column__wrapper}>
			<h3 className={classNames(styles.footer__column__title, inter.className)}>
				{column.title}
			</h3>
			<div className={styles.footer__column__fields__wrapper}>
				{column.fields.map((field) => {
					return (
						<a
							href={field.href}
							className={classNames(styles.footer__column__field, inter.className)}
						>
							{field.name}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default ColumnComponent;
