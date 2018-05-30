
export const getHeroes = async (limit) => {
	const heroes = await fetch(`/api/heroes?limit=${limit}`, {
		method: "GET"
	})

	return await heroes.json()
}

export const getHero = async id => {
	const hero = await fetch(`/api/heroes/${id}`, {
		method: "GET"
	})
	const res = await hero.json()

	return res[0]
}