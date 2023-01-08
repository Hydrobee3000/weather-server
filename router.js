import { Router } from 'express'
import PlaceController from './PlaceController.js' // logic of actions with place

const router = Router()

router.post('/places', PlaceController.create) // create
router.get('/places/:id') // read all
router.get('/places/:id') // read one
router.put('/places') // update
router.delete('/places/:id') // delete

export default router
