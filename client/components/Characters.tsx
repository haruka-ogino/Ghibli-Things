import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // MutationFunction,
} from '@tanstack/react-query'
import { charsWithFilms /*, getChars*/ } from '../apis/filmsApi.ts'
import { Link } from 'react-router-dom'

export default function Characters() {
  const {
    data: characters,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['films'], queryFn: charsWithFilms })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  if (characters) {
    return (
      <>
        <ul>
          {characters.map((char, index) => (
            <li key={index}>
              <h2>{char.name}</h2>
              <img src={char.img} alt={`${char.name}`} />
              <p>From: {char.film}</p>
              <p>Year of release: {char.year}</p>
              <Link to={`${char.id}/edit`}>
                <p>edit character</p>
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
