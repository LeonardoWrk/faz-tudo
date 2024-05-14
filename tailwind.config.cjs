/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily:{
				Poppins:["Poppins"]
			}
		}
	},

	plugins: []
};

module.exports = config;
