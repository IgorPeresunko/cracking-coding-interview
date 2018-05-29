
export const getTeams = async (limit) => {
	const teams = await fetch(`/api/teams?limit=${limit}`, {
		method: "GET"
	})

	return await teams.json()
}

export const getTeam = async id => {
	const team = await fetch(`/api/teams/${id}`, {
		method: "GET"
	})
	const res = await team.json()

	return res[0]
}