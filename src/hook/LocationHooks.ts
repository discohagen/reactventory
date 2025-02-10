import {useLocationContext} from "../context/LocationContext.tsx";
import {useEffect} from "react";
import axiosInstance from "../api/axiosInstance.ts";

export function useFetchLocations() {
    const {setLocations} = useLocationContext()

    useEffect(() => {
        axiosInstance.get("/api/locations")
            .then(response => setLocations(response.data))
            .catch(error => console.error("Error fetching Locations: ", error))
    }, [setLocations])
}