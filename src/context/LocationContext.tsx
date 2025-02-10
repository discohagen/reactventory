import {LocationModel} from "../model/LocationModel.ts";
import * as React from "react";
import {createContext, ReactNode, useContext, useState} from "react";

interface LocationContextProps {
    locations: LocationModel[]
    setLocations: React.Dispatch<React.SetStateAction<LocationModel[]>>
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined)

export function LocationProvider({children}: { children: ReactNode }) {
    const [locations, setLocations] = useState<LocationModel[]>([])

    return (
        <LocationContext.Provider value={{locations, setLocations}}>
            {children}
        </LocationContext.Provider>
    )
}

export function useLocationContext() {
    const context = useContext(LocationContext)
    if (!context) {
        throw new Error("useLocationContext must be used within a LocationProvider")
    }
    return context
}