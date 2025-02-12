import {useContext, useEffect, useState} from "react";
import axiosInstance from "../api/axiosInstance.ts";
import {LocationContext} from "../context/LocationContext.tsx";

export function useLocationContext() {
    const context = useContext(LocationContext)
    if (!context) {
        throw new Error("useLocationContext must be used within a LocationProvider")
    }
    return context
}

export function useFetchLocations() {
    const {setLocations} = useLocationContext()

    useEffect(() => {
        axiosInstance.get("/api/locations")
            .then(response => setLocations(response.data))
            .catch(error => console.error("Error fetching Locations: ", error))
    }, [setLocations])
}

export function useCreateLocation() {
    const {setLocations} = useLocationContext()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    async function createLocation(name: string, description: string) {
        setIsLoading(true)
        setError(null)
        try {
            const response = await axiosInstance.post("/api/locations", {name, description})
            setLocations(prevLocations => [...prevLocations, response.data])
            setSuccess(true)
        } catch (err) {
            setError("Error creating Location: " + err)
        } finally {
            setIsLoading(false)
        }
    }

    return {createLocation, isLoading, error, success}
}