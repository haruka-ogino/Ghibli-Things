import db from './connection.ts'

export async function getAllLocations() {
  return await db('locations').select()
}
