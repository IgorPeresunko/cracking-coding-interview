import api from './api'
import { readFileSync, writeFileSync } from 'fs'

const main = () =>
	new Promise(async (resolve, reject) => {
		const { endpoints, data, request } = api
		const results = {}

		console.log('Start reading data from opendota api...')

		const promises = data
			.map(query => request(endpoints[query]))

		const responses = await Promise.all(promises)

		responses
			.map((json, i) => JSON.parse(json))
			.forEach((row, i) => results[data[i]] = row)

		// data
		// 	.map(name => readFileSync(`${__dirname}/data2/${name}.json`, 'utf8'))
		// 	.map(file => JSON.parse(file))
		// 	.forEach((row, i) => results[data[i]] = row)


		/* <-- HEROES table --> */
		results.heroes = results.heroes.map(row =>
			`INSERT INTO heroes VALUES (${row.id}, "${row.localized_name}", "${row.primary_attr}", "${row.attack_type}", "${row.roles.join()}", "${row.img}", ${row.legs});`)

		writeFileSync(`./mysql_scripts/3.heroes.sql`, results.heroes.join('\n'), 'utf-8')

		/* <-- PLAYERS table --> */
		results.players = results.players.slice(1).map(row => checkValues(row)).map(row =>
			`INSERT INTO players VALUES (${row.account_id}, "${row.steamid}", "${row.avatar}", "${row.name}", ${row.team_id}, "${row.country_code}");`)

		writeFileSync(`./mysql_scripts/4.players.sql`, results.players.join('\n'), 'utf-8')

		/* <-- TEAMS table --> */
		results.teams = results.teams.map(row => checkValues(row)).map(row =>
			`INSERT INTO teams VALUES (${row.team_id}, ${row.rating}, ${row.wins}, ${row.losses}, "${row.name}", "${row.logo_url}");`)

		writeFileSync(`./mysql_scripts/2.teams.sql`, results.teams.join('\n'), 'utf-8')

		/* <-- MATCH_TEAM table --> */
		const match_team = results.matches
			.filter(m => m.radiant_team_id && m.dire_team_id)
			.map(match =>
				`INSERT INTO match_team VALUES (${match.radiant_team_id}, "${match.match_id}");\nINSERT INTO match_team VALUES (${match.dire_team_id}, "${match.match_id}");`)

		writeFileSync(`./mysql_scripts/6.match_team.sql`, match_team.join('\n'), 'utf-8')

		/* <-- MATCHES table --> */
		results.matches = results.matches.map(row => checkValues(row)).map(row =>
			`INSERT INTO matches VALUES ("${row.match_id}", ${row.duration}, ${row.radiant_team_id}, ${row.dire_team_id}, ${row.leagueid}, ${row.radiant_score}, ${row.dire_score}, ${row.radiant_win});`)

		writeFileSync(`./mysql_scripts/5.matches.sql`, results.matches.join('\n'), 'utf-8')

		/* <-- LEAGUES table --> */
		results.leagues = results.leagues.map(row => checkValues(row)).map(row =>
			`INSERT INTO leagues VALUES (${row.leagueid}, "${row.tier}", "${row.name}");`)

		writeFileSync(`./mysql_scripts/1.leagues.sql`, results.leagues.join('\n'), 'utf-8')

		console.log('Data successfuly fetched!')

		resolve()
	})

const checkValues = _obj => {
	const obj = {..._obj}
	Object.keys(obj).forEach(key => {
		if (typeof obj[key] === 'string') {
			obj[key] = obj[key].replace(/[/|"]/g, '')
		}
	})
	return obj
}


export default main