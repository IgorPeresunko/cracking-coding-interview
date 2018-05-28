import { Router } from 'express'

const router = Router()

router.get('/', async (req, res, next) => {
	req.mysql.query(`SELECT * FROM players`, (err, result) => {
		
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