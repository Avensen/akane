const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			poppins: ['"Poppins"', 'sans-serif']
		},
		extend: {
			colors: {
				primary: '#FF4D00',
				button: '#FF863b',
				secondary: '#FFBD6E'
			}
		}
	},

	plugins: [require('daisyui')],
	daisyui: {
		styled: false,
		themes: false,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'dark'
	},
	darkMode: 'class'
};

module.exports = config;
