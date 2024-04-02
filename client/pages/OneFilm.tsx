import { useParams } from 'react-router-dom'
import { useSingleFilm } from '../hooks/useFilmData'

export default function OneFilm() {
  const { id } = useParams()
  const { data: film, isLoading, error, isError } = useSingleFilm(id)

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  if (film) {
    return (
      <>
        <h1>
          {film.title} ({film.release_year})
        </h1>
        <div className="film-container">
          <img src={film.banner_url} alt={`film banner for ${film.title}`} />
          <>
            <p>Directed by: {film.director}</p>
            <p>Original title: {film.original_title}</p>
            <p>Synopsis: {film.description}</p>
          </>
        </div>
      </>
    )
  }
}
