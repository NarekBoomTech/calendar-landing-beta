import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from '@/components/Modal/style.module.css';

type T_Props = {
	onClose: () => void;
};

const VideoModal: FC<T_Props> = ({ onClose }) => {
	const ref = useRef<Element | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>('#portal');
		setMounted(true);
	}, []);

	return mounted && ref.current
		? createPortal(
				<div
					className={styles.modal}
					onClick={(e) => {
						const element = e.target as HTMLElement;
						if (element.className === styles.modal__container) return;
						onClose();
					}}
				>
					<div className={styles.modal__container}>
						<iframe
							src={process.env.YOUTUBE_VIDEO}
							title='Boom Video'
							className={styles.modal__iframe}
							allow='accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						></iframe>
					</div>

					<button className={styles.modal__button}>×</button>
				</div>,
				ref.current
		  )
		: null;
};

export default VideoModal;
