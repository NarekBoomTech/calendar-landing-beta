import CalendarFeatures from '@/components/CalendarView/CalendarFeatures';
import styles from '@/pages/calendar-views/style.module.css';
import CalendarViewImage from '@/assets/images/CalendarViewImage.svg';
import LandingComponent from '@/components/LandingComponent/LandingComponent';
import MountlyView from '@/assets/images/MountlyView.svg';
import WeeklyView from '@/assets/images/WeeklyView.svg';
import AgendaView from '@/assets/images/AgendaView.svg';
import CardView from '@/assets/images/CardView.svg';
import MapView from '@/assets/images/MapView.svg';
import ManageModal from '@/components/Home/WorldWide/ManageModal/ManageModal';
import { useDevice } from '@/hooks/useDevice';
import { DEVICE_TYPES } from 'src/helpers/constants/constants';

const CalendarViews = () => {
	const device = useDevice();

	const isMobile = device === DEVICE_TYPES.mobile;
	const isLaptop = device === DEVICE_TYPES.laptop;
	const isTablet = device === DEVICE_TYPES.tablet;
	return (
		<div>
			<CalendarFeatures
				image={CalendarViewImage}
				header={'Calendar Views'}
				text={
					'Boom Calendar layouts are 6: Monthly, Agenda, Card, Weekly, Daily, and Map view. We tried to make them for every purpose so they would be handier to use.'
				}
				bottomText={
					'Traditionally calendars are used by people who want to know what day it is. But we took this to another level and you can do more than learn the date. Probably you already know modern online calendars are used for other purposes too. And besides that, we now suggest you pick the layout/design you prefer. Let’s see what we have down there.  '
				}
			/>

			<LandingComponent
				image={MountlyView}
				header='Monthly view'
				imageHeight={isLaptop ? '332px' : isTablet ? '239px' : isMobile ? '212px' : 'auto'}
				articlePadding={isLaptop ? '20px' : isTablet ? '16px' : '34px'}
				text={
					"This view is perfect for showing the whole image. This layout by default shows the current month's past, recurring and upcoming events. You’re able to display the event details in two ways, as well as hide them if what you want is a simple view."
				}
			/>

			<LandingComponent
				image={WeeklyView}
				imageHeight={isLaptop ? '432px' : isTablet ? '312px' : isMobile ? '270px' : 'auto'}
				header='Weekly and Daily views'
				isReversed={true}
				articlePadding={isLaptop ? '32px' : isTablet ? '30px' : '54px'}
				text={
					'Those are as the titles can hint you are for the closer future plans․ This is very fine if you want to showcase the whole week with the events’ hours. Same with the whole day, if you have many events for a day and the start and end time is all that matters.'
				}
			/>

			<LandingComponent
				image={AgendaView}
				imageHeight={isLaptop ? '318px' : isTablet ? '229px' : isMobile ? '198px' : 'auto'}
				header={'Agenda view'}
				articlePadding={isLaptop ? '24px' : isTablet ? '22px' : '46px'}
				text={
					'You probably heard that fancy “put this on your Agenda” which means to add something to the plan/to-do list. This Agenda style is very, very comfortable to hold your plans. With a fresh, crispy design this is what you need to hold your things together. '
				}
			/>

			<LandingComponent
				image={CardView}
				imageHeight={isLaptop ? '378px' : isTablet ? '272px' : isMobile ? '235px' : 'auto'}
				header={'Card view'}
				isReversed={true}
				articlePadding={isLaptop ? '34px' : isTablet ? '32px' : '56px'}
				text={
					'This Card view like Agenda shows only upcoming events (which you can change in the settings) so this is some kind of another agenda tool. This card layout showcases your events like Polaroid camera photos, focusing more on the image part of events. I love the animation of this layout and how it opens up the event details.'
				}
			/>

			<LandingComponent
				image={MapView}
				imageHeight={isLaptop ? '368px' : isTablet ? '283px' : isMobile ? '230px' : 'auto'}
				header={'Map View'}
				articlePadding={isLaptop ? '20px' : isTablet ? '22px' : '34px'}
				text={
					'This layout comes to help those who’re having a hard time orientating and finding areas where the event is happening. They will see the coordinates of the place/venues where the event is happening/will happen. '
				}
			/>

			<ManageModal top='0px' />
		</div>
	);
};

export default CalendarViews;
