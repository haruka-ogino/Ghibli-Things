/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('characters').del()
  await knex('characters').insert([
    {
      id: 1,
      name: 'Totoro',
      film_id: 3,
      description:
        'Totoro is a forest spirit who lives in a giant camphor tree. He is featured in the film "My Neighbor Totoro," where he befriends two young sisters, Satsuki and Mei, during their move to the countryside.',
      image_url: 'https://www.ghibli.jp/gallery/totoro030.jpg',
    },
    {
      id: 2,
      name: 'Chihiro Ogino',
      film_id: 4,
      description:
        'Chihiro Ogino, also known as Sen, is the main protagonist of the film "Spirited Away." She is a courageous young girl who becomes trapped in the spirit world and embarks on a journey to save her parents and return to the human world.',
      image_url: 'https://www.ghibli.jp/gallery/chihiro019.jpg',
    },
    {
      id: 3,
      name: 'No Face',
      film_id: 4,
      description:
        'No Face is a mysterious spirit creature from "Spirited Away." Initially appearing as a lonely and quiet entity, it later becomes obsessed with Chihiro and her journey in the spirit world, symbolizing themes of greed and loneliness.',
      image_url: 'https://www.ghibli.jp/gallery/chihiro041.jpg',
    },
    {
      id: 4,
      name: 'Catbus',
      film_id: 3,
      description:
        'Catbus is a magical creature from "My Neighbor Totoro." It has the ability to teleport and is a friendly ally to Satsuki and Mei, helping them navigate the fantastical world they encounter in the film.',
      image_url: 'https://www.ghibli.jp/gallery/totoro044.jpg',
    },
    {
      id: 5,
      name: 'Calcifer',
      film_id: 1,
      description:
        'Calcifer is a fire demon featured in "Howl\'s Moving Castle." He powers the castle and forms a close bond with the main character, Sophie, as they work together to break a curse and unravel the mysteries surrounding Howl.',
      image_url: 'https://www.ghibli.jp/gallery/howl012.jpg',
    },
    {
      id: 6,
      name: 'Soot Sprites',
      film_id: 4,
      description:
        'Soot Sprites are small, black, fuzzy creatures that appear in several Studio Ghibli films, including "Spirited Away." They are mischievous but generally harmless, adding a touch of whimsy to the magical worlds depicted in the movies.',
      image_url: 'https://www.ghibli.jp/gallery/chihiro014.jpg',
    },
    {
      id: 7,
      name: 'Yubaba',
      film_id: 4,
      description:
        'Yubaba is a powerful witch and the owner of the bathhouse in "Spirited Away." She is a complex character with a strict demeanor, yet she also shows moments of compassion and understanding, especially towards her employees.',
      image_url: 'https://www.ghibli.jp/gallery/chihiro017.jpg',
    },
    {
      id: 8,
      name: 'The Baron',
      film_id: 7,
      description:
        'The Baron is a dapper and sophisticated cat figurine who plays a key role in "The Cat Returns." He helps Haru, the main protagonist, navigate the magical world of cats after she saves the life of a prince from a cat kingdom.',
      image_url: 'https://www.ghibli.jp/gallery/mimi013.jpg',
    },
    {
      id: 9,
      name: 'Howl',
      film_id: 1,
      description:
        'Howl is a powerful wizard with a mysterious past in "Howl\'s Moving Castle." He is known for his flamboyant personality and his ability to transform into a bird-like creature. Despite his initial aloofness, he forms a deep connection with Sophie.',
      image_url: 'https://www.ghibli.jp/gallery/howl027.jpg',
    },
    {
      id: 10,
      name: 'Sophie Hatter',
      film_id: 1,
      description:
        'Sophie Hatter is the protagonist of "Howl\'s Moving Castle." After being cursed by a witch and transformed into an elderly woman, Sophie embarks on a journey to break the curse and discovers her inner strength and resilience along the way.',
      image_url:
        'https://wegotthiscovered.com/wp-content/uploads/2023/09/Sophie-Howls-Moving-Castle.jpg',
    },
    {
      id: 11,
      name: 'Kiki',
      film_id: 5,
      description:
        'Kiki is a young witch-in-training and the titular character of "Kiki\'s Delivery Service." She moves to a new town to complete her witch training and starts a delivery service using her broomstick. The film follows her adventures and growth.',
      image_url:
        'https://miro.medium.com/v2/resize:fit:2560/format:webp/0*H6X1KQzdLZTz3-fV.jpeg',
    },
    {
      id: 12,
      name: 'Mei',
      film_id: 3,
      description:
        'Mei is the younger sister of Satsuki in "My Neighbor Totoro." She is curious, adventurous, and forms a special bond with the magical creatures she encounters in the countryside, particularly Totoro and the Catbus.',
      image_url: 'https://www.ghibli.jp/gallery/totoro023.jpg',
    },
    {
      id: 13,
      name: 'Shizuku',
      film_id: 6,
      description:
        'Shizuku is the main character in "Whisper of the Heart." A curious and creative young girl, she discovers her passion for writing and storytelling while exploring her dreams and aspirations, ultimately leading to personal growth.',
      image_url: 'https://www.ghibli.jp/gallery/mimi049.jpg',
    },
    {
      id: 14,
      name: 'Haku',
      film_id: 4,
      description:
        'Haku is a mysterious boy who can transform into a dragon in "Spirited Away." He assists Chihiro on her quest in the spirit world and holds secrets to his identity and connection to the mystical realm.',
      image_url: 'https://www.ghibli.jp/gallery/chihiro005.jpg',
    },
  ])
}
