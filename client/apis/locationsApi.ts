import request from 'superagent'
import { Location } from '../../models/ghibli'

const rootUrl = '/api/v1/ghibli'

export async function getLocations(): Promise<Location[] | undefined> {
  try {
    const res = await request.get(rootUrl + '/locations')
    return res.body
  } catch (e) {
    console.error(e)
  }
}
