// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		backgroundImage: {
		  'hero-pattern': "url('/src/assets/portada-moon-minds.png')",
		  'footer-texture': "url('/img/footer-texture.png')",
		},
	  },
	},
	plugins: [require('daisyui')],
  }