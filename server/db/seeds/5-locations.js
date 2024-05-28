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
      image_url:
        'https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/040/281/original/cover-photo.jpg',
      description:
        'A neighborhood that inspired locations in "Whisper of the Heart"',
    },
    {
      id: 'ChIJtQ9MisKLGGARlhNYGIrLAK4',
      film_id: null,
      image_url:
        'https://digitame.jp/wp-content/uploads/2023/03/20170901233750701.jpg',
      description:
        'The Ni-Tele Really Big Clock (日テレ大時計) is a large clock and sculpture designed by Hayao Miyazaki, installed outside the second story of the Nittele Tower in Minato Ward, Tokyo, Japan. The structure, which is made entirely of hand-worked copper and steel plates, is 12 meters tall by 18 meters long and contains 32 separate moving mechanical features. This clockwork assembly performs a three-minute show a few times each day (four on weekdays, five on weekends).',
    },
  ])
}
