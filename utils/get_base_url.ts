export function get_base_url() {
	if (process.env.NODE_ENV === "production") {
		return "https://passkeys.tht.agency"
	} else {
		return "http://localhost:3000"
	}
}
