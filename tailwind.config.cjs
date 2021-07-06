const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: (theme) => ({
				160: '40rem'
			}),
			backgroundImage: (theme) => ({
				'hero-image':
					'linear-gradient(to right, rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0)), url(https://res.cloudinary.com/maljuburi/image/upload/v1625291333/PictureDayProductions/class.jpg)',
				'movie-poster':
					'url(https://res.cloudinary.com/maljuburi/image/upload/v1625537580/PictureDayProductions/movie-poster-wide.png)',
				'report-card':
					'url(https://res.cloudinary.com/maljuburi/image/upload/v1625291333/PictureDayProductions/report_card.jpg)'
			})
		},
		backgroundColor: (theme) => ({
			...theme('colors'),
			card: '#bed6c8'
		})
	},
	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
