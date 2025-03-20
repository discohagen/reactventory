import { ReactNode } from "react"
import { GenericProvider } from "./GenericProvider.tsx"
import { LocationContext } from "../context/LocationContext.tsx"
import { Location } from "../../dto/location.ts"

export function LocationProvider({ children }: { children: ReactNode }) {
  return (
    <GenericProvider<Location> context={LocationContext}>
      {children}
    </GenericProvider>
  )
}