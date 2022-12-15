import FirstBlock from '@/assets/images/Home/Products/first_block.png';
import SecondBlock from '@/assets/images/Home/Products/second_block.png';
import ThirdBlock from '@/assets/images/Home/Products/third_section.png';
import { T_Blog, T_Products, T_Testimonials, T_CalendarStyles } from 'src/helpers/types/types';
import Avatar from '@/assets/images/Home/WorldWide/card_avatar.png';
import BlogImage from '@/assets/images/Home/WorldWide/Blog/blog_image.png';
import { T_NavigationField } from 'src/helpers/types/types';
import CalendarIcon from '@/assets/images/CalendarIcon.svg';
import Registration from '@/assets/images/Registration.svg';
import Subscription from '@/assets/images/Subscription.svg';
import Payment from '@/assets/images/Payment.svg';
import MobileApp from '@/assets/images/MobileApp.svg';
import ImportExportEvents from '@/assets/images/ImportExportEvents.svg';
import AddEvent from '@/assets/images/AddEvent.svg';
import Customization from '@/assets/images/Customization.svg';
import Basic from '@/assets/images/Basic.svg';
import Premium from '@/assets/images/Premium.svg';
import Busines from '@/assets/images/Business.svg';
import Ticketing from '@/assets/images/Ticketing.svg';
import ClanedarImage from '@/assets/images/Home/CalendarEvents/calendar.png';
import Clanedar2Image from '@/assets/images/Home/CalendarEvents/calendar_2.png';
import Clanedar3Image from '@/assets/images/Home/CalendarEvents/calendar_3.png';
import Lilac from '@/assets/images/Lilac.svg'
import Green from '@/assets/images/Green.svg'
import Yellow from '@/assets/images/Yellow.svg'
import Pink from '@/assets/images/Pink.svg'
import Blue from '@/assets/images/Blue.svg'

export const ROUTING_URLS = {
	support: '/support',
	pricing: '/pricing'
};

export const DEVICE_TYPES = {
	desktop: 'desktop',
	tablet: 'tablet',
	mobile: 'mobile',
	laptop: 'laptop'
};

export const PRODUCTS: T_Products[] = [
	{
		id: 1,
		title: 'Calendar Views',
		text: 'Boom Calendar layouts are 6; Monthly, Agenda, Card, Weekly, Daily, and Map view. We tried to make them for every purpose so they would be handier to use.',
		image: FirstBlock
	},
	{
		id: 2,
		title: 'Ticketing',
		text: `It's always nice to have proof that your attendees paid for the event. The ticketing system is the best way to boost the events and make them profitable.`,
		image: SecondBlock
	},
	{
		id: 3,
		title: 'Subscription',
		text: `If you don't want to check upon payment every time, let your users subscribe to the plans we suggest and get the payment automatically.`,
		image: ThirdBlock
	}
];

export const TESTIMONIALS: T_Testimonials[] = [
	{
		score: '7',
		text: 'Years of experience'
	},
	{
		score: '130',
		text: 'Countries'
	},
	{
		score: '900K',
		text: 'Product installed'
	},
	{
		score: '50+',
		text: 'Experts'
	}
];

export const CARD_REVIEWS = [
	{
		text: 'Finally a way to buy tickets easly. This is awasome tool for promoting your event everywhere.',
		avatar: Avatar,
		name: 'KSHMR',
		profession: 'Artist'
	},
	{
		text: 'Its been fun to dive into Boom Calendar. Explore tools that support my own creative process.',
		avatar: Avatar,
		name: 'Kesha Lee',
		profession: 'Artist'
	},
	{
		text: 'I can always find what Im looking for on Boom Calendar. Thank you to this awasome team.',
		avatar: Avatar,
		name: 'Andrew Huang',
		profession: 'Artist'
	}
];

export const BLOGS: T_Blog[] = [
	{
		id: 1,
		text: 'How Content Management System Works',
		image: BlogImage,
		link: `${process.env.POST}/how-content-management-system-works`
	},
	{
		id: 2,
		text: 'Psychology Tricks To Use As A Designer',
		image: BlogImage,
		link: `${process.env.POST}/psychology-tricks-to-use-as-a-designer`
	},
	{
		id: 3,
		text: 'If Programming Languages Were Human Languages',
		image: BlogImage,
		link: `${process.env.POST}/if-programming-languages-were-human-languages`
	}
];

export const PLANS_FIELD: T_NavigationField[] = [
	{
		title: 'Basic',
		description: 'For individuals or teams just getting started with project management',
		icon: Basic,
		color: '#769914'
	},
	{
		title: 'Premium',
		description: 'For teams that need to create project plans with confidence',
		icon: Premium,
		color: '#1DCFA9'
	},
	{
		title: 'Business',
		description: 'For teams and companies that need to manage work across initiatives',
		icon: Busines,
		color: '#3E1AAB'
	}
];

export const FEATURES_FIELDS: T_NavigationField[] = [
	{
		title: 'Calendar Views',
		description: 'Pick the one you like, we have it all',
		icon: CalendarIcon,
		color: '#3E1AAB'
	},
	{
		title: 'Registration',
		description: "Make sure you don't miss any participant",
		icon: Registration,
		color: '#1DCFA9'
	},
	{
		title: 'Ticketing',
		description: 'Track your assignees and make money',
		icon: Ticketing,
		color: '#CF2D48'
	},
	{
		title: 'Subscription',
		description: 'Save your users from additional work with a subscription that is on a regular basis',
		icon: Subscription,
		color: '#F2994A'
	},
	{
		title: 'Mobile App',
		description: 'Manage your events from everywhere',
		icon: MobileApp,
		color: '#2F80ED'
	},
	{
		title: 'Import Export Events',
		description: 'Take your events to other apps to be more famous',
		icon: ImportExportEvents,
		color: '#BB6BD9'
	},
	{
		title: 'Add Event',
		description: 'Let your users have their events on your calendar',
		icon: AddEvent,
		color: '#EF5DA8'
	},
	{
		title: 'Payment',
		description: 'Use this function to make money.',
		icon: Payment,
		color: '#F2C94C'
	},

	{
		title: 'Your Customization',
		description: 'Make your workspace comfy for you and for your users',
		icon: Customization,
		color: '#56CCF2'
	}
];

export const CALENDAR_FEATURES = [
	{
		id: 1,
		name: 'Calendar Views',
		text: 'Choose your favorite view that would be most convinient for your purposes and to promote your event.',
		image: ClanedarImage
	},
	{
		id: 2,
		name: 'Registration',
		text: 'Choose your favorite view that would be most convinient for your purposes and to promote your event. 123 Choose your favorite view that would be most convinient for your purposes and to promote your event. 123 Choose your favorite view that would be most convinient for your purposes and to promote your event. 123 Choose your favorite view that would be most convinient for your purposes and to promote your event. 123 ',
		image: Clanedar2Image
	},
	{
		id: 3,
		name: 'Ticketing',
		text: 'Choose your favorite view that would be most convinient for your purposes and to promote your event. 213 123',
		image: ClanedarImage
	},
	{
		id: 4,
		name: 'Subscription',
		text: 'Choose your favorite view that would be most convinient for your purposes and to promote your event. 123213',
		image: ClanedarImage
	},
	{
		id: 5,
		name: 'Add Event',
		text: 'Choose your favorite view that would be most convinient for your purposes and to promote your event. 213213',
		image: ClanedarImage
	},
	{
		id: 6,
		name: 'Import and Export Event',
		text: 'Choose your favorite view that would be most convinient for your purposes and to promote your event.  gfdg',
		image: ClanedarImage
	}
];

export const CALENDAR_VIEWS = [
	{
		name: 'Monthly',
		image: ClanedarImage
	},
	{
		name: 'Daily',
		image: Clanedar3Image
	},
	{
		name: 'Weekly',
		image: ClanedarImage
	},
	{
		name: 'Agenda',
		image: ClanedarImage
	},
	{
		name: 'Card',
		image: ClanedarImage
	},
	{
		name: 'Map',
		image: ClanedarImage
	}
];


export const stylesIcons: T_CalendarStyles[] = [
	{name: 'Lilac', icon: Lilac, color: {r: 103, g: 64, b: 234, a: 1}},
	{name: 'Green', icon: Green, color: {r: 29, g: 207, b: 169, a: 1}},
	{name: 'Yellow', icon: Yellow, color: {r: 255, g: 182, b: 18, a: 1}},
	{name: 'Pink', icon: Pink, color:{r: 255, g: 170, b: 236, a: 1}},
	{name: 'Blue', icon: Blue,color: {r: 29, g: 25, b: 238, a: 1}},
]