/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('locations').del()
  await knex('locations').insert([
    {
      id: 'ChIJmbzCFl_jGGAR98V28VrP0QI',
      film_id: 6,
      image_url: 'https://www.ghibli.jp/gallery/howl049.jpg',
      description: '',
    },
  ])
}
