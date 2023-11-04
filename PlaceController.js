import Place from './Place.js'

// logic of actions with place

class PlaceController {
  /* add place */

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

  /* get all places */

  async getAll(req, res) {
    try {
      const places = await Place.find() // get all records

      return res.json(places)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  /* get one place */

  async get(req, res) {
    try {
      const { id } = req.params

      // if id no exists - return error with message
      if (!id) {
        res.status(400).json({ message: 'Id not specified' })
      }
      const place = await Place.findById(id)

      return res.json(place)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  /* update place */

  async update(req, res) {
    try {
      const place = req.body

      // if id no exists - return error with message
      if (!place._id) {
        res.status(400).json({ message: 'Id not specified' })
      }

      const updatedPlace = await Place.findByIdAndUpdate(place._id, place, { new: true }) // get updated version

      return res.json(updatedPlace)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  /* delete place */

  async delete(req, res) {
    try {
      const { id } = req.params

      // if id no exists - return error with message
      if (!id) {
        res.status(400).json({ message: 'Id not specified' })
      }

      const place = await Place.findByIdAndDelete(id)

      return res.json(place)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new PlaceController()
