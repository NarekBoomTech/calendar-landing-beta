import { useEffect, useState } from 'react';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';

export const useDevice = () => {
	const [device, setDevice] = useState<string>('');
	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (window.innerWidth <= 767) {
				setDevice(DEVICE_TYPES.mobile);
			} else if (window.innerWidth <= 1023) {
				setDevice(DEVICE_TYPES.tablet);
			} else if (window.innerWidth <= 1439) {
				setDevice(DEVICE_TYPES.laptop);
			} else {
				setDevice(DEVICE_TYPES.desktop);
			}
		}
	}, []);

	return device;
};
