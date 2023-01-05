import express from 'express'
import mongoose from 'mongoose'

const PORT = 5000
const DB_URL = `mongodb+srv://user:user@cluster0.edfrxne.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())

async function startApp() {
  try {
    await mongoose.connect(DB_URL) // connecion to mongoDB

    // прослушиваем изменения на указаном порту
    app.listen(PORT, () => {
      console.log(`Server Started at ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

startApp()
