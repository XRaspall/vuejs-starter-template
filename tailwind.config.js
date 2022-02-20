module.exports = {
	content: ["./index.html", "./assets/scss/**/*.{vue,js,ts,jsx,tsx}",],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
