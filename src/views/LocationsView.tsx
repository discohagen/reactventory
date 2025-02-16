import {useDeleteLocation, useFetchLocations, useLocationContext} from "../hooks/LocationHooks.ts";
import ListDataView from "./ListDataView.tsx";


function LocationsView() {
    const {data: locations} = useLocationContext()
    const {deleteData: deleteLocation, error, success} = useDeleteLocation()
    useFetchLocations()

    return (
        <ListDataView data={locations} deleteData={deleteLocation} createRoute={"/locations/create"} error={error}
                      success={success} title={"Locations"}/>
    )
}

export default LocationsView