
export const getMatches = async (limit) => {
	const matches = await fetch(`/api/matches?limit=${limit}`, {
		method: "GET"
	})

	return await matches.json()
}

export const getMatch = async id => {
	const match = await fetch(`/api/matches/${id}`, {
		method: "GET"
	})
	const res = await match.json()

	return res[0]
}

export const createMatch = async body => {
	const match = await fetch(`/api/matches`, {
		method: "POST",
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	})
	return await match.json()
}

export const updateMatch = async (id, body) => {
	const match = await fetch(`/api/matches/${id}`, {
		method: "PUT",
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	})
	return await match.json()
}

export const deleteMatch = async id => {
	const match = await fetch(`/api/matches/${id}`, {
		method: "DELETE"
	})
	return await match.json()
}