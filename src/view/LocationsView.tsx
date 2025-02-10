import {useEffect, useState} from "react"
import {LocationModel} from "../model/LocationModel"
import axiosInstance from "../api/axiosInstance"


function LocationsView() {
    const [locations, setLocations] = useState<LocationModel[]>([])

    useEffect(() => {
        axiosInstance.get("/api/locations")
            .then(response => setLocations(response.data))
            .catch(error => console.error("Error fetching Locations: ", error))
    }, [])

    return (
        <div>
            <h1>Locations</h1>
            <ul>
                {locations.map(location => <li key={location.id}>{location.name}</li>)}
            </ul>
        </div>
    )
}

export default LocationsView