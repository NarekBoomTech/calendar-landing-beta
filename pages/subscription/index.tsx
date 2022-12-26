import CalendarFeatures from '@/components/CalendarView/CalendarFeatures';
import SubscriptionIcon from '@/assets/images/SubscriptionIcon.svg';
import styles from '@/pages/subscription/style.module.css';
import LandingComponent from '@/components/LandingComponent/LandingComponent';
import SubPlans from '@/assets/images/SubPlans.svg';
import ChoosePlans from '@/assets/images/ChoosePlans.svg';
import { useDevice } from '@/hooks/useDevice';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';
import ManageModal from '@/components/Home/WorldWide/ManageModal/ManageModal';
const Subscription = () => {
	const device = useDevice();

	const isMobile = device === DEVICE_TYPES.mobile;
	const isLaptop = device === DEVICE_TYPES.laptop;
	const isTablet = device === DEVICE_TYPES.tablet;
	return (
		<div>
			<CalendarFeatures
				marginBottom={
					isMobile ? '210px' : isLaptop ? '300px' : isTablet ? '300px' : '300px'
				}
				image={SubscriptionIcon}
				header='Subscription'
				text='We made those subscription plans for you to have a modern and functional Calendar app without breaking your bank account.'
				bottomText='Handle your customer subscription billing life cycle from end to end. Automate recurring billing, manage subscriptions, send professional tax-compliant invoices, and get paid on time, every time.'
			/>
			<LandingComponent
				image={SubPlans}
				header='Create Subscription Plans'
				imageHeight={isLaptop ? '332px' : isTablet ? '239px' : isMobile ? '212px' : 'auto'}
				articlePadding={isLaptop ? '30px' : isTablet ? '20px' : '50px'}
				text="This view is perfect for showing the whole image. This layout by default shows the current month's past, recurring and upcoming events. You’re able to display the event details in two ways, as well as hide them if what you want is a simple view."
			/>
			<LandingComponent
				image={ChoosePlans}
				isReversed
				header='Let your customers choose their plans'
				imageHeight={isLaptop ? '332px' : isTablet ? '239px' : isMobile ? '212px' : 'auto'}
				articlePadding={isLaptop ? '54px' : isTablet ? '34px' : '26px'}
				text='Those are as the titles can hint you are for the closer future plans․ This is very fine if you want to showcase the whole week with the events’ hours. Same with the whole day, if you have many events for a day and the start and end time is all that matters.'
			/>
			<ManageModal top='0px' />
		</div>
	);
};

export default Subscription;
