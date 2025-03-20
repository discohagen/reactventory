import { useDeleteLocation, useFetchLocations, useLocationContext } from "../state/hook/locationHooks.ts"
import { Table } from "../component/table/Table.tsx"

export const ViewAllLocations = () => {
  const { data: locations } = useLocationContext()
  const { deleteData: deleteLocation } = useDeleteLocation()
  useFetchLocations()

  const getLocationsName = (locationId: number) => {
    const location = locations.find(loc => loc.id === locationId)
    return location ? location.name : ""
  }

  const locationsWithParentLocationNames = locations.map(location => ({
    ...location,
    parentLocationName: getLocationsName(location.parentLocationId)
  }))

  const headers = {
    name: "Name",
    description: "Description",
    parentLocationName: "Parent Location"
  }

  return (
    <>
      <Table title={"Locations"} data={locationsWithParentLocationNames} headers={headers}
             deleteData={deleteLocation} />
    </>
  )
}