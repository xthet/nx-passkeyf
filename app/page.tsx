"use client"
import { useScroll } from "@/hooks/useScroll"
import Logolg from "@/public/icons/logo_lg"
import Logosm from "@/public/icons/logo_sm"
import Logotxt from "@/public/icons/logo_txt"
import { vurl } from "@/resources/constants/vurl"
import Link from "next/link"
import { BsArrowUpRight, BsFillCheckCircleFill } from "react-icons/bs"

export default function Home() {
	const { scrollY } = useScroll()
	// const media_lg = useMediaQuery({ minWidth: "1024px" })
	// const media_md = useMediaQuery({ minWidth: "800px" })

	return (
		<section className="w-full max-w-[1440px] def-pdg">
			<nav
				className={
					scrollY <= 15
						? "bg-none border-none backdrop-blur-none fixed z-40 left-0 right-0 top-0 max-h-[46px] md:max-h-[48px] overflow-hidden w-full def-pdg"
						: "backdrop-blur-md fixed z-40 left-0 right-0 top-0 max-h-[46px] md:max-h-[48px] overflow-hidden w-full def-pdg"
				}
			>
				<div className="size-full md:hidden py-2 fl-cl fl-sb gap-4">
					<Link href={"/"} className="fl-cc">
						<Logosm className="size-[28px]" />
					</Link>
					<span className="cursor-pointer fl-cl fl-c gap-2 hover-fade">
						<span className="h-[2px] w-[30px] bg-txtcol"></span>
						<span className="h-[2px] w-[30px] bg-txtcol"></span>
					</span>
				</div>

				<div className="size-full hidden py-2 md:fl-cl md:fl-sb gap-4">
					<Link href={"/"} className="fl-cc gap-1 relative hover-fade">
						<Logosm className="size-[28px]" />
						<Logotxt className="hidden xl:inline-block absolute left-0" />
					</Link>

					<span className="uppercase font-mono text-sm grid grid-cols-2 w-[252px] h-[32px] rounded-sm cursor-pointer items-center relative border border-txtcol overflow-hidden">
						<span className="absolute w-[126px] z-10  left-0 top-0 bottom-0 bg-txtcol"></span>
						<span className="size-full fl-cc text-pricol text-center self-stretch relative z-20">
							your users
						</span>
						<span className="size-full fl-cc text-txtcol text-center self-stretch relative z-20">
							your devs
						</span>
					</span>

					<span className="uppercase fl-cr gap-4 font-mono text-sm">
						<Link href={""}>docs</Link>
						<Link href={""}>playground</Link>
						<Link href={""}>wallet</Link>
						<button className="py-1 px-4 rounded-sm bg-txtcol text-pricol hover:bg-defcol hover:text-txtcol duration-300 cursor-pointer uppercase text-sm text-center fl-cc">
							start building
						</button>
					</span>
				</div>
			</nav>

			<section className="w-full h-svh overflow-hidden fl-cr fl-c">
				<div className="w-full fl-tl fl-c gap-4 pb-8">
					<small className="text-xs uppercase font-medium font-mono">
						[000. WHERE IT ALL STARTS]
					</small>
					<h1 className="uppercase text-[40px] font-bold w-full md:text-[88px] leading-[0.8]">
						One-click Web3 onboarding with Passkeys Developer kit
					</h1>
					<div className="w-full fl-tl fl-c gap-4 md:fl-r md:fl-cl md:border-y md:border-txtcol md:gap-0">
						<div className="fl-cl border-y border-txtcol md:border-y-0 md:border-r py-4 md:py-8 w-full md:w-[45%] md:flex-grow">
							<p className="text-2xl leading-[1.1] md:text-[32px]">
								Simplify wallet creation and funding for new{" "}
								<br className="hidden lg:inline-block" /> web3 users through
								biometric login
							</p>
						</div>
						<div className="w-full grid grid-cols-2 gap-2 md:w-[55%] md:p-8 max-w-[418px]">
							<button className="w-full text-sm p-3 fl-cc gap-1 text-center font-mono rounded-sm bg-txtcol cursor-pointer border border-txtcol text-pricol hover:text-txtcol hover:border-defcol hover:bg-defcol duration-300">
								<span>PLAYGROUND</span>
								<BsArrowUpRight />
							</button>
							<button className="w-full text-sm p-3 fl-cc gap-1 text-center font-mono rounded-sm bg-transparent cursor-pointer border border-txtcol text-txtcol hover:text-txtcol hover:border-defcol hover:bg-defcol duration-300">
								<span>DEVELOPER DOCS</span>
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full fl-tl fl-c gap-6 md:fl-bl md:fl-r border-b border-txtcol pb-12">
				<div className="w-full fl-tl fl-c gap-6 md:max-w-[771px] md:w-2/3 md:flex-grow">
					<small className="text-xs uppercase font-medium font-mono">
						[001. SIMPLE SIGNUP]
					</small>
					<h3 className="text-[2rem] md:text-[88px] md:leading-[0.95] leading-none md:font-medium">
						Stop new user drop off with just a few lines of code.{" "}
					</h3>
					<h3 className="text-[2rem] md:text-[88px] md:leading-[0.95] leading-none md:font-medium">
						Reduce churn and empower new users to start transacting without
						leaving your platform.{" "}
					</h3>
					<ul className="fl-tl fl-c w-full list-none gap-4 pt-12">
						<li className="fl-tl w-full gap-2">
							<BsFillCheckCircleFill className="size-5 mt-2" />
							<span className="text-lg md:text-[2rem] w-1/2 flex-grow">
								New users create and fund their self-custodial Passkeys wallet
								directly on your website.
							</span>
						</li>
						<li className="fl-tl w-full gap-2">
							<BsFillCheckCircleFill className="size-5 mt-2" />
							<span className="text-lg md:text-[2rem] w-1/2 flex-grow">
								No seed phrase, no browser extension, and no email verification
								required.
							</span>
						</li>
						<li className="fl-tl w-full gap-2">
							<BsFillCheckCircleFill className="size-5 mt-2" />
							<span className="text-lg md:text-[2rem] w-1/2 flex-grow">
								Authentication through biometrics provides users with a secure,
								seamless and familiar experience.
							</span>
						</li>
					</ul>
				</div>

				<div className="w-[330px] bg-defcol aspect-[0.595/1] rounded-[2.5rem] relative overflow-hidden fl-cc mx-auto md:ml-auto md:mr-0">
					<video
						src="/videos/video_i.webm"
						autoPlay
						loop
						className="aspect-[0.6/1] max-w-[300px] overflow-hidden object-cover object-center "
					></video>
				</div>
			</section>

			<section className="w-full fl-tl fl-c gap-6 md:fl-bl md:fl-r border-b border-txtcol py-12">
				<div className="w-full fl-tl fl-c gap-6 max-w-[643px]">
					<small className="text-xs uppercase font-medium font-mono">
						[002. FUNDING]
					</small>
					<h2 className="text-[40px] md:text-[80px] font-bold uppercase leading-[0.8] w-full">
						Frictionless Funding
					</h2>
					<p className="text-2xl md:text-[2rem] leading-[1.1] md:leading-[1] ">
						Enable new users to purchase crypto directly within an embedded
						wallet on your platform, ensuring higher user retention.
					</p>
					<Link
						href={`${vurl}/playground`}
						className="text-sm fl-cl gap-1 hover:pb-1 hover:border-b hover:border-txtcol duration-300 uppercase font-mono"
					>
						<span>Try it out</span>
						<BsArrowUpRight />
					</Link>
				</div>
				<div className="w-[330px] bg-defcol aspect-[0.6/1] rounded-[2.5rem] relative overflow-hidden fl-cc mx-auto md:ml-auto md:mr-0">
					<video
						src="/videos/video_ii.webm"
						autoPlay
						loop
						className="aspect-[0.6/1] max-w-[300px] overflow-hidden object-cover object-center "
					></video>
				</div>
			</section>

			<section className="w-full fl-tl fl-c gap-6 md:fl-bl md:fl-r border-b border-txtcol py-12">
				<div className="w-full fl-tl fl-c gap-6 max-w-[643px]">
					<small className="text-xs uppercase font-medium font-mono">
						[003. LIQUIDITY]
					</small>
					<h2 className="text-[40px] md:text-[80px] font-bold uppercase leading-[0.8] w-full">
						Unlock Liquidity
					</h2>
					<p className="text-2xl md:text-[2rem] leading-[1.1] md:leading-[1] ">
						Leverage untapped liquidity from unsupported networks through
						seamless cross-chain swaps.
					</p>
					<Link
						href={`${vurl}/playground`}
						className="text-sm fl-cl gap-1 hover:pb-1 hover:border-b hover:border-txtcol duration-300 uppercase font-mono"
					>
						<span>Try it out</span>
						<BsArrowUpRight />
					</Link>
				</div>
				<div className="w-full max-w-[640px] bg-defcol aspect-[1.326/1] xl:aspect-[1.326/1.02] rounded-[2.75rem] relative overflow-hidden fl-cc mx-auto md:ml-auto md:mr-0">
					<video
						src="/videos/video_iii.webm"
						autoPlay
						loop
						className="aspect-[1.326/1] max-w-[600px] overflow-hidden object-cover object-center "
					></video>
				</div>
			</section>

			<section className="w-full fl-tl fl-c gap-6 md:fl-bl md:fl-r border-b border-txtcol py-12">
				<div className="w-full fl-tl fl-c gap-6 max-w-[643px]">
					<small className="text-xs uppercase font-medium font-mono">
						[004. CROSS-APPLICATION]
					</small>
					<h2 className="text-[40px] md:text-[80px] font-bold uppercase leading-[0.8] w-full">
						One Wallet For All
					</h2>
					<p className="text-2xl md:text-[2rem] leading-[1.1] md:leading-[1] ">
						Passkeys embedded wallets are portable across different
						applications, allowing you to engage a growing network of users.
					</p>
					<Link
						href={`${vurl}/playground`}
						className="text-sm fl-cl gap-1 hover:pb-1 hover:border-b hover:border-txtcol duration-300 uppercase font-mono"
					>
						<span>Try it out</span>
						<BsArrowUpRight />
					</Link>
				</div>
			</section>

			<section className="w-full fl-tl fl-c gap-6 md:fl-cl border-b border-txtcol py-12">
				<div className="w-full fl-cl fl-c gap-6 max-w-[643px] mx-auto text-center">
					<small className="text-xs uppercase font-medium font-mono">
						[005. Free Your Team]
					</small>
					<h2 className="text-[40px] md:text-[80px] font-bold uppercase leading-[0.8] w-full">
						Focus on What Matters Most
					</h2>
					<p className="text-2xl md:text-[2rem] leading-[1.1] md:leading-[1] ">
						Streamline user onboarding with minimal code, freeing your team to
						build your core product.
					</p>
				</div>
				<div className="w-full bg-pricol aspect-[2.35/1] rounded-md relative overflow-hidden fl-cc mx-auto md:ml-auto md:mr-0 mt-12">
					<video
						src="/videos/video_iv.mp4"
						autoPlay
						loop
						className="aspect-[2.35/1] w-full overflow-hidden object-cover object-center "
					></video>
				</div>
			</section>

			<section className="w-full fl-tl fl-c gap-6 py-12">
				<div className="w-full fl-tl fl-c gap-6">
					<small className="text-xs uppercase font-medium font-mono">
						[006. Passkeys Developer Kit]
					</small>
					<h2 className="text-[40px] md:text-[80px] font-bold uppercase leading-[0.8] w-full">
						Let our SDK do the work
					</h2>
					<p className="text-2xl md:text-[2rem] leading-[1.1] md:leading-[1] ">
						Embed the Passkeys wallet on your platform with just a few lines of
						code.
					</p>
				</div>
				<section className="w-auto na-pdg">
					<div className="w-screen relative overflow-x-auto grid grid-cols-[repeat(4,min(80vw,392px))] gap-4 def-pdg no-scroll ">
						{[
							{
								title: "Quick Integration",
								content:
									"Leverage compatibility with existing libraries like Wagmi or Solana Wallet Adapter for a smooth, drop-in integration.",
								link: "/docs/quickstart",
								src: "/videos/grid_video_i.mp4",
							},
							{
								title: "Security Powered by MPC",
								content:
									"Multi-party computation ensures user safety with features like spending limits, while maintaining self-custody.",
								link: "/docs/faq#security",
								src: "/videos/grid_video_ii.mp4",
							},
							{
								title: "Custom Themes",
								content:
									"Choose colors and defaults, and make the Passkeys wallet blend seamlessly with your platform.",
								link: "/docs/api-reference/wallet-widget#propstheme",
								src: "/videos/grid_video_iii.mp4",
							},
							{
								title: "Multichain Support",
								content:
									"Bitcoin, Ethereum, Polygon, Solana, Arbitrum One, Avalanche, Base, BNB Chain, Mantle and Optimism.",
								link: "/docs/api-reference/create-wallet#networks",
								src: "/videos/grid_video_iv.mp4",
							},
						].map((e, i) => {
							return (
								<div
									key={i}
									className="w-full fl-tl fl-c gap-4 p-2 rounded-md bg-[#D3BDBB] text-balance"
								>
									<div className="w-full rounded-md overflow-hidden bg-[#F7E5E9]">
										<video
											src={e.src}
											className="w-full aspect-[1.586/1] object-cover object-center"
											loop
											autoPlay
										></video>
									</div>
									<div className="w-full fl-tl text-defcol fl-c gap-10 self-stretch">
										<div className="fl-tl fl-c w-full gap-2">
											<h4 className="text-2xl">{e.title}</h4>
											<p className="text-lg md:leading-[1.1] leading-[1.2] w-full">
												{e.content}
											</p>
										</div>
										<Link
											href={`${vurl}${e.link}`}
											className="text-sm fl-cl gap-1 hover:pb-1 hover:border-b hover:border-defcol duration-300 uppercase font-mono"
										>
											<span>learn more</span>
											<BsArrowUpRight />
										</Link>
									</div>
								</div>
							)
						})}
					</div>
				</section>
			</section>

			<footer className="w-auto na-pdg">
				<div className="w-screen px-4 pb-8">
					<div className="w-full rounded-sm bg-txtcol text-pricol fl-tl fl-c relative p-4 overflow-hidden">
						<div className="w-full fl-tl fl-c gap-4 pb-6 border-b border-pricol md:fl-r md:fl-bl md:fl-sb">
							<div className="w-full fl-tl fl-c h-[110vw] max-h-[600px] fl-sb md:h-[unset] md:gap-8">
								<h2 className="text-[2rem] md:text-[3.5rem] max-w-[780px] leading-[0.95] w-[82%] md:w-full">
									Embrace the future of crypto with the Passkeys Developer Kit.
								</h2>
								<p className="text-xl md:text-[2rem] leading-[1.2] max-w-[510px]">
									Start building now or experience how Passkeys can help you
									reduce drop-off in our playground.
								</p>
							</div>

							<div className="w-full grid grid-cols-2 gap-2 md:max-w-[394px]">
								<button className="w-full uppercase text-sm p-3 fl-cc gap-1 text-center font-mono rounded-sm bg-pricol cursor-pointer border border-pricol text-txtcol hover:text-txtcol hover:border-defcol hover:bg-defcol duration-300">
									<span>start building</span>
									<BsArrowUpRight />
								</button>
								<button className="w-full text-sm p-3 fl-cc gap-1 text-center font-mono rounded-sm bg-transparent cursor-pointer border border-pricol text-pricol hover:text-txtcol hover:border-defcol hover:bg-defcol duration-300 uppercase">
									<span>playground</span>
									<BsArrowUpRight />
								</button>
							</div>
						</div>
						<div className="w-full fl-br fl-sb gap-4 mt-10 md:mt-[10rem]">
							<Logosm className="size-[5.25rem] md:hidden" />
							<div className="fl-tl fl-c gap-10 w-1/2 text-sm max-w-[500px] md:ml-auto md:flex-row-reverse md:fl-br">
								<ul className="fl-tl fl-c gap-3 w-full md:fl-r md:w-1/2 md:flex-grow md:fl-sb">
									<li>
										<Link href={""}>Developer Docs</Link>
									</li>
									<li>
										<Link href={""}>Terms of Service</Link>
									</li>
									<li>
										<Link href={""}>Privacy Policy</Link>
									</li>
								</ul>
								<small className="text-xs">
									©{new Date().getFullYear()} — THT
								</small>
							</div>
						</div>
						<div className="absolute -bottom-[3rem] left-4 hidden md:block md:fl-cc">
							<Logosm className="size-[12rem]" />
						</div>
					</div>
				</div>
			</footer>
		</section>
	)
}
