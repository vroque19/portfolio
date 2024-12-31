/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					one: '#9A8C98',
					two: '#4A4E69',
					three: '#22223B'
				},
				secondary: {
          olive: '#A3A380',
          mauve: '#BB8588',
					dark_green: '#6b705c'
					// 6b705cv
        },
				neutral: {
          one: '#F2E9E4',
					two: '#C9ADA7'
        }
			}
		}
	},

	plugins: [
		require('daisyui')
	]
};
