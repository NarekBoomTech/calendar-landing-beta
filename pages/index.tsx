import Celebrate from '@/components/Home/Celebrate/Celebrate';
import GetToKnow from '@/components/Home/GetToKnow/GetToKnow';
import CalendarsEvents from '@/components/Home/CalendarsEvents/CalendarsEvents';
import Design from '@/components/Home/Design/Design';
import Integrations from '@/components/Home/Integrations/Integrations';
import WorldWide from '@/components/Home/WorldWide/WorldWide';
import Head from 'next/head';

const Home = () => {
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
			<Design />
			<Integrations />
			<WorldWide />
		</>
	);
};

export default Home;
