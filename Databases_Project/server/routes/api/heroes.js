import { Router } from 'express'

const router = Router()

router.get('/', async (req, res, next) => {

	const sql = `
		SELECT id, img
		FROM heroes
		ORDER BY hero_name
		LIMIT ${req.query.limit}
	`

	req.mysql.query(sql, (err, result) => {
		res.json(result)
	})
})

router.get('/:id', async (req, res, next) => {

	const sql = `
		SELECT *
		FROM heroes
		WHERE heroes.id = ${req.params.id};
	`

	req.mysql.query(sql, (err, result) => {
		res.json(result)
	})
})

export default router