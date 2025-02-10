import axiosInstance from "../api/axiosInstance"
import {useLocationContext} from "../context/LocationContext.tsx";
import {useFetchLocations} from "../hook/LocationHooks.ts";


function LocationsView() {
    const {locations, setLocations} = useLocationContext()
    useFetchLocations()

    const handleDelete = (id: number) => {
        axiosInstance.delete(`/api/locations/${id}`)
            .then(() => {
                setLocations(locations.filter(location => location.id !== id))
            })
            .catch(error => console.error("Error deleting Location: ", error))
    }

    return (
        <div>
            <h1>Locations</h1>
            <table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>parent location</th>
                </tr>
                </thead>
                <tbody>
                {locations.map(location => (
                    <tr key={location.id}>
                        <th>{location.name}</th>
                        <th>{location.description}</th>
                        <th>{location.parentLocation?.name}</th>
                        <th>
                            <button onClick={() => handleDelete(location.id)}>delete</button>
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default LocationsView