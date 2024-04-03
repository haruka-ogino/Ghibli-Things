import { Link } from 'react-router-dom'
import { useFilmData } from '../hooks/useFilmData.ts'

export default function Films() {
  const { data: films, isError, isLoading, error } = useFilmData()

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  if (films) {
    return (
      <>
        <h1>Ghibli Films</h1>
        <ul>
          {films.map((film, index) => (
            <li key={index}>
              <Link to={`${film.id}`}>
                <h2>{film.title}</h2>
                <img
                  src={film.banner_url}
                  alt={`film banner for ${film.title}`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
