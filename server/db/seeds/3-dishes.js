/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('dishes').del()
  await knex('dishes').insert([
    {
      id: 1,
      film_id: 1,
      name: 'Bacon and egg breakfast',
      image_url: 'https://www.ghibli.jp/gallery/howl016.jpg',
      original_name: 'ベーコンエッグ',
      description: 'ベーコンエッグ',
    },
    {
      id: 2,
      film_id: 2,
      name: 'Ramen',
      image_url: 'https://www.ghibli.jp/gallery/ponyo035.jpg',
      original_name: 'ラーメン',
      description: 'ラーメン',
    },
    {
      id: 3,
      film_id: 3,
      name: "Satsuki's Bento Box",
      image_url: 'https://www.ghibli.jp/gallery/totoro015.jpg',
      original_name: 'サツキのお弁当',
      description: 'お弁当',
    },
    {
      id: 4,
      film_id: 5,
      name: 'Chocolate Cake',
      image_url: 'https://www.ghibli.jp/gallery/majo043.jpg',
      original_name: 'チョコレートケーキ',
      description: 'チョコレートケーキ',
    },
    {
      id: 5,
      film_id: 6,
      name: 'Nabeyaki Udon',
      image_url: 'https://www.ghibli.jp/gallery/mimi043.jpg',
      original_name: '鍋焼きうどん',
      description: '鍋焼きうどん',
    },
    {
      id: 6,
      film_id: 8,
      name: 'Siberia',
      image_url: 'https://www.ghibli.jp/gallery/kazetachinu015.jpg',
      original_name: 'シベリア',
      description: 'シベリア',
    },
    {
      id: 7,
      film_id: 5,
      name: 'Herring and pumpkin pie',
      image_url: 'https://www.ghibli.jp/gallery/majo032.jpg',
      original_name: 'ニシンのパイ',
      description:
        'A savory pie dish combining flaky pastry crust with a filling of herring, pumpkin, and savory spices. It offers a unique blend of flavors, balancing the richness of the fish with the sweetness of the pumpkin.',
    },
    {
      id: 8,
      film_id: 4,
      name: 'Konpeito Candy',
      image_url: 'https://www.ghibli.jp/gallery/chihiro014.jpg',
      original_name: 'コンペイトー',
      description:
        'A traditional Japanese sugar candy characterized by its small, colorful, and star-shaped appearance. It is made by slowly crystallizing sugar syrup to form tiny crystals, resulting in a sweet and crunchy treat enjoyed by both children and adults.',
    },
  ])
}

// https://dadskitchen.gyuujaku.com/ghibli/ghibli-meshi-2/
