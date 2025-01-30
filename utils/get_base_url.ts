export function get_base_url() {
	if (process.env.NODE_ENV === "production") {
		return "https://"
	} else {
		return "http://localhost:"
	}
}
