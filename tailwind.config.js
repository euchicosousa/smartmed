/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				brand: "#4e4993",
				accent: "#a3bd31",
				support: "#e5e4e2",
			},
		},
	},
	plugins: [],
};
