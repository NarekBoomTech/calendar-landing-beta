import CalendarFeatures from '@/components/CalendarView/CalendarFeatures';
import ManageModal from '@/components/Home/WorldWide/ManageModal/ManageModal';
import LandingComponent from '@/components/LandingComponent/LandingComponent';
import styles from '@/pages/your-customization/style.module.css';
import CustomizationImage from '@/assets/images/CustomizationImage.svg';
import SettingsImage from '@/assets/images/CustomizationImage.svg';
import DesignImage from '@/assets/images/DesignImage.svg';
import LayoutImage from '@/assets/images/LayoutImage.svg';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';
import { useDevice } from '@/hooks/useDevice';
const YourCustomization = () => {
	const device = useDevice();

	const isMobile = device === DEVICE_TYPES.mobile;
	const isLaptop = device === DEVICE_TYPES.laptop;
	const isTablet = device === DEVICE_TYPES.tablet;
	return (
		<div>
			<CalendarFeatures
				marginBottom={
					isMobile ? '260px' : isLaptop ? '340px' : isTablet ? '330px' : '380px'
				}
				image={CustomizationImage}
				header='Your Customization'
				text='We create this workspace for you, so we give you the opportunity to make it as you like. You can use our special tools to make this desk as matchy for you as it can be. We want you to enjoy every moment with us.'
				bottomText='We create this workspace for you, so we give you the opportunity to make it as you like. You can use our special tools to make this desk as matchy for you as it can be. We want you to enjoy every moment with us.'
			/>
			<LandingComponent
				image={SettingsImage}
				header='Settings'
				imageHeight={isLaptop ? '332px' : isTablet ? '239px' : isMobile ? '212px' : 'auto'}
				articlePadding={isLaptop ? '30px' : isTablet ? '20px' : '6px'}
				text="This view is perfect for showing the whole image. This layout by default shows the current month's past, recurring and upcoming events. You’re able to display the event details in two ways, as well as hide them if what you want is a simple view."
			/>
			<LandingComponent
				image={DesignImage}
				isReversed
				header='Design'
				imageHeight={isLaptop ? '332px' : isTablet ? '239px' : isMobile ? '212px' : 'auto'}
				articlePadding={isLaptop ? '54px' : isTablet ? '34px' : '10px'}
				text='Those are as the titles can hint you are for the closer future plans․ This is very fine if you want to showcase the whole week with the events’ hours. Same with the whole day, if you have many events for a day and the start and end time is all that matters.'
			/>
			<LandingComponent
				image={LayoutImage}
				isReversed
				header='Layout'
				imageHeight={isLaptop ? '332px' : isTablet ? '239px' : isMobile ? '212px' : 'auto'}
				articlePadding={isLaptop ? '54px' : isTablet ? '34px' : '34px'}
				text='Those are as the titles can hint you are for the closer future plans․ This is very fine if you want to showcase the whole week with the events’ hours. Same with the whole day, if you have many events for a day and the start and end time is all that matters.'
			/>
			<ManageModal top='0px' />
		</div>
	);
};

export default YourCustomization;
