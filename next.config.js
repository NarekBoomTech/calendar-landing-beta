/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		LOG_IN: 'https://auth.boomtechdev.com/signin',
		SIGN_UP: 'https://auth.boomtechdev.com/signup',
		BLOG: 'https://www.boomte.ch/blog',
	  },
};

module.exports = nextConfig;
