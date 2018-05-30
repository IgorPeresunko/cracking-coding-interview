import { Router } from 'express'

const router = Router()

router.get('/', async (req, res, next) => {

	const sql = `
		SELECT *
		FROM teams
		ORDER BY rating DESC
		LIMIT ${req.query.limit}
	`

	req.mysql.query(sql, (err, result) => {
		
		res.json(result)
	})
})

router.get('/:id', async (req, res, next) => {

	const sql = `
		SELECT *
		FROM teams
		WHERE id = ${req.params.id}
	`

	req.mysql.query(sql, (err, result) => {
		
		res.json(result)
	})
})

export default router