import { RefObject } from "react"

export default function scroll_to(element: RefObject<HTMLElement | undefined>) {
	window.scrollTo({
		behavior: "smooth",
		top: element.current!.offsetTop - 60,
	})
}
