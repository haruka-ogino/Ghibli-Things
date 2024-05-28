import { Router } from 'express'
import axios from 'axios'

import * as db from '../db/ghibli-locations-fns.ts'
import 'dotenv/config'

const router = Router()

// '/api/v1/ghibli/locations'

router.get('/', async (req, res) => {
  try {
    const locations = await db.getAllLocations()
    const locationData = await Promise.all(
      locations.map(async (location) => {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${location.id}&key=${process.env.GOOGLE_KEY}`,
        )
        return {
          ...location,
          rating: response.data.result.rating,
          name: response.data.result.name,
          address: response.data.result.formatted_address,
          url: response.data.result.url,
        }
      }),
    )

    res.json(locationData)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
