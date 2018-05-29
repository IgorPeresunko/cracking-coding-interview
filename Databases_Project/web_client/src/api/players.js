
export const getPlayers = async () => {
	const res = await fetch(`/api/players`, {
		method: "GET",
	})
	const players = await res.json()

	return players
}

export const getPlayersByTeam = async id => {
	const res = await fetch(`/api/players/${id}`, {
		method: "GET",
	})
	const players = await res.json()

	return players
}