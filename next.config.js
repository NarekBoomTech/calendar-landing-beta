/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: false,
	devIndicators: {
		buildActivity: false
	},
    images: {
        unoptimized: true
    },
	env: {
		LOG_IN: 'https://auth.boomtechdev.com/signin',
		SIGN_UP: 'https://auth.boomtechdev.com/signup',
		BLOG: 'https://www.boomte.ch/blog',
		YOUTUBE_VIDEO: 'https://www.youtube.com/embed/sRWAUVsvzyA',
		POST: 'https://www.boomte.ch/post'
	}
};

module.exports = nextConfig;
