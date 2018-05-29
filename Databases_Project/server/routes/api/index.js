import { Router } from 'express'

import players from './players'
import matches from './matches'
import heroes from './heroes'
import teams from './teams'

const router = Router()

router.use('/players', players)
router.use('/matches', matches)
router.use('/heroes', heroes)
router.use('/teams', teams)

export default router