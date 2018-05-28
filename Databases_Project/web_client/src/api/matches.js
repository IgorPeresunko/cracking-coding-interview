
export const getMatches = async (limit) => {
	const matches = await fetch(`/api/matches?limit=${limit}`, {
		method: "GET"
	})

	return await matches.json()
}