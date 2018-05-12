const request = require('request-promise-native')

const api = {
	root: 'https://api.opendota.com/api/',
	players: 'proPlayers/',
	matches: 'proMatches/',
	match: 'matches/',
	player: 'players/',
	teams: 'teams/'
}

const getPlayer = id =>
	request(api.root + api.player + id)

const getMatch = id =>
	request(api.root + api.match + id)

const getMatches = () =>
	request(api.root + api.matches)

const getPlayers = () =>
	request(api.root + api.players)

const getTeams = () =>
	request(api.root + api.teams)

		
module.exports = {
	getPlayer,
	getPlayers,
	getMatch,
	getMatches,
	getTeams
}