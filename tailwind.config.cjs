const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [
      require('@tailwindcss/forms'),
    ],
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
