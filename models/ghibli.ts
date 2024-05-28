export interface Film {
  id: number
  title: string
  release_year: string
  banner_url: string
  director: string
  original_title: string
  description: string
}

export interface Dish {
  id: number
  film_id: number
  name: string
  image_url: string
  original_name: string
  description: string
}

export interface CharacterData {
  film_id: number
  name: string
  image_url: string
}

export interface Character extends CharacterData {
  id: number
}

export interface CategoryWithFilm {
  id: number
  name: string
  description: string
  img: string
  film: string
  originalTitle: string
  filmId: number
  year: string
}
export interface CategoryWithDescription extends CategoryWithFilm {
  category: string
}

export interface Data {
  dishes: CategoryWithFilm[]
  chars: CategoryWithFilm[]
  places: CategoryWithFilm[]
}

export interface Category {
  id: number
  film_id: number
  name: string
  image_url: string
  original_name: string
  description: string
}

export interface Reveal {
  showAns: boolean
  message: string
  img: string
  showScore: boolean
}

export interface End {
  showScore: boolean
  score: number
}

export interface Location {
  id: string
  film: number
  imgUrl: string
  description: string
  rating: number
  name: string
  address: string
  url: string
}
