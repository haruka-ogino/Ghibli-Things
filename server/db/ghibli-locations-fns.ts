import db from './connection.ts'

export async function getAllLocations() {
  return await db('locations')
    // .join('films', 'films.id', 'locations.film_id')
    .select(
      'locations.id as id',
      'film_id as film',
      'locations.image_url as imgUrl',
      'locations.description as description',
    )
}
