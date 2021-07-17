const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: () => ({
				160: '40rem'
			}),
			backgroundImage: () => ({
				'hero-image':
					'linear-gradient(to right, rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0)), url(https://res.cloudinary.com/maljuburi/image/upload/v1625291333/PictureDayProductions/class.jpg)',
				'movie-poster':
					'url(https://res.cloudinary.com/maljuburi/image/upload/v1626504660/PictureDayProductions/movie-poster-wide-v2.png)',
				'report-card':
					'url(https://res.cloudinary.com/maljuburi/image/upload/v1625291333/PictureDayProductions/report_card.jpg)',
				'bio-image':
					'url(https://res.cloudinary.com/maljuburi/image/upload/v1625291259/PictureDayProductions/JB_2020.jpg)'
			})
		},
		backgroundColor: (theme) => ({
			...theme('colors'),
			card: '#bed6c8'
		}),
		fontFamily: {
			lato: 'Lato, sans-serif',
			old: '"Old Standard TT", serif'
		}
	},
	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
