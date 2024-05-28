import db from './connection.ts'

export async function getAllLocations() {
  return await db('locations')
    .leftJoin('films', 'films.id', 'locations.film_id')
    .select(
      'locations.id as id',
      'films.title as film',
      'locations.image_url as imgUrl',
      'locations.description as description',
    )
}
