import { ImageProps } from 'next/image';

export type T_Products = {
	id?: number;
	title: string;
	text: string;
	image: ImageProps['src'];
};

export type T_Testimonials = {
	score: string;
	text: string;
	isMargin?: boolean;
};

export type T_CalendarViews = {
	name: string;
	image: ImageProps['src'];
};

export type T_CalendarFeatures = {
	id: number;
	name: string;
	text: string;
	image: ImageProps['src'];
};

export type T_CardReviews = {
	text: string;
	avatar: ImageProps['src'];
	name: string;
	profession: string;
};

export type T_Blog = {
	id: number;
	text: string;
	image: ImageProps['src'];
	link: string;
};

export type T_NavigationField = {
	title: string;
	description: string;
	icon: ImageProps['src'];
	color: string;
};

export type T_RGBA = {
	r: number;
	g: number;
	b: number;
	a: number;
};

export type T_CalendarStyles = {
	name: string;
	icon: ImageProps['src'];
	color: T_RGBA;
	background: T_RGBA;
};

export type T_FooterFields = {
	title: string;
	fields: { name: string; href: string }[];
};
