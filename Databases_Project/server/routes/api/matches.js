import { Router } from 'express'

const router = Router()

router.get('/', async (req, res, next) => {

	const sql = `
		SELECT
			radiant.id AS radiant_id,
			dire.id AS dire_id,
			radiant.team_name AS radiant,
			dire.team_name AS dire,
			matches.duration,
			matches.radiant_score,
			matches.dire_score,
			matches.radiant_win,
			leagues.league_name
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

router.post('/', async (req, res, next) => {
	
})

router.put('/', async (req, res, next) => {
	
})

router.delete('/', async (req, res, next) => {
	
})


export default router