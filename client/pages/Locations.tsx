import useGetLocations from '../hooks/useLocations'

export default function Locations() {
  const location = 'hey'
  const { data: locations, isLoading, isError } = useGetLocations()

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error retrieving data.</h1>

  if (locations) {
    console.log(locations)
    return (
      <>
        <h1>Real Life Locations</h1>
        <p>{location}</p>
      </>
    )
  }
}
