import mongoose from 'mongoose'

// choised place of user
const placeSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Place', placeSchema)
