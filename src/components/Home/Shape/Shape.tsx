import styles from '@/components/Home/Shape/style.module.css';
import classNames from 'classnames';
import { FC } from 'react';

type T_Props = {
	top?: true;
};

const Shape: FC<T_Props> = ({ top }) => {
	return (
		<svg
			viewBox='0 0 1280 84'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={classNames(styles.svg, { [styles.svg__top]: top })}
		>
			<path
				d='M0 0C0 0 224 84 640 84C1056 84 1280 0 1280 0V84H0V0Z'
				fill='white'
			></path>
		</svg>
	);
};

export default Shape;
