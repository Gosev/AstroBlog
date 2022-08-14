/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
    /*colors: {
      ...colors,
      black: colors.black,
      white: colors.white,
      gray: {...colors.gray, '100':"#FAF9F8", '200':"#ededed" }, //"#e2e2e2
      red:           '#ff5d55',
      orange:        '#FFAC58',
      yellow:        '#ffa834',
      darkgreen:     '#469936',
      green:         '#8FC01F',
      lightgreen:    '#BBD877',
      logogray:      '#575756',
      hmred:         '#d6001c',
      beige:         '#EEEAE5',
      darkgray:      '#434343',
      dark:          '#3D3D3D',
    },*/
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
}
