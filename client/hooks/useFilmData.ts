import { useQuery } from '@tanstack/react-query'
import { getFilm, getFilms } from '../apis/filmsApi.ts'

export function useFilmData() {
  return useQuery({ queryKey: ['films'], queryFn: getFilms })
}

export function useSingleFilm(idString: string | undefined) {
  const id = Number(idString)
  return useQuery({ queryKey: [idString, 'film'], queryFn: () => getFilm(id) })
}
