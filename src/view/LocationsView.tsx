import {useDeleteLocation, useFetchLocations, useLocationContext} from "../hook/LocationHooks.ts";
import {Link} from "react-router-dom";


function LocationsView() {
    const {locations} = useLocationContext()
    const {deleteLocation, error, success} = useDeleteLocation()
    useFetchLocations()

    const handleDelete = (id: number) => {
        deleteLocation(id).then()
    }

    return (
        <div>
            {error && <p>{error}</p>}
            {success && <p>Location deleted successfully</p>}
            <h1>Locations</h1>
            <Link to="/locations/create">
                <button>Create Location</button>
            </Link>
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
                        <td>{location.name}</td>
                        <td>{location.description}</td>
                        <td>{location.parentLocation?.name}</td>
                        <td>
                            <button onClick={() => handleDelete(location.id)}>delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default LocationsView