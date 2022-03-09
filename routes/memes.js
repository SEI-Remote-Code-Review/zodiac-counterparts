import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as memesCtrl from '../controllers/memes.js'


const router = Router()

router.get('/', memesCtrl.index)
router.get('/:id', memesCtrl.show)

router.post('/', isLoggedIn, memesCtrl.create)

router.patch('/:id/flip-funny', isLoggedIn, memesCtrl.flipFunny)

export {
  router
}