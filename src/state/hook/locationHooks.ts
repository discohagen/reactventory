import { useCreateData, useDeleteData, useFetchData, useGenericContext } from "./genericHook.ts"
import { LocationContext } from "../context/LocationContext.tsx"
import { Location } from "../../dto/location.ts"

export function useLocationContext() {
  return useGenericContext<Location>(LocationContext)
}

export function useFetchLocations() {
  useFetchData<Location>(LocationContext, "/api/locations")
}

export function useCreateLocation() {
  return useCreateData(LocationContext, "/api/locations")
}

export function useDeleteLocation() {
  return useDeleteData(LocationContext, "/api/locations")
}