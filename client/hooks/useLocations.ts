import { useQuery } from '@tanstack/react-query'
import { getLocations } from '../apis/locationsApi'

export default function useGetLocations() {
  return useQuery({ queryKey: ['locations'], queryFn: getLocations })
}
