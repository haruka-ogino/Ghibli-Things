import request from 'superagent'

const rootUrl = '/api/v1/ghibli'

export async function getLocations() {
  try {
    const res = await request.get(rootUrl + '/locations')
    return res.body
  } catch (e) {
    console.error(e)
  }
}
