import { useGSAP } from "@gsap/react"
import { RefObject } from "react"
import SplitType from "split-type"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function useHomeAnimations(scope: RefObject<any>) {
	gsap.registerPlugin(useGSAP)
	gsap.registerPlugin(ScrollTrigger)
	useGSAP(
		() => {
			let herotl = gsap.timeline()
			herotl
				.from(".anihero", {
					y: "+=30",
					opacity: 0,
					ease: "power4.inOut",
					delay: 0.3,
					duration: 1.3,
					autoAlpha: 0,
				})
				.from(".anisubh1", {
					x: "-=30",
					opacity: 0,
					ease: "power2.inOut",
					autoAlpha: 0,
				})
				.from(
					".aniherocta",
					{
						x: "+=50",
						opacity: 0,
						ease: "power2.inOut",
						autoAlpha: 0,
					},
					"<"
				)

			new SplitType(".ani001h1")
			gsap.from(".ani001h1 .char", {
				scrollTrigger: {
					trigger: ".ani001h1",
					scrub: 0.8,
					toggleActions: "restart pause reverse pause",
					end: "bottom center",
				},
				color: "#6D5C5A",
				ease: "power4.inOut",
				stagger: 0.08,
			})

			new SplitType(".ani001h2")
			gsap.from(".ani001h2 .char", {
				scrollTrigger: {
					trigger: ".ani001h2",
					scrub: 0.8,
					toggleActions: "restart pause reverse pause",
					end: "bottom center",
				},
				color: "#6D5C5A",
				ease: "power4.inOut",
				stagger: 0.08,
			})

			gsap.from(".ani001ul li", {
				scrollTrigger: {
					trigger: ".ani001ul",
					scrub: 1.2,
					toggleActions: "restart pause reverse pause",
					end: "bottom center",
				},
				color: "#6D5C5A",
				ease: "power4.inOut",
				stagger: 0.1,
			})

			let options = {
				threshold: 0.3,
			}

			const play_observer = new IntersectionObserver((entries) => {
				entries.forEach((entry: any) => {
					if (entry.isIntersecting) {
						entry.target.tagName.toLowerCase() == "video" && entry.target.play()
					} else {
						entry.target.tagName.toLowerCase() == "video" &&
							entry.target.pause()
					}
				})
			}, options)

			Array.from(document.querySelectorAll(".pskvid")).forEach((pskvid) =>
				play_observer.observe(pskvid)
			)

			gsap.utils
				.toArray([".ani002con", ".ani003con", ".ani004con", ".ani005con"])
				.forEach((element: any) => {
					gsap.from(element, {
						scrollTrigger: {
							trigger: element,
							// toggleActions: "restart pause reverse pause",
						},
						y: "-=30",
						opacity: 0,
						ease: "power4.inOut",
						delay: 0.3,
						duration: 0.8,
						autoAlpha: 0,
					})
				})

			let footertl = gsap.timeline({
				scrollTrigger: {
					trigger: ".anifootercon",
					toggleActions: "restart pause reverse pause",
					end: "bottom center",
				},
			})
			footertl
				.from(".anifootercon", {
					backgroundColor: "#6D5C5A",
					ease: "power4.inOut",
					delay: 0.3,
					duration: 0.8,
				})
				.from(".anifooterhcon", {
					x: "-=30",
					opacity: 0,
					ease: "power2.inOut",
					autoAlpha: 0,
				})
				.from(
					".anifootercta",
					{
						x: "+=50",
						opacity: 0,
						ease: "power2.inOut",
						autoAlpha: 0,
					},
					"<"
				)
				.from(".anifooterlogo", {
					rotateZ: -720,
					opacity: 0,
					ease: "back(1.7)",
					autoAlpha: 0,
					duration: 3.5,
				})
		},
		{ scope }
	)
}
