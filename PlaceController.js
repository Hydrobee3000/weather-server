import Place from './Place.js'

// logic of actions with place

class PlaceController {
  // post
  async create(req, res) {
    try {
      const { userId, content } = req.body // get params from body request
      const place = await Place.create({ userId, content }) // create new record in db

      console.log(req.body)
      res.json(place)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new PlaceController()
