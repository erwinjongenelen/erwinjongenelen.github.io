/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
		'typed-cursor',
    	'scroll-smooth',
		'right-[110px]',
		'text-primary',
		'text-secondary',
		'text-tertiary',
		'text-quaternary',
		'text-quinary',
	],
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1440px'
		},
		extend: {
			fontFamily: {
				'poppins': ['"Poppins"', 'sans-serif']
			},
			colors: {
				primary: '#171940',
				secondary: '#2e2473',
				tertiary: '#7663f2',
				quaternary: '#d9b97e',
				quinary: '#a64444',
				dark: '#171819',
				darkest: '#050505'
			},
			zIndex: {
				'sidebar': '999',
				'topbar': '888',
				'10': '10',
				'20': '20',
				'30': '30'
			}
		},
	},
	plugins: [],
}
