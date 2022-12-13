import { useRouter } from 'next/router';

export const useRedirect = () => {
	const router = useRouter();

	const redirect = (url: string | undefined) => {
		router.push(String(url));
	};

	return redirect;
};
