import axiosInstance from "../api/axiosInstance"
import {useFetchLocations, useLocationContext} from "../hook/LocationHooks.ts";
import {Link} from "react-router-dom";


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