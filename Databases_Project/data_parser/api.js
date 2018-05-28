import request from "request-promise-native"

const endpoints = {
	root: 'https://api.opendota.com/api/',
	players: 'proPlayers/',
	matches: 'proMatches/',
	match: 'matches/',
	player: 'players/',
	teams: 'teams/',
	leagues: 'leagues/',
	heroes: 'heroStats/'
}

export default {
	data: ['heroes', 'leagues', 'matches', 'players', 'teams'],
	endpoints,
	request: url => request(`${endpoints.root}${url}`)
};