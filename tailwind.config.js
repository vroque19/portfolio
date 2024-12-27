/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#D8A48F',
				secondary: {
          olive: '#A3A380',
          mauve: '#BB8588',
        },
				neutral: {
          beige: '#D6CE93',
          cream: '#EFEBCE',
        }
			}
		}
	},

	plugins: []
};
