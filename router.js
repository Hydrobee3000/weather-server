import { Router } from 'express'
import PlaceController from './PlaceController.js' // logic of actions with place

const router = Router()

router.post('/places', PlaceController.create) // create
router.get('/places', PlaceController.getAll) // read all
router.get('/places/:id', PlaceController.get) // read one
router.put('/places', PlaceController.update) // update
router.delete('/places/:id', PlaceController.delete) // delete

export default router
