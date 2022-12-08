import styles from '@/components/Button/style.module.css';
import { FC, PropsWithChildren } from 'react';

type T_ButtonProps = PropsWithChildren<{
	skin: 'light' | 'dark';
	size: 'small' | 'medium' | 'large';
	buttonName?: string;
	onClick: () => void;
	color?: string;
}>;

const Button: FC<T_ButtonProps> = ({ skin, size, onClick, color, children }) => {
	return (
		<button
			onClick={onClick}
			className={`${styles[skin]} ${styles[size]}  ${styles.button}`}
			style={{
				color: color
			}}
		>
			{children}
		</button>
	);
};

export default Button;
