import { useEffect, useState } from 'react';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';

export const useDevice = () => {
	const [device, setDevice] = useState<string>('');
	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (window.innerWidth <= 768) {
				setDevice(DEVICE_TYPES.mobile);
			} else if (window.innerWidth <= 1024) {
				setDevice(DEVICE_TYPES.tablet);
			} else {
				setDevice(DEVICE_TYPES.desktop);
			}
		}
	}, []);

	return device;
};
