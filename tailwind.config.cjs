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
				secondary: '#FFBD6E',
				dark: '#272727'
			}
		},
	},
	darkMode: 'class',
};

module.exports = config;
