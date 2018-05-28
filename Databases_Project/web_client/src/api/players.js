
export const getPlayers = async () => {
	const res = await fetch(`/api/players`, {
		method: "GET",
	}).then(res => res.json())

	if (res.success) {
		return res.videos
	} else {
		alert('Error. Try to refresh')
		return []
	}
}