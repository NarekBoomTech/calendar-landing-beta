import styles from '@/components/Button/style.module.css';
import { Inter } from '@next/font/google';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

type T_ButtonProps = PropsWithChildren<{
	skin: 'light' | 'dark' | 'transparent';
	size: 'small' | 'medium' | 'big' | 'large';
	buttonName?: string;
	width?: number;
	borderRadius?: number;
	onClick: () => void;
	color?: string;
}>;

const inter = Inter({ subsets: ['latin'] });

const Button: FC<T_ButtonProps> = ({
	skin,
	size,
	onClick,
	color,
	width,
	borderRadius,
	children
}) => {
	return (
		<button
			onClick={onClick}
			className={classNames(
				`${styles[skin]} ${styles[size]}  ${styles.button}`,
				inter.className
			)}
			style={{
				color,
				width,
				borderRadius
			}}
		>
			{children}
		</button>
	);
};

export default Button;
