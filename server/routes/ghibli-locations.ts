import { Router } from 'express'
import axios from 'axios'

// import * as db from '../db/ghibli-locations-fns.ts'
import 'dotenv/config'

const router = Router()

console.log(process.env.GOOGLE_KEY)

// '/api/v1/ghibli/locations'

router.get('/', async (req, res) => {
  try {
    const placeId = 'ChIJ980515_kGGARxaRRbCKFVBE'
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.GOOGLE_KEY}`,
    )
    res.json(response.data.result.rating)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
