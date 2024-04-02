import { useParams } from 'react-router-dom'

export default function OneFilm() {
  const { id } = useParams()

  return <p>Heyhey{id}</p>
}
