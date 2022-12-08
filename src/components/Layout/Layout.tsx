import { ReactNode } from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

type T_Props = {
	children: ReactNode;
};

const Layout = ({ children }: T_Props) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
