import { Router } from 'express'

import players from './players'
import matches from './matches'

const router = Router()

router.use('/players', players)
router.use('/matches', matches)

export default router