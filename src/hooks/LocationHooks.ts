import {useContext} from "react";
import {LocationContext} from "../contexts/LocationContext.tsx";
import {useCreateData, useDeleteData, useFetchData} from "./genericHooks.ts";
import {LocationModel} from "../models/LocationModel.ts";

export function useLocationContext() {
    const context = useContext(LocationContext)
    if (!context) {
        throw new Error("useLocationContext must be used within a LocationProvider")
    }
    return context
}

export function useFetchLocations() {
    useFetchData<LocationModel>(LocationContext, "/api/locations")
}

export function useCreateLocation() {
    return useCreateData<LocationModel>(LocationContext, "/api/locations")
}

export function useDeleteLocation() {
    return useDeleteData<LocationModel>(LocationContext, "/api/locations")
}