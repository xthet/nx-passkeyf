import type { Config } from "tailwindcss"
import { fxbx } from "./resources/constants/flexbox"

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				pricol: "var(--pricol)",
				txtcol: "var(--txtcol)",
				seccol: "var(--seccol)",
				defcol: "var(--defcol)",
				subcol: "var(--subcol)",
			},
			fontFamily: {
				mono: ["var(--font-li)", "sans-serif"],
			},
			screens: {
				"2xl": "90rem",
			},
		},
	},
	plugins: [...fxbx],
} satisfies Config
