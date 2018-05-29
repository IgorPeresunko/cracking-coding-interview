import { Router } from 'express'

const router = Router()

router.get('/', async (req, res, next) => {

	const sql = `
		SELECT
			matches.id AS id,
			radiant.id AS radiant_id,
			dire.id AS dire_id,
			radiant.team_name AS radiant,
			dire.team_name AS dire,
			matches.radiant_score,
			matches.dire_score,
			matches.radiant_win
		FROM matches
		JOIN teams AS radiant ON radiant.id = matches.radiant_team_id
		JOIN teams AS dire ON dire.id = matches.dire_team_id
		JOIN leagues ON leagues.id = matches.league_id
		LIMIT ${req.query.limit};
	`

	req.mysql.query(sql, (err, result) => {
		res.json(result)
	})
})

router.get('/:id', async (req, res, next) => {

	const sql = `
		SELECT
			matches.id AS id,
			radiant.id AS radiant_id,
			radiant.logo_url AS radiant_logo,
			radiant.team_name AS radiant,
			radiant.rating AS radiant_rating,
			dire.id AS dire_id,
			dire.logo_url AS dire_logo,
			dire.team_name AS dire,
			dire.rating AS dire_rating,
			matches.duration,
			matches.radiant_score,
			matches.dire_score,
			matches.radiant_win,
			leagues.id AS league_id,
			leagues.league_name
		FROM matches
		JOIN teams AS radiant ON radiant.id = matches.radiant_team_id
		JOIN teams AS dire ON dire.id = matches.dire_team_id
		JOIN leagues ON leagues.id = matches.league_id
		WHERE matches.id = ${req.params.id};
	`

	req.mysql.query(sql, (err, result) => {
		res.json(result)
	})
})

router.post('/', async (req, res, next) => {
	const sql = `
		INSERT INTO matches VALUES (
			"${req.body.id}",
			${req.body.duration},
			${req.body.radiant_team_id},
			${req.body.dire_team_id},
			${req.body.league_id},
			${req.body.radiant_score},
			${req.body.dire_score},
			${req.body.radiant_win}
		)
	`

	req.mysql.query(sql, (err, result) => {
		res.json(result)
	})
})

router.put('/:id', async (req, res, next) => {
	const { match } = req.body

	const update_query = Object.keys(match)
		.map(key => `${key} = ${match[key]}`).join(', ')

	const sql = `
		UPDATE matches
		SET ${update_query}
		WHERE id = "${req.params.id}"
	`

	req.mysql.query(sql, (err, result) => {
		res.json(result)
	})
})

router.delete('/:id', async (req, res, next) => {
	const sql = `
		DELETE FROM matches
		WHERE id = "${req.params.id}"
	`
	
	req.mysql.query(`DELETE FROM match_team WHERE match_id = "${req.params.id}"`, err =>
		req.mysql.query(sql, err =>
			res.json({ success: true })))
})


export default router