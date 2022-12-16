import Celebrate from '@/components/Home/Celebrate/Celebrate';
import GetToKnow from '@/components/Home/GetToKnow/GetToKnow';
import CalendarsEvents from '@/components/Home/CalendarsEvents/CalendarsEvents';
import Design from '@/components/Home/Design/Design';
import Integrations from '@/components/Home/Integrations/Integrations';
import WorldWide from '@/components/Home/WorldWide/WorldWide';
import Head from 'next/head';
import { useDevice } from '@/hooks/useDevice';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';
import Line from '@/components/Home/Line/Line';

const Home = () => {
	const device = useDevice();
	const isMobile = device === DEVICE_TYPES.mobile;

	return (
		<>
			<Head>
				<title>BoomTech</title>
				<meta
					name='description'
					content='BoomTech'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>

			<Celebrate />
			<GetToKnow />
			<CalendarsEvents />
			{!isMobile && <Design />}
			<Integrations />
			<WorldWide />
			<Line />
		</>
	);
};

export default Home;
