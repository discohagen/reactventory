import { useDeleteItem, useFetchItems, useItemContext } from "../state/hook/itemHooks.ts"
import { useFetchLocations, useLocationContext } from "../state/hook/locationHooks.ts"
import { Table } from "../component/table/Table.tsx"


export const ViewAllItems = () => {
  const { data: items } = useItemContext()
  const { data: locations } = useLocationContext()
  const { deleteData: deleteItem } = useDeleteItem()
  useFetchItems()
  useFetchLocations()

  const getLocationsName = (locationId: number) => {
    const location = locations.find(loc => loc.id === locationId)
    return location ? location.name : ""
  }

  const itemsWithLocationNames = items.map(item => ({
    ...item,
    locationName: getLocationsName(item.locationId)
  }))

  const headers = {
    name: "Name",
    description: "Description",
    quantity: "Quantity",
    locationName: "Location"
  }

  return (
    <>
      <Table title={"Items"} data={itemsWithLocationNames} headers={headers} deleteData={deleteItem} />
    </>
  )
}