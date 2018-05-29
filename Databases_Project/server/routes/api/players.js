import { Router } from 'express'

const router = Router()

router.get('/:id', async (req, res, next) => {

	const sql = `
		SELECT
			players.id,
			players.nickname,
			players.avatar
		FROM teams
		JOIN players ON players.team_id = teams.id
		WHERE teams.id = ${req.params.id};
	`

	req.mysql.query(sql, (err, result) => {
		
		res.json(result)
	})
})

export default router