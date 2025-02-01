import Layout from "@/components/layouts/root_layout"
import type { Metadata } from "next"
import { IBM_Plex_Mono } from "next/font/google"
import NeueMontreal from "next/font/local"
import "./globals.css"

const neue_montreal = NeueMontreal({
	src: [
		{
			path: "./fonts/NeueMontreal/NeueMontreal-Light.otf",
			weight: "200",
			style: "normal",
		},
		{
			path: "./fonts/NeueMontreal/NeueMontreal-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/NeueMontreal/NeueMontreal-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/NeueMontreal/NeueMontreal-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/NeueMontreal/NeueMontreal-Bold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/NeueMontreal/NeueMontreal-Bold.otf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-def",
	// display: "swap",
})

const ibm_plex_mono = IBM_Plex_Mono({
	variable: "--font-li",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
	title: "Passkeys Wallet",
	description:
		"Powerful developer toolkit designed to effortlessly bridge the web2/web3 (experience) gap by embedding a next-generation wallet in your site.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${neue_montreal.variable} ${ibm_plex_mono.variable} antialiased`}
			>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
