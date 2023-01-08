import express from 'express'
import mongoose from 'mongoose'
import Place from './Place.js'

const PORT = 5000
const DB_URL = `mongodb+srv://user:user@cluster0.edfrxne.mongodb.net/?retryWrites=true&w=majority` // connection db url

const app = express()

app.use(express.json()) // to convert json format

// app.get('/', (req, res) => {
//   res.status(200).json('Сервер работает')
// })

app.post('/', async (req, res) => {
  try {
    const { userId, content } = req.body // get params from body request
    const place = await Place.create({ userId, content }) // create new record in db

    console.log(req.body)
    res.json(place)
  } catch (error) {
    res.status(500).json(error)
  }
})

async function startApp() {
  try {
    await mongoose.connect(DB_URL) // connection to mongoDB

    // listen for changes on the specified port
    app.listen(PORT, () => {
      console.log(`Server Started at ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

startApp()
