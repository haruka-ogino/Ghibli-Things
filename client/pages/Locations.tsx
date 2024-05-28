import useGetLocations from '../hooks/useLocations'

export default function Locations() {
  const location = 'hey'
  const { data: locations, isLoading, isError } = useGetLocations()

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error retrieving data.</h1>

  if (locations) {
    console.log(locations[0])

    const fields = Object.keys(locations[0])
    console.log(fields)

    return (
      <>
        <h1>Real Life Locations</h1>
        <p>{location}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Film</th>
              <th>Description</th>
              <th>Rating</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, i) => (
              <tr key={i}>
                <td>{location.name}</td>
                <td>{location.film}</td>
                <td>{location.description}</td>
                <td>{location.rating}</td>
                <td>
                  <a href={location.url}>{location.address}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}
