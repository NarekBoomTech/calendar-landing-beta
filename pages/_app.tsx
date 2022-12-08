import '@/assets/css/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper, store } from '@/store/store';
import Layout from '@/components/Layout/Layout';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
};

export default wrapper.withRedux(App);
